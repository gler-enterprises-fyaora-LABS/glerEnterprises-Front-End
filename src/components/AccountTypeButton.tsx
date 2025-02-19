import React from 'react';
import { useTranslation } from 'react-i18next';

interface AccountTypeButtonProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const AccountTypeButton: React.FC<AccountTypeButtonProps> = ({ text, isSelected, onClick }) => {
  const { t } = useTranslation();
  
  return (
    <button
      className={`w-36 h-16 font-normal rounded-lg border-2 border-blue-600 ${isSelected ? 'text-white bg-blue-600' : 'text-blue-600'}`}
      onClick={onClick}
    >
      {t(text)}
    </button>
  );
};

export default AccountTypeButton;