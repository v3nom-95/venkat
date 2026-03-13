import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  className?: string;
}

const TypeWriter = ({ words, className = "" }: TypeWriterProps) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(word.substring(0, text.length + 1));
          if (text.length + 1 === word.length) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          setText(word.substring(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="border-r-2 border-primary ml-0.5 animate-blink">&nbsp;</span>
    </span>
  );
};

export default TypeWriter;
