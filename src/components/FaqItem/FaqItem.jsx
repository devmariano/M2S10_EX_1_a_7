import React from 'react';

const FaqItem = ({ faq, isActive, handleToggle }) => {
  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <div className="faq-question" onClick={handleToggle}>
        {faq.title}
      </div>
      {isActive && <div className="faq-answer">{faq.description}</div>}
    </div>
  );
};

export default FaqItem;