import * as React from 'react';

import { BlackUserList, Sidebar } from '../components';
import { getBlackUserList } from '../lib/toServer';
import { IBlackUserType, IStatusBlackUserTypes } from '../types/typeDefined';

export default class IndexContainer extends React.Component<{}, IStatusBlackUserTypes> {

    constructor(props: {}) {
        super(props);
        this.state = {
            blackUserList: [] as IBlackUserType[],
        }
    }

    public componentDidMount(): void {
        getBlackUserList()
        .then( result => {
            this.setState ( {
                blackUserList : result.data.results as IBlackUserType[],
            } )
        })
        .catch( error => window.console.log( error ) );
    }

    public render() {
        return (
            <div className='wrapper'>
                <Sidebar/>
                <BlackUserList
                    blackUserList={this.state.blackUserList}
                />
            </div>
        );
    }
}