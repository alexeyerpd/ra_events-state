import * as React from 'react';
import {cn} from 'utils/classname';
import {ChildrenProps} from 'utils/types';

import {DropdownItem, DropdownList} from './components/DropdownList/DropdownList';

import './Dropdown.scss';

const block = cn('dropdown');

interface DropdownProps extends ChildrenProps {
    items: DropdownItem[];
}

export function Dropdown({items, children}: DropdownProps) {
    const [open, setOpen] = React.useState(false);
    const handleToggle = () => setOpen((innerOpen) => !innerOpen);

    return (
        <div className={block()}>
            <button className={block('btn')} onClick={handleToggle}>
                {children}
            </button>
            {open && <DropdownList className={block('dropdown-list')} items={items} />}
        </div>
    );
}
