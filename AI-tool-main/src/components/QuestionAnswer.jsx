import React from "react";
import Answer from "./Answer";

export default function QuestionAnswer({item,index , result}) {
  return (
    <>
      <div
        key={index + Math.random()}
        className={item.type === "q" ? "flex justify-end" : ""}
      >
        {item.type === "q" ? (
          <li className="text-right border-5 bg-zinc-800 border-zinc-800 rounded-br-3xl   rounded-tl-3xl rounded-bl-3xl p-1 w-fit">
            <Answer
              ans={item.text}
              totalResult={result.length}
              index={index}
              type={item.type}
            />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li key={ansIndex + Math.random()} className="text-left p-1.6">
              <Answer
                ans={ansItem}
                totalResult={item.text.length}
                index={ansIndex}
                type={item.type}
              />
            </li>
          ))
        )}
      </div>
    </>
  );
}
