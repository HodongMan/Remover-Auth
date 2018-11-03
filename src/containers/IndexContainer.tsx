import * as React from 'react';

import { Index, Sidebar } from '../components';
import { getBoardDataCount } from '../lib/toServer';
import { IBoardDataCountType, NumberType } from '../types/typeDefined';


export default class IndexContainer extends React.Component<{}, IBoardDataCountType> {

    constructor( props: IBoardDataCountType ) {
        super( props );

        this.state = {
            board_count: NumberType.Undefined,
            comment_count: NumberType.Undefined,
            last_day_board_count: NumberType.Undefined,
            last_month_board_count: NumberType.Undefined,
        }
    }

    public componentDidMount(): void {
        getBoardDataCount()
        .then( result => {
            this.setState ( {
                board_count: result.data.board_count,
                comment_count: result.data.comment_count,
                last_day_board_count: result.data.last_day_board_count,
                last_month_board_count: result.data.last_month_board_count,
            } );
            
            
        })
        .catch( error => window.console.log( error ) );
    }

    public render() {
        return(
            <div className='wrapper'>
                <Sidebar />
                <Index
                    board_count = {this.state.board_count}
                    comment_count = {this.state.comment_count}
                    last_day_board_count = {this.state.last_day_board_count}
                    last_month_board_count = {this.state.last_month_board_count}
                />
            </div>
        );
    }
}