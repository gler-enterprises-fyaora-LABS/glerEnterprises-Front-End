'use client'

import React, { useState } from 'react';
import Image from "next/image";
import '@/styles/global.css';
import Link from "next/link";
import '@/app/i18n';
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import AccountTypeButton from "@/components/AccountTypeButton";
import NextButton from "@/components/NextButton";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function serviceProvider() {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedAccountType, setSelectedAccountType] = useState<string | null>(null);

  const handleAccountTypeButtonClick = (type: string) => {
    setSelectedAccountType(type);
    console.log('Button clicked!');
  };

  const handleNextButtonClick = () => {
    if (selectedAccountType === 'button.individual') {
      router.push('/register/country');
    } else if (selectedAccountType === 'button.business') {
      router.push('/register/companyInfo');
    }
  };

  return (
    <div className="flex w-full md:h-[675px] bg-slate-50 min-h-screen justify-between">
      <div className="hidden bg-neutral-500 md:block  w-[1210px] relative">
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
      <div className="pt-8 md:w-[760px] w-full flex flex-col items-center">
        <div className="mb-10 flex items-center justify-start justify- md:justify-start w-full">
          <div className="ml-4 mr-28 md:mr-48"><MdKeyboardArrowLeft /></div>
          <h5 className="text-[20px] md:ml-20 font-poppins font-semibold text-neutral-black">{t("accountType")}</h5>
        </div>
        <div className="w-[342px] h-10 mt-3 mb-24"><h2 className="font-poppins text-center font-semibold text-[34px]">{t('signUp')}</h2></div>
        <div className="w-[342px] h-10">
          <h1 className="font-poppins font-bold text-[32px] ">{t('country')}</h1>
        </div>
        <div className="w-[342px] h-10 mt-3 mb-24">
          <input 
            type="text" 
            placeholder={t('country')} 
            className="w-full p-2 border-2 border-blue-600 rounded-md"
          />
        </div>
        <div className='mt-8 md:mt-56'>
          <NextButton
            text={t('Next')}
            isAccountTypeButtonClicked={selectedAccountType !== null}
            onClick={handleNextButtonClick}
          />
        </div>
      </div>
    </div>
  );
}