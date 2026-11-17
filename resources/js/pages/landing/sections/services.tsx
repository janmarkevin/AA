import { copy, services } from '@/pages/landing/content';

export default function ServicesSection() {
    return (
        <section
            className="landing-section landing-services"
            id="services"
            aria-labelledby="services-title"
        >
            <div className="landing-services__inner">
                <div className="landing-section__header">
                    <h2 className="landing-section__title" id="services-title">
                        Our Services
                    </h2>
                    <p className="landing-section__lead">{copy.servicesLead}</p>
                </div>

                <div className="landing-grid landing-grid--3">
                    {services.map((service) => (
                        <article key={service.title} className="landing-services__card">
                            <img
                                className="landing-services__icon"
                                src={service.icon}
                                alt=""
                                aria-hidden="true"
                            />
                            <h3 className="landing-services__title">{service.title}</h3>
                            <p className="landing-services__body">{service.body}</p>
                            <a className="landing-btn landing-btn--cyan landing-btn--sm" href={service.href}>
                                Visit
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
