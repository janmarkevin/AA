import { trustedLogos } from '@/pages/landing/content';

export default function TrustedBySection() {
    return (
        <section className="landing-trusted" id="trusted" aria-label="Trusted by">
            <div className="landing-trusted__inner">
                <h2 className="landing-trusted__label">Trusted By</h2>
                <ul className="landing-trusted__logos">
                    {trustedLogos.map((logo) => (
                        <li key={logo.src} className="landing-trusted__logo">
                            <img src={logo.src} alt={logo.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
