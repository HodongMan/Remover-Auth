import * as React from 'react';

import { IBlackUserType } from '../../types/typeDefined';

export default class UserItem extends React.Component< IBlackUserType, any> {
    
    constructor( props: IBlackUserType ) {
        super( props );
    }

    public render() {
        return (
            <tr>
                <td>{this.props.pk}</td>
                <td>{this.props.user}</td>
                <td>{"차단 유저"}</td>
                <td>{this.props.created}</td>
                <td>삭제할까말까</td>
        </tr>
        );
    }
}