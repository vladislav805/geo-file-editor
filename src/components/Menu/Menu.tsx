import React from 'react';
import type { IMenuProps } from './Menu.typings';
import { cnMenu } from './Menu.const';
// import { MenuEntry } from './-Entry/Menu-Entry';

import './Menu.scss';

export const Menu: React.FC<IMenuProps> = ({ className, /* entries */ }) => {
    return (
        <div className={cnMenu({}, [className])}>
            {/* {entries.map((item, index) => (
                <MenuEntry
                    key={index}
                    title={item.title}
                    items={item.items}
                />
            ))} */}
        </div>
    );
};
