import React from 'react';

interface IconProps {
    className?: string;
}

export const Youtube: React.FC<IconProps> = ({ className }) => {
    return <img src="/youtube.svg" alt="YouTube logo" className={className} />;
};