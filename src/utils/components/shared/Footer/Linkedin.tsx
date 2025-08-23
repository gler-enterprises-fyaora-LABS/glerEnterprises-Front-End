import React from 'react';

interface IconProps {
    className?: string;
}

export const Linkedin: React.FC<IconProps> = ({ className }) => {
    return <img src="/linkedin.svg" alt="LinkedIn logo" className={className} />;
};