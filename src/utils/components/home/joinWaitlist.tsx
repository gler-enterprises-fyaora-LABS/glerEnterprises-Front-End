import React, { JSX, useState } from "react";
import { useTranslation } from "react-i18next";

const benefitsData = [
    {
        id: 1,
        title: "benefits.verified",
    },
    {
        id: 2,
        title: "benefits.noSearch",
    },
    {
        id: 3,
        title: "benefits.convenient",
    },
];

export default function JoinWaitlist() {
    const { t } = useTranslation();
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

    return (
        <main className="flex w-[1440px] items-center gap-20 pt-24 pb-20 px-20 relative">
            <section className="flex-col w-[655px] items-start justify-center gap-16 px-0 py-8 flex relative">
                <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
                    <header className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-primary-90 text-xl tracking-[1.00px] leading-5">
                            {t("joinWaitlist.header.subtitle")}
                        </p>

                        <h1 className="relative self-stretch [font-family:'Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-[54px] tracking-[0] leading-[59.4px]">
                            {t("joinWaitlist.header.title")}
                        </h1>
                    </header>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col h-[383px] items-start justify-between relative self-stretch w-full"
                    >
                        <div className="flex flex-col w-[655px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="email"
                                    className="self-stretch relative mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-2xl tracking-[-0.48px] leading-[28.8px]"
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
                                        className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px]
                                        bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[655px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                    <label
                                        htmlFor="phone"
                                        className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-2xl tracking-[-0.48px] leading-[28.8px]"
                                    >
                                        {t("joinWaitlist.form.phone.label")}
                                    </label>

                                    <img
                                        className="relative w-[29px] h-[29px]"
                                        alt="Optional field indicator"
                                        src="/indicator.svg"
                                    />
                                </div>

                                <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-[#c1c7cd]">
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        placeholder={t("joinWaitlist.form.phone.placeholder")}
                                        className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px]
                                        bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[655px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="postcode"
                                    className="self-stretch relative mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-2xl tracking-[-0.48px] leading-[28.8px]"
                                >
                                    {t("joinWaitlist.form.postcode.label")}
                                </label>

                                <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-[#c1c7cd]">
                                    <input
                                        id="postcode"
                                        type="text"
                                        value={formData.postcode}
                                        onChange={(e) =>
                                            handleInputChange("postcode", e.target.value)
                                        }
                                        placeholder={t(
                                            "joinWaitlist.form.postcode.placeholder"
                                        )}
                                        className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px]
                                         bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 font-poppins text-xl font-medium text-white
                            shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-opacity hover:opacity-90"
                        >
                            {t("joinWaitlist.form.submit")}
                        </button>
                    </form>
                </div>
            </section>

            <aside className="flex flex-col w-[545px] h-[494px] items-center justify-center gap-4 relative bg-variable-collection-bg">
                <div className="flex flex-col h-[387px] items-center gap-16 relative self-stretch w-full">
                    {benefitsData.map((benefit) => (
                        <div className="flex flex-col items-center gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]" key={benefit.id}>
                            <div className="flex items-center gap-4 self-stretch w-full">
                                <img
                                    className="relative w-[48px] h-[48px]"
                                    alt="Optional field indicator"
                                    src="/greenCheck.svg"
                                />
                                <p className="flex-1 [font-family:'Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-2xl tracking-[0] leading-[26.4px]">
                                    {t(benefit.title)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </main>
    );
}