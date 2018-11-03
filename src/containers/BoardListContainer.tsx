import * as React from 'react';

import { BoardList, Sidebar } from '../components';
import { getBoardList } from '../lib/toServer';
import { IBoardType, IStatusBoardTypes } from '../types/typeDefined';

export default class IndexContainer extends React.Component<{}, IStatusBoardTypes> {

    constructor(props: {}) {
        super(props);
        this.state = {
            boardList: [] as IBoardType[],
        }
    }

    public componentDidMount(): void {
        getBoardList()
        .then( result => {
            this.setState ( {
                boardList : result.data.results as IBoardType[],
            } )
        })
        .catch( error => window.console.log( error ) );
    }

    public render() {
        return (
            <div className='wrapper'>
                <Sidebar/>
                <BoardList
                    boardList={this.state.boardList}
                />
            </div>
        );
    }
}