import React, { useState } from "react";
import {useTranslation} from "react-i18next";

export const MainContentSection = () => {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        postcode: "",
        vendorType: "Independent",
        services: "",
    });
    const { t } = useTranslation();

    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const benefits = [
        {id: "boss", title: "benefitsProviders.beYourOwnBoss"},
        {id: "network", title: "benefitsProviders.growingCustomerNetwork"},
        {id: "paid", title: "benefitsProviders.getPaidOnTime"},
        {id: "trust", title: "benefitsProviders.communityTrust"},
        {id: "rates", title: "benefitsProviders.competitiveRates"},
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleVendorTypeChange = (type: string) => {
        setFormData((prev) => ({
            ...prev,
            vendorType: type,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const buttonBaseClasses = "flex h-12 items-center justify-center rounded-full px-8 font-poppins text-base font-medium shadow-[1px_1px_3px_rgba(0,0,0,0.1),_5px_3px_6px_rgba(0,0,0,0.09),_10px_8px_8px_rgba(0,0,0,0.05),_18px_13px_9px_rgba(0,0,0,0.01),_29px_21px_10px_rgba(0,0,0,0)] transition-all duration-300 ease-in-out hover:opacity-90";

    return (
        <section className="flex w-[1440px] items-center gap-20 pt-24 pb-20 px-20 relative flex-[0_0_auto]">
            <div className="flex flex-col w-[655px] items-start justify-center gap-16 px-0 py-8 relative">
                <div className="items-start gap-12 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
                    <header className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-primary-90 text-xl tracking-[1.00px] leading-5">
                            JOIN OUR TRUSTED NETWORK OF CLEANING PROS.
                        </p>
                        <h1 className="relative self-stretch [font-family:'Poppins-Bold',Helvetica] font-bold text-coolgray-90 text-[54px] tracking-[0] leading-[59.4px]">
                            Become a Gler Service Provider
                        </h1>
                    </header>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-start gap-6 relative self-stretch w-full"
                    >
                        <div className="flex items-center gap-2 self-stretch w-full p-1 bg-gray-100 rounded-full">
                            <button
                                type="button"
                                onClick={() => handleVendorTypeChange("Independent")}
                                className={`${buttonBaseClasses} flex-1 ${
                                    formData.vendorType === "Independent"
                                        ? "bg-blue-600 text-white"
                                        : "bg-transparent text-gray-500"
                                }`}
                                style={{ letterSpacing: "0.5px" }}
                            >
                                Independent
                            </button>
                            <button
                                type="button"
                                onClick={() => handleVendorTypeChange("Company")}
                                className={`${buttonBaseClasses} flex-1 ${
                                    formData.vendorType === "Company"
                                        ? "bg-blue-600 text-white"
                                        : "bg-transparent text-gray-500"
                                }`}
                                style={{ letterSpacing: "0.5px" }}
                            >
                                Company
                            </button>
                        </div>
                        <div className="flex flex-col w-[655px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="email"
                                    className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-2xl tracking-[-0.48px] leading-[28.8px]"
                                >
                                    Email Address*
                                </label>

                                <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-[#c1c7cd]">
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="Enter Your E-mail"
                                        required
                                        className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px] bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[655px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="phone"
                                    className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-2xl tracking-[-0.48px] leading-[28.8px]"
                                >
                                    Phone Number*
                                </label>

                                <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-[#c1c7cd]">
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        placeholder="e.g. +123456789"
                                        required
                                        className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px] bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[655px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="postcode"
                                    className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-2xl tracking-[-0.48px] leading-[28.8px]"
                                >
                                    Postcode*
                                </label>

                                <div className="flex h-12 items-center gap-2 px-4 py-3 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-variable-collection-stroke">
                                    <input
                                        id="postcode"
                                        type="text"
                                        value={formData.postcode}
                                        onChange={(e) =>
                                            handleInputChange("postcode", e.target.value)
                                        }
                                        placeholder="Enter Your Postcode"
                                        required
                                        className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px] bg-transparent border-none outline-none placeholder:text-coolgray-60"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col w-[655px] items-start gap-1 relative flex-[0_0_auto]">
                            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                                <label
                                    htmlFor="services"
                                    className="relative self-stretch mt-[-1.00px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-coolgray-90 text-2xl tracking-[-0.48px] leading-[28.8px]"
                                >
                                    Services Offered*
                                </label>

                                <div className="relative self-stretch w-full">
                                    <button
                                        type="button"
                                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        className="flex flex-col h-12 items-start justify-center p-4 relative self-stretch w-full bg-[#f3f8ff] border-b [border-bottom-style:solid] border-variable-collection-stroke"
                                    >
                                        <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto] mt-[-4.00px] mb-[-4.00px]">
                                            <div className="relative flex-1 [font-family:'Poppins-Regular',Helvetica] font-normal text-coolgray-60 text-base tracking-[0] leading-[22.4px]">
                                                {formData.services || "Select Services Offered"}
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className={`${buttonBaseClasses} w-full bg-blue-600 text-white`}
                            style={{ letterSpacing: '0.5px' }}
                        >
                            Join Waitlist
                        </button>
                    </form>
                </div>
            </div>

            <aside className="flex flex-col w-[545px] h-[767px] items-center justify-center gap-4 relative bg-variable-collection-bg">
                <div className="flex flex-col h-[571px] items-center justify-between relative self-stretch w-full">
                    {benefits.map((benefit) => (
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
        </section>
    );
};