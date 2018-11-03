

export interface IDeclareBoardType {
    pk: number;
    user: string;
    title: string;
    board_id: number;
    description: string;
    created: string;
    updated: string;
}

export interface IStatusDeclareBordTypes {
    dataList: IDeclareBoardType[];
}

export interface IBoardDataCountType {
    board_count: number;
    comment_count: number;
    last_month_board_count: number;
    last_day_board_count: number;
}


export enum NumberType {
    Undefined = 0,
}