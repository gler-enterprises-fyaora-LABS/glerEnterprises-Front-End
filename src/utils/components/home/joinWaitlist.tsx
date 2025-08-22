import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function JoinWaitlist() {
    const { t } = useTranslation();

    const benefitsData = [
        {
            id: 1,
            title: "benefits.verified",
            icon: "/greenCheck.svg",
        },
        {
            id: 2,
            title: "benefits.noSearch",
            icon: "/greenCheck.svg",
        },
        {
            id: 3,
            title: "benefits.convenient",
            icon: "/greenCheck.svg",
        },
    ];

    const formFields = [
        {
            name: "email",
            label: "joinWaitlist.form.email.label",
            placeholder: "joinWaitlist.form.email.placeholder",
            type: "email",
            required: true,
        },
        {
            name: "phone",
            label: "joinWaitlist.form.phone.label",
            placeholder: "joinWaitlist.form.phone.placeholder",
            type: "tel",
            required: false,
        },
        {
            name: "postcode",
            label: "joinWaitlist.form.postcode.label",
            placeholder: "joinWaitlist.form.postcode.placeholder",
            type: "text",
            required: false,
        },
    ];

    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        postcode: "",
    });

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    const buttonBaseClasses = "flex h-12 items-center justify-center rounded-full px-8 font-poppins text-base font-medium shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-all duration-300 ease-in-out hover:opacity-90";

    return (
        <main className="w-full flex flex-col items-center gap-10 md:gap-12 py-12 px-4 md:py-24 md:px-20">
            <header className="w-full max-w-7xl flex flex-col items-start md:items-center gap-2">
                <p className="self-stretch text-primary-90 font-['Poppins-Bold',Helvetica] font-bold text-lg md:text-xl text-left md:text-center tracking-[1.00px] leading-tight">
                    {t("joinWaitlist.header.subtitle")}
                </p>
                <h1 className="self-stretch text-coolgray-90 font-['Poppins-Bold',Helvetica] font-bold text-4xl md:text-[54px] text-left md:text-center leading-tight md:leading-[59.4px]">
                    {t("joinWaitlist.header.title")}
                </h1>
            </header>

            <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20">
                <aside className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8 p-4 md:p-8 bg-variable-collection-bg rounded-lg">
                    {benefitsData.map((benefit) => (
                        <div
                            className="w-full flex items-center gap-4"
                            key={benefit.id}
                        >
                            <img
                                className="w-12 h-12"
                                alt="Green checkmark"
                                src={benefit.icon}
                            />
                            <p className="flex-1 font-['Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-lg md:text-2xl leading-snug">
                                {t(benefit.title)}
                            </p>
                        </div>
                    ))}
                </aside>

                <section className="w-full md:w-1/2 flex flex-col items-start justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className="w-full flex flex-col items-start gap-8"
                    >
                        {formFields.map((field) => (
                            <div key={field.name} className="w-full flex flex-col items-start gap-2">
                                <label
                                    htmlFor={field.name}
                                    className="flex items-center gap-2 self-stretch text-coolgray-90 font-['Poppins-SemiBold',Helvetica] font-semibold text-xl md:text-2xl tracking-[-0.48px] leading-[28.8px]"
                                >
                                    {t(field.label)}
                                    {!field.required && (
                                        <img
                                            className="w-6 h-6"
                                            alt="Optional field indicator"
                                            src="/indicator.svg"
                                        />
                                    )}
                                </label>
                                <div className="flex h-12 items-center gap-2 px-4 py-3 self-stretch w-full bg-[#f3f8ff] border-b-2 border-[#c1c7cd]">
                                    <input
                                        id={field.name}
                                        type={field.type}
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={(e) =>
                                            handleInputChange(field.name, e.target.value)
                                        }
                                        placeholder={t(field.placeholder)}
                                        required={field.required}
                                        className="flex-1 font-['Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="submit"
                            className={`${buttonBaseClasses} w-full bg-blue-600 text-white`}
                            style={{ letterSpacing: '0.5px' }}
                        >
                            {t("joinWaitlist.form.submit")}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}