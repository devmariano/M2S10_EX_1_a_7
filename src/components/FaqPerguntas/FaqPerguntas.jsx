import './FaqPerguntas.css';
import React from 'react';
import FaqItem from '../FaqItem/FaqItem';

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

  const [activeIndexes, setActiveIndexes] = React.useState([]);

  const handleToggle = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isActive={activeIndexes.includes(index)}
            handleToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FaqPerguntas;