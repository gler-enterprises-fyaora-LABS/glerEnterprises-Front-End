import React, { useState } from "react";
import {useTranslation} from "react-i18next";

export const MainContentSection = () => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        name: "",
    });
    const { t } = useTranslation();

    const howItWorksSteps = [
        {
            icon: "/calendarView.svg",
            alt: "calendar view",
            title: t('home.requestBooking'),
            description: t('home.requestBookingDescription')
        },
        {
            icon: "/clientComunicate.svg",
            alt: "Client Comunicate",
            title: t('home.getMatched'),
            description: t('home.getMatchedDescription')
        },
        {
            icon: "/clockWait.svg",
            alt: "clock wait",
            title: t('home.relaxAndReview'),
            description: t('home.relaxAndReviewDescription')
        }
    ];

    const services = [
        {
            name: 'home-cleaning',
            image: "/HomeCleaning.svg",
            alt: "Home Cleaning Service",
            title: t('home.homeCleaning'),
            description: t('home.homeCleaningDescription'),
            buttonText: t('home.bookPropertyCleaning'),
            imagePosition: 'left',
            imageContainerClass: "w-full md:w-1/2 flex items-center justify-center"
        },
        {
            name: 'car-valet',
            image: "/carwashCleaing.svg",
            alt: "Carwash Cleaning Service",
            title: t('home.carValet'),
            description: t('home.carValetDescription'),
            buttonText: t('home.bookCarValetService'),
            imagePosition: 'right',
            imageContainerClass: "w-full md:w-1/2 relative"
        },
        {
            name: 'window-cleaning',
            image: "/windowCleaning.svg",
            alt: "Window cleaning Service",
            title: t('home.windowCleaning'),
            description: t('home.windowCleaningDescription'),
            buttonText: t('home.bookWindowCleaning'),
            imagePosition: 'left',
            imageContainerClass: "w-full md:w-1/2 relative"
        }
    ];
    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="flex w-full flex-col items-center justify-center gap-8 px-4 pt-16 pb-20 sm:px-8 md:px-20 lg:gap-12">
            <section className="w-full flex-col items-center gap-8 bg-GLORIOUS-ui-section-bg px-4 py-10 md:gap-16 md:p-20 flex">
                <header className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2">
                    <h2 className="self-stretch text-center font-['Poppins-Bold',_sans-serif] text-3xl font-bold leading-tight text-coolgray-90 md:text-[42px] md:leading-[110%]">
                        {t('home.howItWorks')}
                    </h2>
                </header>
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
                    {howItWorksSteps.map((step, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center text-center gap-4 px-4">
                            <div className="p-3 rounded-full flex items-center justify-center">
                                <img
                                    className="w-12 h-12"
                                    src={step.icon}
                                    alt={step.alt}
                                />
                            </div>
                            <h3 className="text-coolgray-90 font-['Poppins-SemiBold',_sans-serif] text-lg font-semibold self-stretch leading-[140%]">
                                {step.title}
                            </h3>
                            <p className="text-coolgray-90 font-['Poppins-Regular',_sans-serif] text-lg font-normal self-stretch leading-[140%]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex w-full flex-col items-center gap-8 px-4 py-10 md:gap-16 md:p-20">
                <header className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2">
                    <h2 className="self-stretch text-center font-['Poppins-Bold',_sans-serif] text-3xl font-bold leading-tight text-[#21272a] md:text-[42px] md:leading-[110%]">
                        {t('home.whatCanYouBook')}
                    </h2>
                </header>
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 md:gap-20">
                    {services.map((service, index) => {
                        const imageContent = (
                            <div className={service.imageContainerClass}>
                                <div className={`relative ${service.name === 'home-cleaning' ? 'max-w-[520px]' : service.name === 'car-valet' ? 'max-w-[470px]' : 'max-w-[440px]'} mx-auto`}>
                                    <img
                                        className="h-auto w-full"
                                        src={service.image}
                                        alt={service.alt}
                                    />
                                    {service.name === 'car-valet' &&
                                        <div className="absolute top-[20%] left-[40%] text-xl font-bold text-white">
                                            {t('home.carWash')}
                                        </div>
                                    }
                                </div>
                            </div>
                        );
                        const textContent = (
                            <div className="flex w-full flex-col items-start justify-center gap-8 py-8 md:w-1/2 md:gap-12">
                                <div className="flex flex-col items-start self-stretch gap-2">
                                    <h3 className="self-stretch text-left font-['Poppins-Bold',_sans-serif] text-2xl font-bold leading-[110%] text-[#21272a] md:text-[32px]">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="self-stretch text-left font-['Poppins-Regular',_sans-serif] text-lg font-normal leading-[140%] text-[#21272a]">
                                    {service.description}
                                </p>
                                <button
                                    type="button"
                                    className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90"
                                    style={{ letterSpacing: "0.5px" }}
                                >
                                    {service.buttonText}
                                </button>
                            </div>
                        );

                        return (
                            <div key={index} className={`flex flex-col items-center gap-10 ${service.imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                {imageContent}
                                {textContent}
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
    );
};