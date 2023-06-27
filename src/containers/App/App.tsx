import * as React from 'react';
import {Dropdown} from 'components/Dropdown/Dropdown';
import {Layouts} from 'components/Layouts/Layouts';
import {Portfolio} from 'components/Portfolio/Portfolio';
import {Toolbar} from 'components/Toolbar/Toolbar';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

export function App() {
    const [activeHomework, setActiveHomeword] = React.useState('portfolio');

    const dropdownItems = React.useMemo(() => {
        return [
            {
                id: '2',
                text: 'Profile Information',
                onClick: () => console.log(2),
            },
            {
                id: '3',
                text: 'Change Password',
                onClick: () => console.log(3),
            },
            {
                id: '4',
                text: 'Become PRO',
                onClick: () => console.log(4),
            },
            {
                id: '5',
                text: 'Help',
                onClick: () => console.log(5),
            },
            {
                id: '6',
                text: 'Log Out',
                onClick: () => console.log(6),
            },
        ];
    }, []);

    return (
        <div className={block()}>
            <Toolbar
                className={block('toolbar')}
                filters={['portfolio', 'dropdown', 'layouts']}
                selected={activeHomework}
                onSelectFilter={setActiveHomeword}
            />
            {activeHomework === 'portfolio' && <Portfolio />}
            {activeHomework === 'dropdown' && <Dropdown items={dropdownItems}>Account Settings</Dropdown>}
            {activeHomework === 'layouts' && <Layouts />}
        </div>
    );
}
