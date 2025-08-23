import React, { useState, memo } from "react";
import {useTranslation} from "react-i18next";
import axios from "axios";
import { environment } from "@/environment";
import Notification from "@/utils/components/shared/Notification";

export const MainContentSection = memo(() => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        name: "",
    });
    const { t } = useTranslation();
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'warning' } | null>(null);
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");


    const benefits = [
        {id: "industry", title: "benefitsInvestors.industry"},
        {id: "scalable", title: "benefitsInvestors.scalable"},
        {id: "high", title: "benefitsInvestors.high"},
        {id: "built", title: "benefitsInvestors.built"},
        {id: "thorough", title: "benefitsInvestors.thorough"},
    ];

    const validateEmail = (email: string) => {
        if (!email) {
            setEmailError(t("joinWaitlistInvestors.errors.email.required"));
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setEmailError("");
            return true;
        } else {
            setEmailError(t("joinWaitlistInvestors.errors.email.invalid"));
            return false;
        }
    };

    const validateName = (name: string) => {
        if (!name) {
            setNameError(t("joinWaitlistInvestors.errors.name.required"));
            return false;
        }
        setNameError("");
        return true;
    };

    const validatePhone = (phone: string) => {
        if (!phone) {
            setPhoneError(t("joinWaitlistInvestors.errors.phone.required"));
            return false;
        }
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (phoneRegex.test(phone.replace(/\s/g, ''))) {
            setPhoneError("");
            return true;
        } else {
            setPhoneError(t("joinWaitlistInvestors.errors.phone.invalid"));
            return false;
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
        if (field === "email") {
            validateEmail(value);
        }
        if (field === "name") {
            validateName(value);
        }
        if (field === "phone") {
            validatePhone(value);
        }
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const isEmailValid = validateEmail(formData.email);
        const isNameValid = validateName(formData.name);
        const isPhoneValid = validatePhone(formData.phone);

        if (!isEmailValid || !isNameValid || !isPhoneValid) {
            return;
        }

        try {
            const response = await axios.post(`${environment.apiUrl}/waitlist/investor/join`, {
                email: formData.email,
                name: formData.name,
                telnum: formData.phone,
            });

            if (response.status === 200 || response.status === 201) {
                setNotification({ message: t("joinWaitlistInvestors.notifications.success"), type: 'success' });
                setFormData({
                    email: "",
                    phone: "",
                    name: "",
                });
                setEmailError("");
                setNameError("");
                setPhoneError("");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setNotification({ message: t("joinWaitlistInvestors.notifications.error"), type: 'error' });
        }
    };

    const buttonBaseClasses = "flex h-12 items-center justify-center rounded-full px-8 font-poppins text-base font-medium shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-all duration-300 ease-in-out hover:opacity-90";

    return (
        <>
            {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
            <section className="flex flex-col w-full items-center justify-center gap-8 lg:gap-12 pt-16 pb-20 px-4 sm:px-8 md:px-20">
                <header className="flex flex-col items-center gap-2 w-full max-w-7xl">
                    <p className="relative self-stretch [font-family:'Roboto-Bold',Helvetica] font-bold text-primary-90 text-lg md:text-xl text-center tracking-[1.00px] leading-5">
                        {t("joinWaitlistInvestors.header.subtitle")}
                    </p>
                    <h1 className="relative self-stretch [font-family:'Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-4xl md:text-[54px] text-center tracking-[0] leading-tight md:leading-[59.4px]">
                        {t("joinWaitlistInvestors.header.title")}
                    </h1>
                </header>

                <div className="flex flex-col lg:flex-row w-full max-w-7xl items-start justify-center gap-8 lg:gap-20">
                    <aside className="flex flex-col w-full lg:w-[545px] items-center justify-center gap-4 relative bg-variable-collection-bg p-4 rounded-lg">
                        <div className="flex flex-col h-full items-center justify-center gap-4 self-stretch w-full">
                            {benefits.map((benefit) => (
                                <div className="flex items-center gap-4 p-4 relative self-stretch w-full" key={benefit.id}>
                                    <img
                                        className="relative w-12 h-12"
                                        alt={t("joinWaitlist.alt.greenCheck")}
                                        src="/greenCheck.svg"
                                    />
                                    <p className="flex-1 [font-family:'Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-xl md:text-2xl tracking-[0] leading-tight md:leading-[26.4px]">
                                        {t(benefit.title)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </aside>

                    <div className="flex flex-col w-full lg:w-[655px] items-start justify-center">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col items-start gap-6 relative self-stretch w-full"
                        >
                            <div className="flex flex-col w-full items-start gap-1 relative">
                                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                                    <label
                                        htmlFor="email"
                                        className="relative self-stretch [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-xl md:text-2xl tracking-[-0.48px] leading-[28.8px]"
                                    >
                                        {t("joinWaitlist.form.email.label")}
                                    </label>

                                    <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-[#c1c7cd]">
                                        <input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            placeholder={t("joinWaitlist.form.email.placeholder")}
                                            required
                                            className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px] bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                        />
                                    </div>
                                    {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col w-full items-start gap-1 relative">
                                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                                    <label
                                        htmlFor="name"
                                        className="relative self-stretch [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-xl md:text-2xl tracking-[-0.48px] leading-[28.8px]"
                                    >
                                        {t("joinWaitlistInvestors.form.name.label")}
                                    </label>

                                    <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-[#c1c7cd]">
                                        <input
                                            id="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            placeholder={t("joinWaitlistInvestors.form.name.placeholder")}
                                            required
                                            className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px] bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                        />
                                    </div>
                                    {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
                                </div>
                            </div>

                            <div className="flex flex-col w-full items-start gap-1 relative">
                                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                                    <label
                                        htmlFor="phone"
                                        className="relative self-stretch [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-xl md:text-2xl tracking-[-0.48px] leading-[28.8px]"
                                    >
                                        {t("joinWaitlistInvestors.form.phone.label")}
                                    </label>

                                    <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-variable-collection-stroke">
                                        <input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                handleInputChange("phone", e.target.value)
                                            }
                                            placeholder={t("joinWaitlist.form.phone.placeholder")}
                                            required
                                            className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px] bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                        />
                                    </div>
                                    {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className={`${buttonBaseClasses} w-full bg-blue-600 text-white`}
                                style={{ letterSpacing: '0.5px' }}
                            >
                                {t("joinWaitlistInvestors.form.submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
});

MainContentSection.displayName = "MainContentSection";