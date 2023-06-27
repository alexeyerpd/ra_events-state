import {cn} from 'utils/classname';
import {ClassNameProps} from 'utils/types';

import './DropdownList.scss';

const block = cn('dropdown-list');

export interface DropdownItem<T = any> {
    id: string;
    text: React.ReactNode;
    onClick?: (data: T) => void;
}

interface DropdownListProps extends ClassNameProps {
    items: DropdownItem[];
}

export function DropdownList({items, className}: DropdownListProps) {
    return (
        <div className={block(null, className)}>
            {items.map((item) => {
                return (
                    <div className={block('item')} key={item.id} onClick={() => item.onClick?.(item)}>
                        {item.text}
                    </div>
                );
            })}
        </div>
    );
}
