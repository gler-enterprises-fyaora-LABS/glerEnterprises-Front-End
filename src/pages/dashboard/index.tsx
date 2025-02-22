'use client';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '@/styles/global.css';
import "@/i18n";

export default function Dashboard() {
    const { t, i18n } = useTranslation();
    const switchLanguage = async (lang: string) => {
        try {
            await i18n.changeLanguage(lang);
            console.log(`Language switched to: ${lang}`);
        } catch (error) {
            console.error('Error switching language:', error);
        }
    };
    const navigationLinks = [
        { href: '/register', label: t('register') },
        { href: '/login', label: t('login.title') },
        { href: '/verify-email', label: t('verifyEmail') },
        { href: '/forgot-password', label: t('forgotPassword') },
        { href: '/terms-and-conditions', label: t('termsAndConditions') },
    ];

    return (
        <div className="p-5">
            {/* Language Switcher */}
            <div className="flex justify-center space-x-4 mb-8">
                {['en', 'fr'].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => switchLanguage(lang)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        {lang === 'en' ? 'English' : 'Français'}
                    </button>
                ))}
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center text-center my-8">
                <h1 className="text-4xl font-bold mb-4">{t('welcomeMessage')}</h1>
                <p className="text-lg text-gray-600">{t('dashboard.welcome')}</p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-start w-full max-w-md mx-auto space-y-4">
                {navigationLinks.map(({ href, label }) => (
                    <Link key={href} href={href}>
                        <div className="w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition">
                            {label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}