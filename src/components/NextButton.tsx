import React from 'react';

interface NextButtonProps {
  text: string;
  isAccountTypeButtonClicked: boolean;
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ text, isAccountTypeButtonClicked, onClick }) => {
  return (
    <div className='w-[300px] h-[48px] rounded-[100px]'>
      <button
        className={`w-full h-full ${isAccountTypeButtonClicked ? 'bg-blue-600' : 'bg-blue-300'} text-white font-bold rounded-[100px]`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default NextButton;