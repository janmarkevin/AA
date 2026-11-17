import { Monitor, Moon, Sun } from 'lucide-react';
import type { Appearance } from '@/hooks/use-appearance';
import { useAppearance } from '@/hooks/use-appearance';

const options: { value: Appearance; label: string; icon: typeof Sun }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
];

export default function LandingThemeSwitcher() {
    const { appearance, updateAppearance } = useAppearance();

    return (
        <div className="landing-theme" role="group" aria-label="Theme">
            {options.map(({ value, label, icon: Icon }) => (
                <button
                    key={value}
                    type="button"
                    className={`landing-theme__btn${appearance === value ? ' is-active' : ''}`}
                    aria-label={label}
                    aria-pressed={appearance === value}
                    onClick={() => updateAppearance(value)}
                >
                    <Icon aria-hidden="true" />
                </button>
            ))}
        </div>
    );
}
