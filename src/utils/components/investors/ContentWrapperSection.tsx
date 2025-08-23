import React, { memo } from "react";
import registerInterest from "../../../../public/registerInterest.svg";
import freepikAdjust from "../../../../public/freepikAdjust.svg";
import freepikBackground from "../../../../public/freepikBackground.svg";
import growingCuate from "../../../../public/growingCuate.svg";

export const ContentWrapperSection = memo(() => {
    const steps = [
        {
            id: 1,
            image: registerInterest,
            alt: "Charity concept",
            title: "Register Your Interest",
            description: "Tell us where you operate and what you offer",
            imageClass: "relative w-[90px] h-[90px] aspect-[1] object-cover",
        },
        {
            id: 2,
            image: freepikAdjust,
            alt: "Freepik adjust",
            title: "Review Our Investor Deck",
            description: "Get access to our business model & key metrics.",
            imageClass: "relative w-[135px] h-[90px] aspect-[1.5] object-cover",
        },
        {
            id: 3,
            image: freepikBackground,
            alt: "Freepik background",
            title: "Book a Discovery Call",
            description: "Speak directly with our founders to explore alignment.",
            imageClass: "relative w-[90px] h-[90px] aspect-[1] object-cover",
        },
        {
            id: 4,
            image: growingCuate,
            alt: "Growing cuate",
            title: "Join Our Growth Journey",
            description:
                "Stay updated & be first in line for future investment rounds.",
            imageClass: "relative w-[90px] h-[90px] aspect-[1]",
        },
    ];


    return (
        <section className="w-full flex flex-col items-center gap-12 md:gap-16 px-4 py-10 md:p-20 bg-GLORIOUS-ui-section-bg relative">
            <div className="w-full max-w-7xl flex flex-col items-start gap-8 md:gap-12 relative">
                <header className="flex-col gap-2 flex items-center relative self-stretch w-full">
                    <h2 className="relative self-stretch [font-family:'Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-3xl md:text-[42px] text-center tracking-[0] leading-tight md:leading-[46.2px]">
                        HOW IT WORKS
                    </h2>
                </header>
            </div>

            <div
                className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-4 relative w-full max-w-7xl"
                role="list"
            >
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center gap-4 px-4 py-0 relative flex-1"
                        role="listitem"
                    >
                        <img className={step.imageClass} alt={step.alt} src={step.image.src} />

                        <h3 className="relative self-stretch [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-lg text-center tracking-[0] leading-[25.2px]">
                            {step.title}
                        </h3>

                        <p className="[font-family:'Poppins-Regular',Helvetica] text-center relative self-stretch font-normal text-coolgray-90 text-lg tracking-[0] leading-[25.2px]">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
});

ContentWrapperSection.displayName = "ContentWrapperSection";