import { Head } from '@inertiajs/react';
import LandingSiteFooter from '@/components/landing/site-footer';
import LandingSiteHeader from '@/components/landing/site-header';
import LandingStoryBand from '@/components/landing/story-band';
import LandingTopBar from '@/components/landing/top-bar';
import AboutSection from '@/pages/landing/sections/about';
import ContactBannerSection from '@/pages/landing/sections/contact-banner';
import FaqSection from '@/pages/landing/sections/faq';
import HeroSection from '@/pages/landing/sections/hero';
import PricingSection from '@/pages/landing/sections/pricing';
import ServicesSection from '@/pages/landing/sections/services';
import TeamSection from '@/pages/landing/sections/team';
import TrustedBySection from '@/pages/landing/sections/trusted-by';

export default function Landing() {
    return (
        <>
            <Head title="Artistry & Assistance" />
            <a className="landing-skip" href="#main">
                Skip to main content
            </a>
            <div className="landing">
                <LandingTopBar />
                <LandingSiteHeader />
                <main id="main">
                    <HeroSection />
                    <TrustedBySection />
                    <LandingStoryBand>
                        <AboutSection />
                        <TeamSection />
                    </LandingStoryBand>
                    <ServicesSection />
                    <FaqSection />
                    <PricingSection />
                    <ContactBannerSection />
                </main>
                <LandingSiteFooter />
            </div>
        </>
    );
}
