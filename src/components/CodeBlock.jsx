import { useRef } from "react";

function CodeBlock({ children }) {
  const codeRef = useRef(null);

  const handleCopy = () => {
    const text = codeRef.current.textContent;
    navigator.clipboard.writeText(text);
    // alert("Copied the text: " + text);
  };

  return (
    <div className="position-relative">
      <pre className="bg-dark text-light p-3 rounded">
        <code ref={codeRef}>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="btn btn-sm btn-light position-absolute top-0 end-0 m-2"
      >
        Copy
      </button>
    </div>
  );
}

export default CodeBlock;
