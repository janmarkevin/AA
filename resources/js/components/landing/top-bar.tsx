import { copy, socialLinks } from '@/pages/landing/content';

export default function LandingTopBar() {
    return (
        <div className="landing-topbar">
            <div className="landing-topbar__inner">
                <a className="landing-topbar__email" href={`mailto:${copy.email}`}>
                    {copy.emailLabel}
                </a>
                <ul className="landing-topbar__social">
                    {socialLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                className="landing-topbar__social-link"
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.label}
                            >
                                <img src={item.icon} alt="" aria-hidden="true" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
