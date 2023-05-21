import type { IMenuItem } from '../Menu.typings';

export interface IMenuContentProps {
    items: IMenuItem[];
    close: () => void;
}
