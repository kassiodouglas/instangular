export interface Photos {
    id?: number,
    title: string,
    description: string,
    photo: string,
    created_at?:string,
    updated_at?:string,
    commnets?: [{text:String, username:String}];
}
