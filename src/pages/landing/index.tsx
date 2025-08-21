import "@/i18n";
import React from 'react';
import Waitlist from "@/utils/components/home/joinWaitlist";
import { useTranslation } from 'react-i18next';
import {NavigationBarSection} from "@/utils/components/NavigationBarSection";
import {LogoSection} from "@/utils/components/LogoSection";
import {ContactFormSection} from "@/utils/components/ContactFormSection";


export interface ILandingPageCostumerWebProps {
    className?: string;
}

export default function LandingPageCostumerWeb({
                                                   className,
                                                   ...props
                                               }: ILandingPageCostumerWebProps) {
    const { t } = useTranslation();
    return (
        <div
            className={
                "bg-default-white flex flex-col gap-0 items-center justify-start relative w-full " +
                className
            }
        >
            <NavigationBarSection />
            <Waitlist/>
            <div className="bg-uisectionbg bg-GLORIOUS-ui-section-bg p-20 flex flex-col gap-16 items-center justify-start shrink-0 w-full relative">
                <div className="flex flex-col gap-12 items-center justify-start shrink-0 w-full max-w-7xl mx-auto relative">
                    <div className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 relative">
                        <div className="text-coolgray-90 text-center font-['Poppins-Bold',_sans-serif] text-[42px] leading-[110%] font-bold relative self-stretch">
                            {t('landing.howItWorks')}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center md:items-start justify-center self-stretch shrink-0 relative">
                    <div className="pr-4 pl-4 flex flex-col gap-4 items-center justify-start flex-1 relative">
                        <div className="text-black p-3 rounded-full flex items-center justify-center">
                            <img
                                className="w-[3rem] h-[3rem]"
                                src="/calendarView.svg"
                                alt="calendar view"
                            />
                        </div>
                        <div className="text-coolgray-90 text-center font-['Poppins-SemiBold',_sans-serif] text-lg leading-[140%] font-semibold relative self-stretch">
                            {t('landing.requestBooking')}
                        </div>
                        <div className="text-coolgray-90 text-center font-['Poppins-Regular',_sans-serif] text-lg leading-[140%] font-normal relative self-stretch">
                            {t('landing.requestBookingDescription')}
                        </div>
                    </div>
                    <div className="pr-4 pl-4 flex flex-col gap-4 items-center justify-start flex-1 relative">
                        <div className="text-black p-3 rounded-full flex items-center justify-center">
                            <img
                                className="w-[3rem] h-[3rem]"
                                src="/clientComunicate.svg"
                                alt="Client Comunicate"
                            />
                        </div>
                        <div className="text-coolgray-90 text-center font-['Poppins-SemiBold',_sans-serif] text-lg leading-[140%] font-semibold relative self-stretch">
                            {t('landing.getMatched')}
                        </div>
                        <div className="text-coolgray-90 text-center font-['Poppins-Regular',_sans-serif] text-lg leading-[140%] font-normal relative self-stretch">
                            {t('landing.getMatchedDescription')}
                        </div>
                    </div>
                    <div className="pr-4 pl-4 flex flex-col gap-4 items-center justify-start flex-1 relative">
                        <div className="text-black p-3 rounded-full flex items-center justify-center relative">
                            <img
                                className="w-[3rem] h-[3rem]"
                                src="/clockWait.svg"
                                alt="clock wait"
                            />
                        </div>
                        <div className="text-coolgray-90 text-center font-['Poppins-SemiBold',_sans-serif] text-lg leading-[140%] font-semibold relative self-stretch">
                            {t('landing.relaxAndReview')}
                        </div>
                        <div className="text-coolgray-90 text-center font-['Poppins-Regular',_sans-serif] text-lg leading-[140%] font-normal relative self-stretch">
                            {t('landing.relaxAndReviewDescription')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-20 flex flex-col gap-16 items-center justify-start shrink-0 w-full relative">
                <div className="flex flex-col gap-12 items-center justify-start shrink-0 w-full max-w-7xl mx-auto relative">
                    <div className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 relative">
                        <div className="text-[#21272a] text-center font-['Poppins-Bold',_sans-serif] text-[42px] leading-[110%] font-bold relative self-stretch">
                            {t('landing.whatCanYouBook')}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center shrink-0 w-full max-w-7xl mx-auto h-auto md:h-[399px] relative">
                    <div className="shrink-0 w-full md:w-1/2 relative flex items-center justify-center">
                        <img
                            className="w-full h-auto max-w-[520px] max-h-[326px] mx-auto"
                            src="/HomeCleaning.svg"
                            alt="Home Cleaning Service"
                        />
                    </div>
                    <div className="pt-8 pb-8 flex flex-col gap-16 items-start justify-center flex-1 relative">
                        <div className="flex flex-col gap-12 items-start justify-start self-stretch shrink-0 relative">
                            <div className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 relative">
                                <div className="text-[#21272a] text-left font-['Poppins-Bold',_sans-serif] text-[32px] leading-[110%] font-bold relative self-stretch">
                                    {t('landing.homeCleaning')}
                                </div>
                            </div>
                            <div className="text-[#21272a] text-left font-['Poppins-Regular',_sans-serif] text-lg leading-[140%] font-normal relative self-stretch">
                                {t('landing.homeCleaningDescription')}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            {t('landing.bookPropertyCleaning')}
                        </button>
                    </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center shrink-0 w-full max-w-7xl mx-auto h-auto md:h-[399px] relative">
                    <div className="pt-8 pb-8 flex flex-col gap-16 items-start justify-center flex-1 relative">
                        <div className="flex flex-col gap-12 items-start justify-start self-stretch shrink-0 relative">
                            <div className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 relative">
                                <div className="text-[#21272a] text-left font-['Poppins-Bold',_sans-serif] text-[32px] leading-[110%] font-bold relative self-stretch">
                                    {t('landing.carValet')}
                                </div>
                            </div>
                            <div className="text-[#21272a] text-left font-['Poppins-Regular',_sans-serif] text-lg leading-[140%] font-normal relative self-stretch">
                                {t('landing.carValetDescription')}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white
                            shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            {t('landing.bookCarValetService')}
                        </button>
                    </div>
                    <div className="shrink-0 w-full md:w-1/2 relative">
                        <div className="relative max-w-[470px] mx-auto">
                            <img
                                className="w-full h-auto"
                                src="/carwashCleaing.svg"
                                alt="Carwash Cleaning Service"
                            />
                            <div className="text-white font-bold text-xl absolute top-[20%] left-[40%]">
                                {t('landing.carWash')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center shrink-0 w-full max-w-7xl mx-auto h-auto md:h-[399px] relative">
                    <div className="shrink-0 w-full md:w-1/2 relative">
                        <div className="relative max-w-[440px] mx-auto">
                            <img
                                className="w-full h-auto"
                                src="/windowCleaning.svg"
                                alt="Window cleaning Service"
                            />
                        </div>
                    </div>
                    <div className="pt-8 pb-8 flex flex-col gap-16 items-start justify-center flex-1 relative">
                        <div className="flex flex-col gap-12 items-start justify-start self-stretch shrink-0 relative">
                            <div className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 relative">
                                <div className="text-[#21272a] text-left font-['Poppins-Bold',_sans-serif] text-[32px] leading-[110%] font-bold relative self-stretch">
                                    {t('landing.windowCleaning')}
                                </div>
                            </div>
                            <div className="text-[#21272a] text-left font-['Poppins-Regular',_sans-serif] text-lg leading-[140%] font-normal relative self-stretch">
                                {t('landing.windowCleaningDescription')}
                            </div>
                        </div>
                        <button
                            type="button"
                            className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white
                             shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90"
                            style={{ letterSpacing: "0.5px" }}
                        >
                            {t('landing.bookWindowCleaning')}
                        </button>
                    </div>
                </div>
            </div>
            <ContactFormSection />
            <LogoSection />
        </div>
    );
};