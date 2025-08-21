import React from 'react';

interface IconProps {
    className?: string;
}

export const Facebook: React.FC<IconProps> = ({ className }) => {
    return <img src="/facebook.svg" alt="Facebook logo" className={className} />;
};