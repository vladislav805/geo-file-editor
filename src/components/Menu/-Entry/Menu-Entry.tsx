import React from 'react';
import type { IMenuEntry } from '../Menu.typings';
import { cnMenu, menuControlCn } from '../Menu.const';
import { MenuContent } from '../-Content/Menu-Content';

export const MenuEntry: React.FC<IMenuEntry> = ({ title, items }) => {
    const [visible, setVisible] = React.useState<boolean>(false);
    const ref = React.useRef<HTMLDivElement>(null);

    const onClick = React.useCallback(() => {
        setVisible(!visible);
    }, [visible]);

    const close = React.useCallback(() => setVisible(false), []);

    React.useLayoutEffect(() => {
        if (!visible) {
            return;
        }

        const listener = (event: MouseEvent) => {
            const target = event.target as HTMLElement;

            if (!ref.current?.contains(target)) {
                setVisible(false);
            }
        };

        document.addEventListener('click', listener);

        return () => {
            document.removeEventListener('click', listener);
        };
    }, [visible, ref]);

    return (
        <div ref={ref} className={cnMenu('Entry', { visible })}>
            <button
                className={menuControlCn}
                onClick={onClick}
            >
                {title}
            </button>
            {visible && (
                <MenuContent
                    items={items}
                    close={close}
                />
            )}
        </div>
    );
};
