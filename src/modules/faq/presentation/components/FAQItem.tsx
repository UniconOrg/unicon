import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px' }}>
      <h4 onClick={toggleAnswer} style={{ cursor: 'pointer' }}>
        {question}
      </h4>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default FAQItem;