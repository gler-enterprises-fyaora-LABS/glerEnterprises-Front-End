import React from 'react';

interface IconProps {
    className?: string;
}

export const Twitter: React.FC<IconProps> = ({ className }) => {
    return <img src="/twitter.svg" alt="Twitter logo" className={className} />;
};