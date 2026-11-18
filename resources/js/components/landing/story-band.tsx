import { Children, type PropsWithChildren } from 'react';
import { assets } from '@/pages/landing/content';

export default function LandingStoryBand({ children }: PropsWithChildren) {
    const [about, ...rest] = Children.toArray(children);

    return (
        <div className="landing-story">
            {about}
            <div className="landing-story__anchor" aria-hidden="true">
                <div className="landing-story__overlay">
                    <img
                        src={assets.aboutOverlay}
                        alt=""
                        width={1440}
                        height={557}
                    />
                </div>
            </div>
            {rest}
        </div>
    );
}
