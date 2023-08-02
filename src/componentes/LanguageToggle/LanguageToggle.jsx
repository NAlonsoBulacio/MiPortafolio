import React from 'react';
import { useLanguage } from '../Language/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleToggle = () => {
    toggleLanguage();
  };

  return (
    <button onClick={handleToggle}>
      {language === 'es' ? 'English' : 'Español'}
    </button>
  );
};

export default LanguageToggle;