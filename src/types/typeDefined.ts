
///////////////////////////////////////////////////////////
////////// Server Data Type
//////////////////////////////////////////////////////////

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

export interface IBlackUserType {
    pk: number;
    user: string;
    created: string;
}

export interface IStatusBlackUserTypes {
    blackUserList: IBlackUserType[];
}


export interface IBoardType {
    pk: number;
    category_id: number;
    user_id: number;
    description: string;
    views: number;
    comment_count: number,
    image_url: string;
    background_color: string;
    color: string;
    like_count: string;
    created: string;
    updated: string;
}

export interface IStatusBoardTypes {
    boardList: IBoardType[];
}


///////////////////////////////////////////////////////////
////////// Eunm Type
//////////////////////////////////////////////////////////

export enum NumberType {
    Undefined = 0,
}