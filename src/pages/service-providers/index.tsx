import React, {JSX} from "react";
import { ContactFormSection } from "@/utils/components/ContactFormSection";
import { ContentWrapperSection } from "@/utils/components/service-providers/ContentWrapperSection";
import { LogoSection } from "@/utils/components/LogoSection";
import { MainContentSection } from "@/utils/components/service-providers/MainContentSection";
import { NavigationBarSection } from "@/utils/components/NavigationBarSection";

const ServiceProviders = (): JSX.Element => {
    return (
        <div className="flex w-full flex-col items-center relative bg-defaultwhite">
            <NavigationBarSection />
            <MainContentSection />
            <ContentWrapperSection />
            <ContactFormSection />
            <LogoSection />
        </div>
    );
};

export default ServiceProviders;