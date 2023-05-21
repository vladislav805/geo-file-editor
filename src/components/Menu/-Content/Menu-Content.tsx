import React from 'react';

import type { IMenuContentProps } from './Menu-Content.typings';
import { cnMenu } from '../Menu.const';
import { MenuItem } from '../-Item/Menu-Item';

export const MenuContent: React.FC<IMenuContentProps> = ({ items, close }) => {
    return (
        <div className={cnMenu('Content')}>
            {items.map((item, index) => (
                <MenuItem
                    key={`${index}_${item.title}`}
                    close={close}
                    {...item}
                />
            ))}
        </div>
    );
};
