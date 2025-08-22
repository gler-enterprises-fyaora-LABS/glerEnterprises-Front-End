import React from "react";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import { Linkedin } from "./Linkedin";
import { Twitter } from "./Twitter";
import { Youtube } from "./Youtube";
import gler from "../../../public/gler.svg";
import Link from "next/link";

export const Footer = () => {
    const socialMediaLinks = [
        { Component: Youtube, label: "YouTube" },
        { Component: Facebook, label: "Facebook" },
        { Component: Twitter, label: "Twitter" },
        { Component: Instagram, label: "Instagram" },
        { Component: Linkedin, label: "LinkedIn" },
    ];

    const navigationLinks = [
        { text: "Customers", href: "/" },
        { text: "Service Providers", href: "/service-providers" },
        { text: "Investors", href: "/investors" },
    ];

    return (
        <footer className="flex w-full flex-col items-center gap-8 bg-[#fcfdff] px-4 py-12 shadow-[0px_-4px_4px_#00000040] sm:px-8 md:px-20">
            <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
                <Link href="/">
                    <img
                        className="h-[50px] w-[59px]"
                        alt="Gler logo"
                        src={gler.src}
                    />
                </Link>
                <nav
                    className="flex flex-wrap items-center justify-center gap-4"
                    aria-label="Social media links"
                >
                    {socialMediaLinks.map(({ Component, label }, index) => (
                        <a
                            key={index}
                            href="#"
                            aria-label={`Visit our ${label} page`}
                            className="transition-opacity duration-200 hover:opacity-70"
                        >
                            <Component className="h-6 w-6" />
                        </a>
                    ))}
                </nav>
            </div>

            <hr className="h-px w-full max-w-7xl border-0 bg-[#0b0b0d]" />

            <div className="flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-8 md:flex-row">
                <p className="whitespace-nowrap font-['Poppins-Regular',Helvetica] text-sm font-normal leading-[19.6px] tracking-[0] text-[#0a0b0c]">
                    Gler @ 2025. All rights reserved.
                </p>
                <nav
                    className="flex flex-wrap items-center justify-center gap-4"
                    aria-label="Footer navigation"
                >
                    {navigationLinks.map(({ text, href }, index) => (
                        <Link
                            key={index}
                            href={href}
                            className="inline-flex items-center gap-2 px-2 py-3 transition-opacity duration-200 hover:opacity-70"
                        >
                            <span className="whitespace-nowrap font-['Poppins-Medium',Helvetica] text-base font-medium leading-4 tracking-[0] text-[#0a0b0c]">
                                {text}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    );
};