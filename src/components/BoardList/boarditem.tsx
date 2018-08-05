import * as React from 'react';

export default class BoardItem extends React.Component {

    public render() {
        return (
            <tr>
                <td>1</td>
                <td>종류</td>
                <td>이름</td>
                <td>가격</td>
                <td>재고</td>
        </tr>
        );
    }
}