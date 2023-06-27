import * as React from 'react';
import {Toolbar} from 'components/Toolbar/Toolbar';
import {cn} from 'utils/classname';

import {ProjectList} from './components/ProjectList/ProjectList';
import {projectItems} from './data';

import './Portfolio.scss';

const block = cn('portfolio');

export function Portfolio() {
    const filters = [...new Set(projectItems.map((item) => item.filters).flat())];

    const [activeFilter, setActiveFilter] = React.useState(filters[0] || '');

    return (
        <div className={block()}>
            <Toolbar
                className={block('toolbar')}
                filters={filters}
                selected={activeFilter}
                onSelectFilter={setActiveFilter}
            />
            <ProjectList items={projectItems.filter((item) => item.filters.includes(activeFilter))} />
        </div>
    );
}
