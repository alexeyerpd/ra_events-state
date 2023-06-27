import {cn} from 'utils/classname';
import {ClassNameProps} from 'utils/types';

import './Toolbar.scss';

const block = cn('toolbar');

interface ToolbarProps extends ClassNameProps {
    filters: string[];
    selected?: string;
    onSelectFilter: (selected: string) => void;
}

export function Toolbar({filters, selected, onSelectFilter, className}: ToolbarProps) {
    return (
        <div className={block(null, className)}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={block('item', {selected: selected === filter})}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
