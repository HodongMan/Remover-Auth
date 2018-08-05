import * as React from 'react';

import { BoardList, Sidebar } from '../components';

export default class IndexContainer extends React.Component<{}, {}> {

    public render() {
        return (
            <div className='wrapper'>
                <Sidebar/>
                <BoardList/>
            </div>
        );
    }
}