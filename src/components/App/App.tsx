import * as React from 'react';

import { Menu } from '@components/Menu';
import type { IMenuEntry } from '@components/Menu/Menu.typings';

import { appCn, appContentCn, appMapCn, appMenuCn } from './App.const';
import { appStateReducer, defaultAppState } from './App.state';

import './App.scss';

export const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(appStateReducer, defaultAppState);

    // const entries = React.useMemo<IMenuEntry[]>(() => {
    //     return [
    //         {
    //             title: 'File',
    //             items: [
    //                 {
    //                     title: 'New...',
    //                     onClick: () => {},
    //                 },
    //                 {
    //                     title: 'Open...',
    //                     onClick: () => {},
    //                 },
    //             ],
    //         },
    //         {
    //             title: 'Edit',
    //             items: [
    //                 {
    //                     title: 'A',
    //                     onClick: () => {},
    //                 },
    //                 {
    //                     title: 'B',
    //                     onClick: () => {},
    //                 },
    //             ],
    //         },
    //     ];
    // }, []);

    return (
        <div className={appCn}>
            <Menu
                className={appMenuCn}
                // entries={[]}
            />
            <div className={appMapCn}>map</div>
            <div className={appContentCn}>content</div>
        </div>
    );
};
