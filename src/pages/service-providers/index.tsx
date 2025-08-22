import React, {JSX} from "react";
import { ContactFormSection } from "@/utils/components/ContactFormSection";
import { ContentWrapperSection } from "@/utils/components/service-providers/ContentWrapperSection";
import { Footer } from "@/utils/components/Footer";
import { MainContentSection } from "@/utils/components/service-providers/MainContentSection";
import { NavigationBarSection } from "@/utils/components/NavigationBarSection";

const ServiceProviders = (): JSX.Element => {
    return (
        <div className="relative bg-defaultwhite">
            <NavigationBarSection />
            <main className="flex w-full flex-col items-center">
                <MainContentSection />
                <ContentWrapperSection />
                <ContactFormSection />
                <Footer />
            </main>
        </div>
    );
};

export default ServiceProviders;