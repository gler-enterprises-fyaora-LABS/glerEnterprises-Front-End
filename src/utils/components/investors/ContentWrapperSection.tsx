import React from "react";
import registerInterest from "../../../../public/registerInterest.svg";
import freepikAdjust from "../../../../public/freepikAdjust.svg";
import freepikBackground from "../../../../public/freepikBackground.svg";
import growingCuate from "../../../../public/growingCuate.svg";

export const ContentWrapperSection = () => {
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
        <section className="w-full items-center gap-16 p-20 bg-GLORIOUS-ui-section-bg flex flex-col relative flex-[0_0_auto]">
            <div className="w-[1280px] gap-12 flex flex-col items-start relative flex-[0_0_auto]">
                <header className="flex-col gap-2 flex items-center relative self-stretch w-full flex-[0_0_auto]">
                    <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-[42px] text-center tracking-[0] leading-[46.2px]">
                        HOW IT WORKS
                    </h2>
                </header>
            </div>

            <div
                className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                role="list"
            >
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center gap-4 px-4 py-0 relative flex-1 grow"
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
};