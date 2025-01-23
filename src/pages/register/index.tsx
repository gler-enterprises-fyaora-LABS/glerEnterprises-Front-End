import React from 'react';
import Image from "next/image";
import RegisterCarousel from "./RegisterCarousel";
import '@/styles/global.css';

export default function Index() {
    return (
        <div className="flex justify-end items-start min-h-screen">
            <div className="flex flex-col items-center gap-4 w-1/2">
                <Image
                    className="dark:invert"
                    src="/gler.svg"
                    alt="Gler logo"
                    width={73}
                    height={73}
                    style={{ marginTop: "56px", marginBottom: "136px" }}
                />
                <RegisterCarousel />
            </div>
        </div>
    );
}