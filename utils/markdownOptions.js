import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const remarkComponent = {
  code({ language, inline, children, className, ...props }) {
    return inline ? (
      <code
        style={{
          backgroundColor: "azure",
          padding: "4px 10px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
        className={className}
        {...props}
      >
        {children}
      </code>
    ) : (
      <SyntaxHighlighter style={dracula} language={"javascript"} {...props}>
        {children}
      </SyntaxHighlighter>
    );
  },
  image({ image }) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        height={500}
        width={700}
        objectFit="contain"
      />
    );
  },
};

export default remarkComponent;
