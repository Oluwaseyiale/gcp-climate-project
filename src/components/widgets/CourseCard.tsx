import { useState } from "react";
import fallbackCourseImage from "../../assets/imgA.png";

export type CourseCardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  actionLabel: string;
  loadingLabel?: string;
  disabled?: boolean;
  onAction: () => void;
  className?: string;
};

export const CourseCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  actionLabel,
  loadingLabel,
  disabled = false,
  onAction,
  className = "",
}: CourseCardProps) => {
  const [imageError, setImageError] = useState(false);
  const resolvedImage = !imageSrc || imageError ? fallbackCourseImage : imageSrc;

  return (
    <article className={`course-card animate-card-enter group ${className}`.trim()}>
      <div className="overflow-hidden rounded-md">
        <img
          src={resolvedImage}
          alt={imageAlt || title}
          className="course-card-image"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
      <h2 className="course-card-title mt-4 text-xl font-medium leading-snug text-slate-950 font-figtree sm:text-2xl">
        {title}
      </h2>
      {description && (
        <p className="course-card-description mt-2 text-base font-normal leading-6 text-slate-800 font-figtree">
          {description}
        </p>
      )}
      <button
        type="button"
        onClick={onAction}
        disabled={disabled}
        className="course-card-action mt-6 self-start font-figtree"
      >
        {disabled && loadingLabel ? loadingLabel : actionLabel}
      </button>
    </article>
  );
};

export default CourseCard;
