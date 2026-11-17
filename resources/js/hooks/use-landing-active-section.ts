import { useEffect, useState } from 'react';
import { navLinks } from '@/pages/landing/content';

const sectionIds = navLinks.map((link) => link.href.replace('#', ''));

/** Subpixel / scroll-margin landing often sits ~0.5–1px past the token. */
const MARKER_SLACK_PX = 2;

function readMarkerY(): number {
    const landing = document.querySelector('.landing');
    const fromToken = landing
        ? parseFloat(
              getComputedStyle(landing).getPropertyValue('--landing-header-height'),
          )
        : Number.NaN;

    if (Number.isFinite(fromToken) && fromToken > 0) {
        return fromToken;
    }

    const header = document.querySelector('.landing-header');
    if (header instanceof HTMLElement) {
        return header.getBoundingClientRect().height + 12;
    }

    return 98;
}

function idFromHash(): string | null {
    const id = window.location.hash.replace(/^#/, '');
    return sectionIds.includes(id) ? id : null;
}

export function useLandingActiveSection(defaultId = 'home'): string {
    const [activeId, setActiveId] = useState(defaultId);

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el));

        if (elements.length === 0) {
            return;
        }

        const update = () => {
            const marker = readMarkerY();
            const scrollY = window.scrollY;

            const ordered = [...elements].sort(
                (a, b) =>
                    a.getBoundingClientRect().top +
                    scrollY -
                    (b.getBoundingClientRect().top + scrollY),
            );

            let nextId = defaultId;
            let foundContaining = false;

            for (const el of ordered) {
                const { top, bottom } = el.getBoundingClientRect();

                if (top <= marker + MARKER_SLACK_PX && bottom > marker) {
                    nextId = el.id;
                    foundContaining = true;
                }
            }

            if (!foundContaining) {
                for (const el of ordered) {
                    if (el.getBoundingClientRect().top <= marker + MARKER_SLACK_PX) {
                        nextId = el.id;
                    }
                }
            }

            // Hash wins when the browser has scrolled to that anchor (click / deep link).
            const hashId = idFromHash();
            if (hashId) {
                const hashEl = document.getElementById(hashId);
                if (hashEl) {
                    const top = hashEl.getBoundingClientRect().top;
                    if (Math.abs(top - marker) <= MARKER_SLACK_PX + 1) {
                        nextId = hashId;
                    }
                }
            }

            setActiveId(nextId);
        };

        update();
        // Hash scroll can finish after the first paint / without a scroll event.
        requestAnimationFrame(update);
        window.setTimeout(update, 100);

        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        window.addEventListener('hashchange', update);

        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
            window.removeEventListener('hashchange', update);
        };
    }, [defaultId]);

    return activeId;
}
