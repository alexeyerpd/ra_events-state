import {LayoutsProducts} from 'components/Layouts/data';
import {cn} from 'utils/classname';

import './CardsView.scss';

const block = cn('cards-view');

interface CardsViewProps {
    items: LayoutsProducts;
}
export function CardsView({items}: CardsViewProps) {
    return (
        <div className={block()}>
            {items.map((item) => {
                return <Card key={item.id} {...item} />;
            })}
        </div>
    );
}

function Card({color, img, name, price}: LayoutsProducts[number]) {
    return (
        <div className={block('card')}>
            <h2 className={block('name')}>{name}</h2>
            <span className={block('color')}>{color}</span>
            <img className={block('img')} src={img} alt="" />
            <div className={block('info')}>
                <span className={block('price')}>${price}</span>
                <button className={block('btn-add')}>Add to cart</button>
            </div>
        </div>
    );
}
