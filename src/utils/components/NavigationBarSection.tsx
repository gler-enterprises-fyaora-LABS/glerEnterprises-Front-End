import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/i18n";
import {useTranslation} from "react-i18next";

export const NavigationBarSection = () => {
    const { t } = useTranslation();
    const pathname = usePathname();

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
            className="flex flex-col w-full items-center gap-2.5 px-4 py-6 relative"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="flex w-full max-w-7xl h-20 items-center justify-between px-6 md:px-10 py-4 relative bg-[#fcfdff] rounded-[100px] border-b [border-bottom-style:solid] shadow-lg">
                <div className="flex flex-col w-[363px] items-start gap-2.5 relative mt-[-4.39px] mb-[-4.39px]">
                    <img
                        className="relative w-[68px] h-[56.78px]"
                        alt="Company Logo"
                        src="/gler.svg"
                    />
                </div>

                <ul
                    className="justify-center gap-16 inline-flex items-center relative flex-[0_0_auto]"
                    role="menubar"
                >
                    {navigationItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                        <li key={index} role="none">
                            <Link
                                href={item.href}
                                className="gap-2 px-2 py-3 inline-flex items-center relative flex-[0_0_auto] no-underline cursor-pointer"
                                role="menuitem"
                                aria-current={isActive ? "page" : undefined}
                            >
                                <span
                                    className={`relative w-fit mt-[-1.00px] text-[#21272a] text-base tracking-[0] leading-4 whitespace-nowrap ${
                                        isActive
                                            ? "[font-family:'Poppins-Bold',Helvetica] font-bold"
                                            : "[font-family:'Poppins-Medium',Helvetica] font-medium"
                                    }`}
                                >
                                  {item.label}
                                </span>
                            </Link>
                        </li>
                    )})}
                </ul>

                <div className="flex w-[363px] items-center justify-end gap-4 relative">
                    <button
                        type="button"
                        className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white
                            shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90"
                        style={{ letterSpacing: "0.5px" }}
                        aria-label="Contact Us"
                    >
                        {t('landing.contactUs')}
                    </button>
                </div>
            </div>
        </nav>
    );
};