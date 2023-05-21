import type { IMenuItem } from '../Menu.typings';

export interface IMenuItemProps extends IMenuItem {
    close: () => void;
}
