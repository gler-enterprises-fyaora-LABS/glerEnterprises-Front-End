import React from 'react';

interface IconProps {
    className?: string;
}

export const Instagram: React.FC<IconProps> = ({ className }) => {
    return <img src="/instagram.svg" alt="Instagram logo" className={className} />;
};