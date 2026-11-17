import { assets, copy } from '@/pages/landing/content';

export default function HeroSection() {
    return (
        <section className="landing-hero" id="home" aria-labelledby="landing-hero-title">
            <div className="landing-hero__bg" aria-hidden="true">
                <img src={assets.heroBackground} alt="" />
            </div>
            <div className="landing-hero__overlay" aria-hidden="true" />

            <div className="landing-hero__content">
                <div className="landing-hero__inner">
                    <div className="landing-hero__copy">
                        <h1 className="landing-hero__title" id="landing-hero-title">
                            {copy.brand}
                        </h1>
                        <p className="landing-hero__subtitle">{copy.heroSubtitle}</p>
                        <p className="landing-hero__body">{copy.heroBody}</p>
                        <a className="landing-btn landing-btn--outline" href="#contact">
                            Contact Us
                        </a>
                    </div>
                    <div className="landing-hero__visual">
                        <img
                            className="landing-hero__image"
                            src={assets.heroVisual}
                            alt="Artistry and Assistance product workspace on a laptop"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
