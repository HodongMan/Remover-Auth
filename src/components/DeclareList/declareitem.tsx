import * as React from 'react';

import { IDeclareBoardType } from '../../types/typeDefined';

export default class DeclareItem extends React.Component< IDeclareBoardType, any> {
    
    constructor(props: IDeclareBoardType) {
        super(props);
    }

    public render() {
        return (
            <tr>
                <td>{this.props.pk}</td>
                <td>{this.props.user}</td>
                <td>{this.props.title}</td>
                <td>{this.props.created}</td>
                <td>삭제할까말까</td>
        </tr>
        );
    }
}