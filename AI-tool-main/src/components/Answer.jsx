import React, { useEffect, useState } from 'react';
import { checkHeading, replaceHeadingStarts } from '../helper';
import ReactMarkdown from 'react-markdown';

import CodeBlock from './codeBlock.jsx';


export default function Answer({ ans, index, totalResult, type }) {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeading(ans)) {
      setHeading(true);
      setAnswer(replaceHeadingStarts(ans));
    }
  }, [ans]); 

const renderer = {
  code({ inline, className, children }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
    <CodeBlock
     language={match[1]}
        value={String(children).replace(/\n$/, "")}/>
    
    ) : (
      <code className={className}>{children}</code>
    );
  },
};


  return (
    <>
      {index === 0 && totalResult > 1 ? (
        <span className="text-base pt-2 block text-white">{answer}</span>
      ) : heading ? (
        <span className="pt-5 block text-white text-base">{answer}</span>
      ) : (
        <span
          className={
            (type === "q" ? "pl-2 mt-2 " : "pl-5 mt-2 ") +
            " text-base text-white"
          }
        >
          <ReactMarkdown components={{ code: renderer.code }}>
            {answer}
          </ReactMarkdown>
        </span>
      )}
    </>
  );
}
