import React from "react";
import SignUp from "../../../../public/SignUp.svg";
import female from "../../../../public/female.svg";
import jobHunt from "../../../../public/jobHunt.svg";
import calendarGuy from "../../../../public/calendarGuy.svg";

export const ContentWrapperSection = () => {
    const steps = [
        {
            id: 1,
            image: SignUp,
            alt: "Element",
            title: "Sign Up & Set Profile",
            description: "Tell us where you operate and what you offer",
            imageClass: "relative w-[90px] h-[90px] aspect-[1]",
        },
        {
            id: 2,
            image: female,
            alt: "Frame",
            title: "Complete Verification",
            description: "We'll guide you through GLER's best practices and H&S",
            imageClass: "relative w-[90px] h-[90px]",
        },
        {
            id: 3,
            image: jobHunt,
            alt: "Job hunt amico",
            title: "Get Jobs in Your Area",
            description: "Start receiving and accepting bookings",
            imageClass: "relative w-[90px] h-[90px] aspect-[1]",
        },
        {
            id: 4,
            image: calendarGuy,
            alt: "Group",
            title: "Get Paid",
            description: "Transparent, timely payments for every completed job",
            imageClass: "relative w-[142.38px] h-[90px] aspect-[1.58]",
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