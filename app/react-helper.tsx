import React from "react";

const convertNewLine = (message: string): React.ReactNode => {
  return (
    <>
      {message.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export { convertNewLine };
