import React, { useEffect } from 'react';

type NotificationType = 'success' | 'error' | 'warning';

interface NotificationProps {
    message: string;
    type: NotificationType;
    onClose: () => void;
    duration?: number;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose, duration = 5000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const baseClasses = "fixed top-5 left-1/2 -translate-x-1/2 transform text-white p-4 rounded-md shadow-lg z-50 flex items-center justify-between min-w-[300px] max-w-[90%]";

    const typeClasses = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-orange-400',
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type]}`}>
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 text-xl font-bold leading-none">&times;</button>
        </div>
    );
};

export default Notification;