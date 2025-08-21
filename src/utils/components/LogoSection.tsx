import React from "react";
import { Facebook } from "./Facebook";
import { Instagram } from "./Instagram";
import { Linkedin } from "./Linkedin";
import { Twitter } from "./Twitter";
import { Youtube } from "./Youtube";
import gler from "../../../public/gler.svg";

export const LogoSection = () => {
    const socialMediaLinks = [
        { Component: Youtube, label: "YouTube" },
        { Component: Facebook, label: "Facebook" },
        { Component: Twitter, label: "Twitter" },
        { Component: Instagram, label: "Instagram" },
        { Component: Linkedin, label: "LinkedIn" },
    ];

    const navigationLinks = [
        { text: "Customers", href: "#customers" },
        { text: "Service Providers", href: "#service-providers" },
        { text: "Investors", href: "#investors" },
    ];

    return (
        <footer className="flex flex-col w-full items-start justify-center gap-12 px-20 py-12 relative flex-[0_0_auto] bg-[#fcfdff] shadow-[0px_-4px_4px_#00000040]">
            <div className="gap-12 flex items-center relative self-stretch w-full flex-[0_0_auto]">
                <div
                    className="relative w-[68px] h-[56.78px] aspect-[1.2]"
                    role="img"
                    aria-label="Gler company logo"
                >
                    <div className="absolute w-[60px] h-[50px] top-1.5 left-0">
                        <img
                            className="absolute w-[59px] h-[50px] top-0 left-0"
                            alt="Gler logo"
                            src={gler.src}
                        />
                    </div>
                </div>

                <nav
                    className="flex items-center justify-end gap-4 relative flex-1 grow"
                    aria-label="Social media links"
                >
                    {socialMediaLinks.map(({ Component, label }, index) => (
                        <a
                            key={index}
                            href="#"
                            aria-label={`Visit our ${label} page`}
                            className="hover:opacity-70 transition-opacity duration-200"
                        >
                            <Component className="!relative !w-6 !h-6" />
                        </a>
                    ))}
                </nav>
            </div>

            <hr className="relative self-stretch w-full h-px bg-[#0b0b0d] border-0" />

            <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#0a0b0c] text-sm tracking-[0] leading-[19.6px] whitespace-nowrap">
                    Gler @ 2025. All rights reserved.
                </p>

                <nav
                    className="flex items-center justify-end gap-4 relative flex-1 grow"
                    aria-label="Footer navigation"
                >
                    {navigationLinks.map(({ text, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            className="gap-2 px-2 py-3 inline-flex items-center relative flex-[0_0_auto] hover:opacity-70 transition-opacity duration-200"
                        >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0a0b0c] text-base tracking-[0] leading-4 whitespace-nowrap">
                {text}
              </span>
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
};