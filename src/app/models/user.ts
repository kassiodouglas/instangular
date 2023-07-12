export interface Users {
    id?: number,
    name: string,
    login: string,
    email: string,
    avatar?: string,
    created_at?:string,
    updated_at?:string,
    password?:string,
    password_confirmation?:string,
    logged?:boolean
}
