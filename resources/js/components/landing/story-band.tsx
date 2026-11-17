import type { PropsWithChildren } from 'react';
import { assets } from '@/pages/landing/content';

export default function LandingStoryBand({ children }: PropsWithChildren) {
    return (
        <div className="landing-story">
            <div className="landing-story__overlay" aria-hidden="true">
                <img src={assets.aboutOverlay} alt="" />
            </div>
            {children}
        </div>
    );
}
