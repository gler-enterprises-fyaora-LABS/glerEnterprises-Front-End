import React from 'react';

interface IconProps {
    className?: string;
}

export const Facebook: React.FC<IconProps> = ({ className }) => {
    return <img src="/Facebook.svg" alt="Facebook logo" className={className} />;
};