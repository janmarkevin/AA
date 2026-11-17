import { useState } from 'react';
import type { FormEvent } from 'react';
import {
    assets,
    copy,
    footerProduct,
    footerResources,
    socialLinks,
} from '@/pages/landing/content';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LandingSiteFooter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
    const [message, setMessage] = useState('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!emailPattern.test(email.trim())) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('success');
        setMessage('Thanks — you are subscribed. (UI confirmation only; no backend yet.)');
        setEmail('');
    };

    return (
        <footer className="landing-footer">
            <div className="landing-footer__inner">
                <div>
                    <div className="landing-footer__brand-logo">
                        <img
                            className="landing-footer__logo"
                            src={assets.logoMark}
                            alt=""
                            aria-hidden="true"
                        />
                        <span>{copy.brand}</span>
                    </div>
                    <p className="landing-footer__desc">{copy.footerDesc}</p>
                    <ul className="landing-footer__social">
                        {socialLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    className="landing-footer__social-link"
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

                <div>
                    <h3 className="landing-footer__heading">Resources</h3>
                    <ul className="landing-footer__links">
                        {footerResources.map((link) => (
                            <li key={link.label}>
                                <a className="landing-footer__link" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="landing-footer__heading">Product</h3>
                    <ul className="landing-footer__links">
                        {footerProduct.map((link) => (
                            <li key={link.label}>
                                <a className="landing-footer__link" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="landing-footer__heading">Subscribe to our Newsletter</h3>
                    <form className="landing-footer__newsletter-form" onSubmit={onSubmit} noValidate>
                        <label className="landing-sr-only" htmlFor="landing-newsletter-email">
                            Email address
                        </label>
                        <input
                            id="landing-newsletter-email"
                            className="landing-footer__input"
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="Enter your Email"
                            value={email}
                            aria-invalid={status === 'error'}
                            aria-describedby={
                                status === 'idle' ? undefined : 'landing-newsletter-feedback'
                            }
                            onChange={(event) => {
                                setEmail(event.target.value);
                                if (status !== 'idle') {
                                    setStatus('idle');
                                    setMessage('');
                                }
                            }}
                        />
                        <button className="landing-btn landing-btn--white" type="submit">
                            Subscribe
                        </button>
                        {status !== 'idle' ? (
                            <p
                                id="landing-newsletter-feedback"
                                className={`landing-footer__feedback landing-footer__feedback--${status}`}
                                role="status"
                            >
                                {message}
                            </p>
                        ) : null}
                    </form>
                </div>
            </div>

            <div className="landing-footer__bottom">
                <p>{copy.copyright}</p>
            </div>
        </footer>
    );
}
