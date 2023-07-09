
import './FaqPerguntas.css'

import React, { useState } from 'react';


const FaqPerguntas = () => {
  const faqData = [
    {
      title: 'Pergunta 1',
      description: 'Descrição da pergunta 1.',
    },
    {
      title: 'Pergunta 2',
      description: 'Descrição da pergunta 2.',
    },
    {
      title: 'Pergunta 3',
      description: 'Descrição da pergunta 3.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mt-5 mb-5">
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
        >
          <div className="faq-question" onClick={() => handleToggle(index)}>
            {faq.title}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.description}</div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FaqPerguntas;