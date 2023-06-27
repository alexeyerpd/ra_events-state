import {projectItems} from 'components/Portfolio/data';
import {cn} from 'utils/classname';

import './ProjectList.scss';

const block = cn('project-list');

type ProjectItems = typeof projectItems;

interface ProjectListProps {
    items: ProjectItems;
}

export function ProjectList({items}: ProjectListProps) {
    const columns = getColumns(items);

    return (
        <div className={block()}>
            {columns.map((rows, i) => {
                return (
                    <div key={i} className={block('column')}>
                        {rows.map((row, idx) => {
                            return (
                                <div key={idx} className={block('row')}>
                                    <img className={block('img')} src={row.image} alt="alt" />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

function getColumns(items: ProjectItems) {
    const result: ProjectItems[] = [[], [], []];
    items.forEach((item, idx) => {
        if (idx % 3 === 0) {
            result[0]?.push(item);
        } else if ((idx + 2) % 3 === 0) {
            result[1]?.push(item);
        } else {
            result[2]?.push(item);
        }
    });
    return result;
}
