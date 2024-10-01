import { useState } from 'react';
import './FAQItem.css'; // Importar el archivo CSS

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <h4 className="faq-question" onClick={toggleAnswer}>
        {question}
      </h4>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};
