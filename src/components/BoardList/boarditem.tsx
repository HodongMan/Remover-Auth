import * as React from 'react';

import { IBoardType } from '../../types/typeDefined';

export default class BoardItem extends React.Component< IBoardType, any> {
    
    constructor( props: IBoardType ) {
        super( props );
    }

    public render() {
        return (
            <tr>
                <td>{this.props.pk}</td>
                <td>{this.props.user_id}</td>
                <td>{this.props.description}</td>
                <td>{this.props.created}</td>
                <td>{this.props.views}</td>
            </tr>
        );
    }
}