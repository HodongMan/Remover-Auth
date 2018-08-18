

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
