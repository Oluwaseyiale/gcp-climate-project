import { useMemo } from "react";

type RichTextBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

type RichTextContentProps = {
  value?: string;
  className?: string;
};

const listMarkerPattern = /^[-–—•]\s*/;

const cleanText = (value: string) =>
  value
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const decodeHtmlFallback = (value: string) =>
  value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");

const pushListItem = (blocks: RichTextBlock[], text: string) => {
  const item = cleanText(text.replace(listMarkerPattern, ""));
  if (!item) return;

  const previousBlock = blocks[blocks.length - 1];
  if (previousBlock?.type === "list") {
    previousBlock.items.push(item);
    return;
  }

  blocks.push({ type: "list", items: [item] });
};

const pushTextBlock = (
  blocks: RichTextBlock[],
  textValue: string,
  isStrongHeading = false
) => {
  const text = cleanText(textValue);
  if (!text) return;

  const objectiveMatch = text.match(/^learning objectives?\s*:?\s*(.*)$/i);

  if (isStrongHeading || objectiveMatch) {
    blocks.push({ type: "heading", text: "Learning Objective" });

    const rest = objectiveMatch?.[1] ? cleanText(objectiveMatch[1]) : "";
    if (rest) {
      blocks.push({ type: "paragraph", text: rest });
    }
    return;
  }

  if (listMarkerPattern.test(text)) {
    pushListItem(blocks, text);
    return;
  }

  blocks.push({ type: "paragraph", text });
};

const parseRichText = (value?: string): RichTextBlock[] => {
  if (!value) return [];
  const blocks: RichTextBlock[] = [];

  if (typeof window !== "undefined" && "DOMParser" in window) {
    const document = new DOMParser().parseFromString(value, "text/html");
    const children = Array.from(document.body.children);

    if (children.length > 0) {
      children.forEach((child) => {
        const isStrongHeading =
          child.children.length === 1 &&
          ["STRONG", "B"].includes(child.children[0].tagName);

        pushTextBlock(blocks, child.textContent || "", isStrongHeading);
      });

      return blocks;
    }
  }

  const fallbackText = decodeHtmlFallback(value)
    .replace(/<\/p>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "");

  fallbackText
    .split("\n")
    .map(cleanText)
    .filter(Boolean)
    .forEach((line) => pushTextBlock(blocks, line));

  return blocks;
};

export const RichTextContent = ({ value, className = "" }: RichTextContentProps) => {
  const blocks = useMemo(() => parseRichText(value), [value]);

  if (blocks.length === 0) return null;

  return (
    <div className={`space-y-2 font-figtree text-slate-800 ${className}`.trim()}>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h3
              key={`${block.type}-${index}`}
              className="text-base font-semibold text-slate-950"
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "list") {
          return (
            <ul
              key={`${block.type}-${index}`}
              className="list-disc space-y-1 pl-5 text-sm leading-6"
            >
              {block.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`}>{item}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={`${block.type}-${index}`} className="text-sm leading-6">
            {block.text}
          </p>
        );
      })}
    </div>
  );
};

export default RichTextContent;
