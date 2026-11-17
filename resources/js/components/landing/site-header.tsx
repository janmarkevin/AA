import { useEffect, useRef, useState } from 'react';
import LandingThemeSwitcher from '@/components/landing/theme-switcher';
import { useLandingActiveSection } from '@/hooks/use-landing-active-section';
import { assets, copy, navLinks } from '@/pages/landing/content';

export default function LandingSiteHeader() {
    const headerRef = useRef<HTMLElement>(null);
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeId = useLandingActiveSection('home');

    useEffect(() => {
        let stickAt = 0;

        const measure = () => {
            const header = headerRef.current;
            // Use topbar height (stable) — not header rect.top, which flickers when
            // is-scrolled changes header height and fights the sticky check.
            const topbar = document.querySelector('.landing-topbar');
            if (topbar instanceof HTMLElement) {
                stickAt = topbar.offsetHeight;
            } else if (header) {
                stickAt = header.offsetTop;
            } else {
                stickAt = 0;
            }
        };

        const onScroll = () => {
            const y = window.scrollY;
            // Hysteresis so compacting the bar can't immediately unstick itself.
            setScrolled((prev) => {
                if (prev) {
                    return y > stickAt - 8;
                }

                return y >= stickAt;
            });
        };

        const onResize = () => {
            measure();
            onScroll();
        };

        measure();
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const close = () => setOpen(false);

    const linkClass = (href: string) => {
        const id = href.replace('#', '');
        return `landing-header__link${activeId === id ? ' is-active' : ''}`;
    };

    return (
        <header
            ref={headerRef}
            className={`landing-header${scrolled ? ' is-scrolled' : ''}`}
        >
            <div className="landing-header__inner">
                <a
                    className="landing-header__brand"
                    href="#home"
                    aria-label={copy.brand}
                    onClick={close}
                >
                    <img
                        className="landing-header__logo"
                        src={assets.logoMark}
                        alt=""
                        aria-hidden="true"
                    />
                    <span className="landing-header__brand-text" aria-hidden="true">
                        {copy.brand}
                    </span>
                </a>

                <nav className="landing-header__nav" aria-label="Primary">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className={linkClass(link.href)}
                            href={link.href}
                            aria-current={
                                activeId === link.href.replace('#', '') ? 'true' : undefined
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="landing-header__actions">
                    <LandingThemeSwitcher />
                    <a className="landing-btn landing-btn--cyan landing-btn--sm" href="#contact">
                        Get Started
                    </a>
                    <button
                        type="button"
                        className="landing-header__menu-toggle"
                        aria-expanded={open}
                        aria-controls="landing-mobile-nav"
                        onClick={() => setOpen((value) => !value)}
                    >
                        <span className="landing-sr-only">
                            {open ? 'Close menu' : 'Open menu'}
                        </span>
                        {open ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            <div
                id="landing-mobile-nav"
                className={`landing-header__mobile${open ? ' is-open' : ''}`}
            >
                <nav className="landing-header__mobile-nav" aria-label="Mobile">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className={linkClass(link.href)}
                            href={link.href}
                            aria-current={
                                activeId === link.href.replace('#', '') ? 'true' : undefined
                            }
                            onClick={close}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a
                    className="landing-btn landing-btn--cyan"
                    href="#contact"
                    onClick={close}
                >
                    Get Started
                </a>
            </div>
        </header>
    );
}
