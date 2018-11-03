import axios, { AxiosPromise } from 'axios';

const kUrl: string = "http://13.125.76.112"

export function getDeclareList(): AxiosPromise<any> {
    return axios.get(`${kUrl}/api/declare/`);
}

export function getBoardDataCount(): AxiosPromise<any> {
    return axios.get(`${kUrl}/api/admin/board/data/count/`);
}

export function getBlackUserList(): AxiosPromise<any> {
    return axios.get(`${kUrl}/api/blacklist/`);
}

export function getBoardList(): AxiosPromise<any> {
    return axios.get(`${kUrl}/api/admin/board/`);
}