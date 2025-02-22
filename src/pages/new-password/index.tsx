import React, { useState } from "react";
import "@/styles/global.css";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { useApi } from '@/context/apiProvider';

type NewPassDTO = {
    password: string;
    confirmPassword: string;
};

export default function Index() {
    const { t } = useTranslation();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { apiClient, setRefreshKeyDTO, setBearer } = useApi(); // Access API and refresh token

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //
    //     if (!confirmPassword || !password) {
    //         setError(t("error.fillFields"));
    //         return;
    //     }
    //
    //     const newPassData: NewPassDTO = {
    //         password: password,
    //         confirmPassword: confirmPassword,
    //     };
    //
    //     try {
    //         const response = await apiClient.api.authenticate(loginData);
    //         console.log("New password Set successful:", response);
    //         setError(""); // Clear error state on success
    //     } catch (error) {
    //         console.error("reset failed:", error);
    //         setError(t("error.invalidCredentials"));
    //     }
    // };

    return (
        <div className="flex md:w-full lg:w-3/4 md:h-[675px] lg:h-[1350px] bg-slate-50 justify-between">
            <div className="hidden bg-neutral-500 md:block w-full h-full relative">
                <Image
                    src="/Frame 62678.png"
                    alt={t("alt.logo")}
                    width={200}
                    height={200}
                    className="w-[186px] h-[182px] mb-[10px] hidden md:block absolute top-[54px] left-[66px]"
                />
                <Image
                    src="/Group 15 Copy.png"
                    alt={t("alt.logo")}
                    width={183}
                    height={200}
                    className="w-[183.35px] h-[238.17px] mb-[10px] absolute left-[482.85px]"
                />
                <div
                    className="w-[400px] flex flex-col items-center absolute top-[300px] lg:top-[600px] left-[50%] transform -translate-x-[50%]">
                    <h1 className="font-bold text-[64px] h-[100px] leading-[100px] tracking-[0.043em] font-poppins">
                        {t("newPass.newHere")}
                    </h1>
                    <p className="font-poppins text-[20px] font-semibold leading-[19px] text-blue-neutral tracking-[0.003em]">
                        {t("newPass.createAccount")}
                    </p>
                </div>
                <Image
                    src="/Combined Shape Copy 3.png"
                    alt={t("alt.logo")}
                    width={100}
                    height={100}
                    className="w-[101.35px] h-[101.17px] mb-[10px] absolute left-[433px] lg:left-[553px] top-[450px] lg:top-[750px]"
                />
                <Image
                    src="/Combined Shape Copy 4.png"
                    alt={t("alt.logo")}
                    width={67}
                    height={68}
                    className="w-[67.35px] h-[68.17px] mb-[10px] absolute left-[253px] lg:left-[353px] top-[494px] lg:top-[794px]"
                />
            </div>
            <div className="flex flex-col md:justify-center items-center w-full md:w-[650px] bg-white">
                <Image
                    src="/Frame 62678.png"
                    alt={t("alt.logo")}
                    width={200}
                    height={200}
                    className="w-[89.55px] h-[74.519px] mb-[10px] md:hidden"
                />
                <div className="flex items-center justify-center w-[390px] h-10 mt-5 mb-5">
                    <h1 className="text-neutral-100 font-semibold text-4xl">
                        {t("newPass.title")}
                    </h1>
                </div>
                <form
                    // onSubmit={handleSubmit}
                    className="flex flex-col space-y-4 justify-center items-center w-[390px] border-t-2 py-4 px-6 mt-6"
                >
                    <div className="w-[342px] relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={t("newPass.password")}
                            className="w-[342px] h-[56px] px-4 py-2 rounded-md border-2 border-neutral-300 focus:outline-none focus:border-blue-500"
                            required
                        />
                        <Image
                            src={showPassword ? "/eye-off.svg" : "/eye-on.svg"}
                            alt={t("alt.togglePasswordVisibility")}
                            width={24}
                            height={24}
                            className="absolute right-4 top-4 cursor-pointer"
                            onClick={() => setShowPassword((prevState) => !prevState)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="w-[342px] relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={t("newPass.confirmPassword")}
                            className="w-[342px] h-[56px] px-4 py-2 rounded-md border-2 border-neutral-300 focus:outline-none focus:border-blue-500"
                            required
                        />
                        <Image
                            src={showPassword ? "/eye-off.svg" : "/eye-on.svg"}
                            alt={t("alt.togglePasswordVisibility")}
                            width={24}
                            height={24}
                            className="absolute right-4 top-4 cursor-pointer"
                            onClick={() => setShowPassword((prevState) => !prevState)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="w-full flex justify-between items-center">
                        <button
                            type="submit"
                            className="w-[342px] bg-blue-600 text-white py-2 rounded-3xl h-[48px]"
                        >
                            {t("newPass.change")}
                        </button>
                    </div>
                </form>
                <div className="w-[430px] md:hidden h-[65px] mt-[85px] flex items-center justify-center">
                    <Link href="/register" className="text-neutral-400">
                        {t("newPass.newHere")}
                    </Link>
                    <Link href="/register" className="text-blue-600">
                        {t("newPass.createAccount")}
                    </Link>
                </div>
            </div>
        </div>
    );
}