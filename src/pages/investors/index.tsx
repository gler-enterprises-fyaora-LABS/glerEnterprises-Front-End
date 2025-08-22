import React, {JSX} from "react";
import { ContactFormSection } from "@/utils/components/ContactFormSection";
import { ContentWrapperSection } from "@/utils/components/investors/ContentWrapperSection";
import { Footer } from "@/utils/components/Footer";
import { MainContentSection } from "@/utils/components/investors/MainContentSection";
import { NavigationBarSection } from "@/utils/components/NavigationBarSection";

const ServiceProviders = (): JSX.Element => {
    return (
        <div className="flex w-full flex-col items-center relative bg-defaultwhite">
            <NavigationBarSection />
            <MainContentSection />
            <ContentWrapperSection />
            <ContactFormSection />
            <Footer />
        </div>
    );
};

export default ServiceProviders;