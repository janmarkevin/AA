import { Check } from 'lucide-react';
import { copy, pricingPlans } from '@/pages/landing/content';

function cardClass(variant: (typeof pricingPlans)[number]['variant']): string {
    if (variant === 'featured') {
        return 'landing-pricing__card landing-pricing__card--featured';
    }

    if (variant === 'accent') {
        return 'landing-pricing__card landing-pricing__card--accent';
    }

    return 'landing-pricing__card';
}

function ctaClass(variant: (typeof pricingPlans)[number]['variant']): string {
    if (variant === 'featured') {
        return 'landing-btn landing-btn--sm landing-btn--white';
    }

    if (variant === 'accent') {
        return 'landing-btn landing-btn--sm landing-btn--primary';
    }

    return 'landing-btn landing-btn--sm landing-btn--cyan';
}

export default function PricingSection() {
    return (
        <section
            className="landing-section landing-pricing"
            id="pricing"
            aria-labelledby="pricing-title"
        >
            <div className="landing-pricing__inner">
                <div className="landing-section__header">
                    <h2 className="landing-section__title" id="pricing-title">
                        Our Pricing
                    </h2>
                    <p className="landing-section__lead">{copy.pricingLead}</p>
                </div>

                <div className="landing-grid landing-grid--3">
                    {pricingPlans.map((plan) => (
                        <article key={plan.id} className={cardClass(plan.variant)}>
                            <h3 className="landing-pricing__title">{plan.title}</h3>
                            <div className="landing-pricing__divider" aria-hidden="true" />
                            <ul className="landing-pricing__features">
                                {plan.features.map((feature) => (
                                    <li key={feature}>
                                        <span
                                            className="landing-pricing__check"
                                            aria-hidden="true"
                                        >
                                            <Check strokeWidth={3} />
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="landing-pricing__price">
                                <span className="landing-pricing__price-value">
                                    ${plan.price}
                                </span>
                                <span className="landing-pricing__price-unit">
                                    {plan.unit}
                                </span>
                            </p>
                            <a
                                className={ctaClass(plan.variant)}
                                href="#contact"
                                data-plan={plan.id}
                            >
                                Choose Plan
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
