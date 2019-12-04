import React from 'react';
import ReactTextRotator from 'react-text-rotator';
 
const content = [
  {
    text: 'Sed ut perspiciatis unde',
    className: 'classA',
    animation: 'fade',
  },
  {
    text: 'Lorem ipsum dolor sit',
    className: 'classB',
    animation: 'fade',
  },
  {
    text: 'Neque porro quisquam',
    className: 'classC',
    animation: 'fade',
  },
  {
    text: 'Ut enim ad minima veniam',
    className: 'classD',
    animation: 'fade',
  },
  {
    text: 'Quis autem vel',
    className: 'classE',
    animation: 'fade',
  },
];
 
const TextRotator = () => (
  <div className="rotator shell">
      <div className="inset-left-100 inset-right-100">
      <ReactTextRotator
      content={content}
      time={5000}
      startDelay={2000}
    />
      </div>
    
  </div>
);

export default TextRotator