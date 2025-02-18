import React from 'react';
import Image from "next/image";
import '@/styles/global.css';
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../app/i18n";
import RegisterButton from "@/components/RegisterButton";
import NextButton from "@/components/NextButton";


export default function Index() {
    const { t } = useTranslation();
    const handleClick = () => {
        console.log('Button clicked!');
      };
    return (
        <div className="flex w-full md:h-[675px] bg-slate-50 min-h-screen justify-between">
            <div className="hidden bg-neutral-500 md:block  w-[790px] relative">
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
                <div className="w-[400px] flex flex-col items-center absolute top-[230px] left-[200px]">
                <h1 className="font-bold text-[64px] h-[200px] w-[350px] text-center leading-[100px] font-poppins">{t("login.registered")}</h1>
                <p className="font-poppins text-[20px] font-semibold leading[19px] text-blue-neutral tracking-[0.003em]">{t("login.title")}</p>
                </div>
                <Image
                src="/Combined Shape Copy 3.png"
                alt={t("alt.logo")} 
                width={100}
                height={100}
                className="w-[101.35px] h-[101.17px] mb-[10px] absolute left-[433px] top-[450px]"
                />
                <Image
                src="/Combined Shape Copy 4.png"
                alt={t("alt.logo")} 
                width={67}
                height={68}
                className="w-[67.35px] h-[68.17px] mb-[10px] absolute left-[253px] top-[494px]"
                />
            </div>
            <div className="pt-8 md:w-[650px] w-full  flex flex-col items-center">
                <Image
                    className="dark:invert"
                    src="/frame 62678.png"
                    alt="Gler logo"
                    width={104}
                    height={104}
                />
                <h3 className="text-[34px] mt-10 font-poppins text-neutral-black font-semibold ">{t("signUp")}</h3>
                <div className="mt-5 w-[282px]">
                    <h5 className="items-start text-base justify-start flex font-poppins font-semibold w-4/5 mx-auto">{t("accountType")}</h5>
                </div>
                <div className='mt-10 w-[342px] justify-evenly flex '>
                <RegisterButton
                    text={t("customer")}
                    onClick={handleClick} 
                />
                <RegisterButton
                    text={t("serviceProvider")}
                    onClick={handleClick} 
                />
                </div>
                <div className='mt-8 md:mt-56'>
                    <NextButton text={t('Next')} />
                </div>
                <div className="w-[430px] md:hidden h-[65px] mt-[78px] flex items-center justify-center">
                    <Link href="/register" className="text-neutral-400">
                    {t("login.accountAlready")}
                    </Link>
                    <Link href="/register" className="text-blue-600 font-bold">
                    {t("login.login")}
                    </Link>
                </div>
            </div>
        </div>
    );
}