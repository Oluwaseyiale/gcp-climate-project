const preferredErrorKeys = [
  "detail",
  "message",
  "error",
  "non_field_errors",
  "email",
  "password",
  "firstname",
  "lastname",
  "otp",
];

const readErrorValue = (value: unknown): string | undefined => {
  if (!value) return undefined;

  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value.map(readErrorValue).filter(Boolean).join(", ") || undefined;
  }

  if (typeof value === "object") {
    const errorObject = value as Record<string, unknown>;

    for (const key of preferredErrorKeys) {
      const message = readErrorValue(errorObject[key]);
      if (message) return message;
    }

    for (const nestedValue of Object.values(errorObject)) {
      const message = readErrorValue(nestedValue);
      if (message) return message;
    }
  }

  return undefined;
};

export const getApiErrorMessage = (
  error: unknown,
  fallback = "Something went wrong"
) => {
  const responseData = (error as { response?: { data?: unknown } })?.response?.data;

  return (
    readErrorValue(responseData) ||
    (error instanceof Error ? error.message : undefined) ||
    fallback
  );
};
