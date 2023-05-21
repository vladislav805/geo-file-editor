import React from 'react';

import type { IMenuItemProps } from './Menu-Item.typings';
import { menuControlCn } from '../Menu.const';

export const MenuItem: React.FC<IMenuItemProps> = props => {
    const onClick = React.useCallback(() => {
        props.close();
        props.onClick();
    }, [props.onClick]);

    return (
        <button
            className={menuControlCn}
            onClick={onClick}
        >
            {props.title}
        </button>
    );
};
