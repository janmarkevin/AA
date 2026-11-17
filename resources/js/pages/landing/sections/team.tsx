import { useState } from 'react';
import { assets, copy, teamMembers } from '@/pages/landing/content';

export default function TeamSection() {
    const [index, setIndex] = useState(0);
    const maxIndex = Math.max(0, teamMembers.length - 1);

    const prev = () => setIndex((value) => Math.max(0, value - 1));
    const next = () => setIndex((value) => Math.min(maxIndex, value + 1));

    return (
        <section className="landing-section landing-team" id="team" aria-labelledby="team-title">
            <div className="landing-team__inner">
                <div className="landing-section__header">
                    <h2 className="landing-section__title" id="team-title">
                        Meet the Team Behind A&amp;A
                    </h2>
                    <p className="landing-section__lead">{copy.teamLead}</p>
                </div>

                <div className="landing-team__viewport">
                    <div className="landing-team__track" data-offset={index}>
                        {teamMembers.map((member) => (
                            <article key={member.name} className="landing-team__card">
                                <div className="landing-team__avatar">
                                    <img src={member.photo} alt={`Portrait of ${member.name}`} />
                                </div>
                                <h3 className="landing-team__name">{member.name}</h3>
                                <p className="landing-team__role">{member.role}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="landing-team__controls">
                    <button
                        type="button"
                        className="landing-team__control"
                        onClick={prev}
                        disabled={index === 0}
                        aria-label="Previous team members"
                    >
                        <img src={assets.sliderPrev} alt="" aria-hidden="true" />
                    </button>
                    <button
                        type="button"
                        className="landing-team__control"
                        onClick={next}
                        disabled={index === maxIndex}
                        aria-label="Next team members"
                    >
                        <img src={assets.sliderNext} alt="" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </section>
    );
}
