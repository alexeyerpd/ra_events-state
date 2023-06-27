import {LayoutsProducts} from 'components/Layouts/data';
import {cn} from 'utils/classname';

import './ListView.scss';

const block = cn('list-view');

interface ListViewProps {
    items: LayoutsProducts;
}

export function ListView({items}: ListViewProps) {
    return (
        <div className={block()}>
            {items.map((item) => {
                return <ListCard key={item.id} {...item} />;
            })}
        </div>
    );
}

function ListCard({color, img, name, price}: LayoutsProducts[number]) {
    return (
        <div className={block('card')}>
            <img className={block('img')} src={img} alt="" />
            <h2 className={block('name')}>{name}</h2>
            <span className={block('color')}>{color}</span>
            <span className={block('price')}>${price}</span>
            <button className={block('btn-add')}>Add to cart</button>
        </div>
    );
}
