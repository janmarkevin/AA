import { copy } from '@/pages/landing/content';

export default function ContactBannerSection() {
    return (
        <section
            className="landing-contact-banner landing-contact"
            id="contact"
            aria-labelledby="contact-title"
        >
            <div className="landing-contact-banner__inner">
                <div className="landing-contact-banner__copy">
                    <h2 className="landing-contact-banner__title" id="contact-title">
                        Contact Our Team
                    </h2>
                    <p className="landing-contact-banner__lead">{copy.contactLead}</p>
                </div>
                <a
                    className="landing-btn landing-btn--white"
                    href={`mailto:info@artistryandassistance.com?subject=${encodeURIComponent('Free Consultation Request')}`}
                >
                    Request Free Consultation
                </a>
            </div>
        </section>
    );
}
