import { useId, useState } from 'react';
import { faqs } from '@/pages/landing/content';

export default function FaqSection() {
    const baseId = useId();
    const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? '');

    return (
        <section className="landing-section landing-faq" id="faq" aria-labelledby="faq-title">
            <div className="landing-faq__inner">
                <div className="landing-section__header">
                    <h2 className="landing-section__title" id="faq-title">
                        FAQ
                    </h2>
                </div>

                <ul className="landing-faq__list">
                    {faqs.map((item) => {
                        const panelId = `${baseId}-${item.id}-panel`;
                        const buttonId = `${baseId}-${item.id}-button`;
                        const expanded = openId === item.id;

                        return (
                            <li key={item.id} className="landing-faq__item">
                                <h3>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        className="landing-faq__trigger"
                                        aria-expanded={expanded}
                                        aria-controls={panelId}
                                        onClick={() =>
                                            setOpenId((current) =>
                                                current === item.id ? '' : item.id,
                                            )
                                        }
                                    >
                                        <span>{item.question}</span>
                                        <span className="landing-faq__icon" aria-hidden="true">
                                            {expanded ? '−' : '+'}
                                        </span>
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className="landing-faq__panel"
                                    hidden={!expanded}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
