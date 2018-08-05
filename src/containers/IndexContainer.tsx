import * as React from 'react';
import { Index, Sidebar } from '../components';

export default class IndexContainer extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return(
            <div className='wrapper'>
                <Sidebar />
                <Index />
            </div>
        );
    }
}