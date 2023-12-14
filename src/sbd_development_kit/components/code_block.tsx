import hljs from "highlight.js";
import { useEffect } from "react";

export function SBDCodeBlock(props: { code: string }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-tsx">{props.code}</code>
    </pre>
  );
}
