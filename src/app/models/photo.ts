export interface Photos {
    id?: number,   
    description: string,
    photo: string,
    created_at?:string,
    updated_at?:string,
    comments?: [{text:String, username:String}];
}
