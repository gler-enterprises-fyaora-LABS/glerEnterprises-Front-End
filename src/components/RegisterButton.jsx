import React from 'react';
import { useTranslation } from 'react-i18next';

const RegisterButton = ({ text, onClick }) => {
  const { t } = useTranslation();
  
  return (
    <button
      className="w-36 h-16 border-2 border-blue-600 rounded-lg text-blue-600 font-normal hover:bg-blue-600 hover:text-white"
      onClick={onClick}
      style={{
        width: '140px',
        height: '70px',
        borderRadius: '10px',
        gap: '8px',
        borderWidth: '2px',
        borderColor: '#1A78F2',
        hover: {
          backgroundColor: '#1A78F2',
        },
      }}
    >
      {t(text)}
    </button>
  );
};

export default RegisterButton;