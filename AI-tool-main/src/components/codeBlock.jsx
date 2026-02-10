import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeBlock({ language, value }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="relative my-4">
    

      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language={language}
        style={dracula}
        PreTag="div"
        customStyle={{
          borderRadius: "10px",
          padding: "16px",
          fontSize: "14px",
          background: "#1e1e2f",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
