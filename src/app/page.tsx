'use client';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import '@/styles/global.css';

export default function Home() {
    const { t, i18n } = useTranslation();

    const switchLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            {/* Language Switcher */}
            <div className="mt-5 flex justify-center space-x-4">
                <button
                    onClick={() => switchLanguage('en')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    English
                </button>
                <button
                    onClick={() => switchLanguage('fr')}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Français
                </button>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-center my-8">
                <h1 className="text-4xl font-bold text-center mb-4">Welcome to Gler</h1>
                <p className="text-lg text-gray-600">This is temporary routing</p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-start w-full max-w-md mx-auto mt-10 space-y-4">
                <Link href="/login">
                    <div className="w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition">
                        {t('login.login')}
                    </div>
                </Link>
                <Link href="/register">
                    <div className="w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition">
                        {t('register')}
                    </div>
                </Link>
                <Link href="/verify-email">
                    <div className="w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition">
                        {t('verifyEmail')}
                    </div>
                </Link>
                <Link href="/forgot-password">
                    <div className="w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition">
                        {t('forgotPassword')}
                    </div>
                </Link>
                <Link href="/terms-and-conditions">
                    <div className="w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition">
                        {t('termsAndConditions')}
                    </div>
                </Link>
            </div>
        </div>
    );
}