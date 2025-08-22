import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/i18n";
import { useTranslation } from "react-i18next";

export const NavigationBarSection = () => {
    const { t } = useTranslation();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { label: "Home", href: "/" },
        {
            label: "Service Providers",
            href: "/service-providers",
        },
        { label: "Investors", href: "/investors" },
    ];

    return (
        <nav
            className="w-full flex flex-col items-center gap-2.5 px-4 py-6 relative"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="flex w-full max-w-7xl h-20 items-center justify-between px-6 md:px-10 py-4 relative bg-[#fcfdff] rounded-[100px] border-b border-solid shadow-lg">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="flex-shrink-0">
                        <img
                            className="relative w-[68px] h-[56.78px]"
                            alt="Company Logo"
                            src="/gler.svg"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <ul
                    className="hidden md:inline-flex justify-center gap-16 items-center"
                    role="menubar"
                >
                    {navigationItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={index} role="none">
                                <Link
                                    href={item.href}
                                    className="gap-2 px-2 py-3 inline-flex items-center no-underline cursor-pointer"
                                    role="menuitem"
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <span
                                        className={`relative w-fit text-[#21272a] text-base tracking-[0] leading-4 whitespace-nowrap ${
                                            isActive ? "font-bold" : "font-medium"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop Contact Us Button */}
                <div className="hidden md:flex items-center justify-end">
                    <button
                        type="button"
                        className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white
                            shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90"
                        style={{ letterSpacing: "0.5px" }}
                        aria-label="Contact Us"
                    >
                        {t("home.contactUs")}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className={`h-6 w-6 ${isMobileMenuOpen ? "hidden" : "block"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        <svg className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden w-full bg-[#fcfdff] shadow-lg rounded-2xl mt-2" id="mobile-menu">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {navigationItems.map((item, index) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                                            isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                                        }`}
                                        aria-current={isActive ? "page" : undefined}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pt-4 pb-2 px-3">
                            <button
                                type="button"
                                className="w-full flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white shadow-lg transition-opacity hover:opacity-90"
                                style={{ letterSpacing: "0.5px" }}
                                aria-label="Contact Us"
                            >
                                {t("home.contactUs")}
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};