import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../app/i18n";

const RegisterCarousel = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(1);

    const showNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide < 3 ? prevSlide + 1 : 1));
    };

    const selectUser = () => {
        console.log("User button clicked");
    };

    const selectService = () => {
        console.log("Service button clicked");
    };

    return (
        <div className="w-full h-full text-center relative">
            {currentSlide === 1 && (
                <div>
                    <h3 className="text-3xl font-bold">{t("signUp")}</h3>
                    <div className="mt-16">
                        <h5 className="text-xl font-medium w-4/5 mx-auto">{t("accountType")}</h5>
                        <div className="w-full h-52 bg-white rounded-[50px] flex justify-center items-center gap-8 mt-4">
                            <button
                                className="w-36 h-16 border-2 border-blue-600 rounded-lg text-blue-600 font-normal hover:bg-blue-50"
                                onClick={selectUser}
                            >
                                {t("customer")}
                            </button>
                            <button
                                className="w-36 h-16 border-2 border-blue-600 rounded-lg text-blue-600 font-normal hover:bg-blue-50"
                                onClick={selectService}
                            >
                                {t("serviceProvider")}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {currentSlide === 2 && (
                <div>
                    <h5 className="text-xl font-semibold text-center">Welcome to Slide 1</h5>
                    <p className="text-center">This is the first slide.</p>
                </div>
            )}

            {currentSlide === 3 && (
                <div>
                    <h5 className="text-xl font-semibold text-center">This is the next slide.</h5>
                    <p className="text-center">This is the last slide.</p>
                </div>
            )}

            {/* Navigation Button */}
            <div className="absolute top-[calc(100vh-70%)] left-1/2 transform -translate-x-1/2">
                <button
                    className="w-[342px] h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700"
                    onClick={showNextSlide}
                >
                    {t("next")}
                </button>
            </div>
        </div>
    );
};

export default RegisterCarousel;