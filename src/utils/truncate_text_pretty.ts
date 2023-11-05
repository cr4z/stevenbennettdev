export default function truncateTextPretty(text: string, maxLength: number) {
  return text.length > maxLength
    ? text
        .slice(0, text.slice(0, maxLength).trim().lastIndexOf(" ") || maxLength)
        .replace(/[\W_]+$/, "")
        .trim() + "..."
    : text;
}
