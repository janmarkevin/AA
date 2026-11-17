import { assets, copy } from '@/pages/landing/content';

export default function AboutSection() {
    return (
        <section className="landing-about" id="about" aria-labelledby="about-title">
            <div className="landing-about__inner">
                <div className="landing-about__visual">
                    <img
                        src={assets.aboutIllustration}
                        alt="Illustration of a collaborative workspace"
                        width={366}
                        height={351}
                    />
                </div>
                <div className="landing-about__copy">
                    <h2 className="landing-about__title" id="about-title">
                        About Us
                    </h2>
                    <p className="landing-about__body">{copy.aboutBody}</p>
                    <div className="landing-about__actions">
                        <a className="landing-btn landing-btn--cyan" href="#contact">
                            Get Started
                        </a>
                        <a className="landing-btn landing-btn--outline-dark" href="#contact">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
