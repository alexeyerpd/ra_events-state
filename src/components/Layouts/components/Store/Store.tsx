import * as React from 'react';
import {layoutsProducts} from 'components/Layouts/data';
import {cn} from 'utils/classname';

import {CardsView} from '../CardsView/CardsView';
import {Icon, IconSwitch} from '../IconSwitch/IconSwitch';
import {ListView} from '../ListView/ListView';

import './Store.scss';

const block = cn('store');

export function Store() {
    const [view, setView] = React.useState<Icon>('view_module'); // view_module | view_list
    const [products, setProducts] = React.useState<typeof layoutsProducts>([]);

    React.useEffect(() => {
        setProducts(layoutsProducts);
    }, []);

    return (
        <div className={block()}>
            <div className={block('controls')}>
                <IconSwitch icon={view} onSwitch={setView} />
            </div>
            {view === 'view_list' ? <ListView items={products} /> : <CardsView items={products} />}
        </div>
    );
}
