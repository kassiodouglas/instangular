export interface Auth {
    id?: number,
    logged?: boolean,
    name: string,
    login: string,
    email: string,
    avatar?: string,
    password?: string,
    token?:string,
}
