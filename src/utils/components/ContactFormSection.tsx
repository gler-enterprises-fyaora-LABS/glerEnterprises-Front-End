import React, { useState } from "react";
import TermsAndConditionsDialog from "@/pages/terms-and-conditions";
import {useTranslation} from "react-i18next";

export const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const { t } = useTranslation();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (agreedToTerms && formData.email && formData.message) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <section className="bg-uisectionbg p-20 flex flex-col md:flex-row gap-12 items-center justify-center w-full shrink-0 h-auto md:h-[868px] relative">
            <div className="shrink-0 w-full max-w-md md:max-w-lg lg:max-w-xl relative flex items-center justify-center">
                <img
                    className="w-full max-w-[510.89px] h-auto"
                    src="/familyClean.svg"
                    alt={"Family Cleaning Service"}/>
            </div>
            <div className="flex flex-col gap-12 items-start justify-start shrink-0 relative">
                <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-2 items-center justify-start self-stretch shrink-0 relative">
                        <div className="text-coolgray-90 text-left font-['Poppins-Bold',_sans-serif] text-[42px] leading-[110%] font-bold relative self-stretch">
                            {t('landing.contactGlerTeam')}
                        </div>
                    </div>
                    <div className="text-coolgray-90 text-left font-['Poppins-Regular',_sans-serif] text-lg leading-[140%] font-normal relative self-stretch">
                        {t('landing.contactGlerTeamDescription')}
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start justify-start shrink-0 w-full max-w-md md:max-w-lg lg:max-w-xl relative">
                    <div className="flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                            <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                                <label htmlFor="firstName" className="text-coolgray-90 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[140%] font-normal relative self-stretch">
                                    {t('landing.firstName')}
                                </label>
                                <div className="bg-coolgray-10 border-solid border-coolgray-30 border-b pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2 items-center justify-start self-stretch shrink-0 h-12 relative">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder={t('landing.enterFirstName')}
                                        className="text-coolgray-60 placeholder-coolgray-60 text-left font-['Poppins-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex-1 bg-transparent focus:outline-none focus:text-coolgray-90"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 items-start justify-start flex-1 relative">
                            <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                                <label htmlFor="lastName" className="text-coolgray-90 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[140%] font-normal relative self-stretch">
                                    {t('landing.lastName')}
                                </label>
                                <div className="bg-coolgray-10 border-solid border-coolgray-30 border-b pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2 items-center justify-start self-stretch shrink-0 h-12 relative">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder={t('landing.enterLastName')}
                                        className="text-coolgray-60 placeholder-coolgray-60 text-left font-['Poppins-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex-1 bg-transparent focus:outline-none focus:text-coolgray-90"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                             <label htmlFor="email" className="text-coolgray-90 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[140%] font-normal relative self-stretch">
                                {t('landing.email')}
                            </label>
                            <div className="bg-coolgray-10 border-solid border-coolgray-30 border-b pt-3 pr-4 pb-3 pl-4 flex flex-row gap-2 items-center justify-start self-stretch shrink-0 h-12 relative">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={t('landing.enterEmail')}
                                    className="text-coolgray-60 placeholder-coolgray-60 text-left font-['Poppins-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex-1 bg-transparent focus:outline-none focus:text-coolgray-90"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start self-stretch shrink-0 relative">
                        <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                            <label htmlFor="message" className="text-coolgray-90 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[140%] font-normal relative self-stretch">
                                {t('landing.yourMessage')}
                            </label>
                            <div className="bg-coolgray-10 border-solid border-coolgray-30 border-b pt-3.5 pr-4 pb-3.5 pl-4 flex flex-row gap-2 items-start justify-start self-stretch shrink-0 h-24 relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder={t('landing.enterYourMessage')}
                                    className="text-coolgray-60 placeholder-coolgray-60 text-left font-['Poppins-Regular',_sans-serif] text-base leading-[140%] font-normal relative flex-1 bg-transparent focus:outline-none focus:text-coolgray-90 resize-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <input
                            id="terms"
                            type="checkbox"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="mr-2 appearance-auto"
                        />
                        <label htmlFor="terms">
                            <span className="i-agree-to-the-privacy-policy-terms-span">
                                {t('landing.agreeToTerms')}{' '}
                            </span>
                            <button
                                type="button"
                                onClick={() => setIsDialogOpen(true)}
                                className="text-blue-600 hover:underline"
                            >
                                {t('landing.privacyPolicyAndTerms')}
                            </button>
                            <span>.</span>
                        </label>
                        {isDialogOpen && (
                            <TermsAndConditionsDialog onClose={() => setIsDialogOpen(false)} />
                        )}
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-end self-stretch shrink-0 relative">
                        <button
                            type="submit"
                            className="flex h-12 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-base font-medium text-white
                            shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90 disabled:opacity-50"
                            style={{ letterSpacing: "0.5px" }}
                            disabled={!agreedToTerms || !formData.email || !formData.message}
                        >
                            {t('landing.submit')}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};