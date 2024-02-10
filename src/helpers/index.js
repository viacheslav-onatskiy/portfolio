import React from 'react';

export const convertTextToNewLines = (text) => {
  const dataArray = text.split('\\n');

  const jsxElements = dataArray.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return <span>{jsxElements}</span>;
};
