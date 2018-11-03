import * as React from 'react';

import { DeclareList, Sidebar } from '../components';
import { getDeclareList } from '../lib/toServer';
import { IDeclareBoardType, IStatusDeclareBordTypes } from '../types/typeDefined';

export default class DeclareContainer extends React.Component<{}, IStatusDeclareBordTypes> {

    constructor(props: {}) {
        super(props);
        this.state = {
            dataList: [] as IDeclareBoardType[],
        }
    }

    public componentDidMount(): void {
        getDeclareList()
        .then( result => {
            this.setState ( {
                dataList : result.data.results as IDeclareBoardType[],
            } )
        })
        .catch( error => window.console.log( error ) );
    }

    public render() {
        return (
            <div className='wrapper'>
                <Sidebar/>
                <DeclareList
                    dataList={this.state.dataList}
                />
            </div>
        );
    }
}