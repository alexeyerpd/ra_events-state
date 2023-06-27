import {cn} from 'utils/classname';

import './IconSwitch.scss';

const block = cn('icon-switch');

export type Icon = 'view_list' | 'view_module';

interface IconSwitchProps {
    icon: Icon;
    onSwitch: (icon: Icon) => void;
}

export function IconSwitch({icon, onSwitch}: IconSwitchProps) {
    return (
        <div className={block()} onClick={() => onSwitch(icon === 'view_list' ? 'view_module' : 'view_list')}>
            <span className="material-icons">{icon}</span>
        </div>
    );
}
