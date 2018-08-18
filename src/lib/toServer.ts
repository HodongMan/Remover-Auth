import axios, { AxiosPromise } from 'axios';

const kUrl: string = "http://13.125.76.112"

export function getDeclareList(): AxiosPromise<any> {
    return axios.get(`${kUrl}/api/declare/`);
}