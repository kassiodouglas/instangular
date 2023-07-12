import { Auth as authentication} from "../models/auth";


export class Auth {  

    static get(key?:string):authentication|string|null{
        let data = JSON.parse(localStorage.getItem('user')!);

        if(key)
            data = data![key]

        return data!
    }

    static destroy():void{
        localStorage.setItem('user', 'false') 
    }

    static set(data:authentication):void{
        data.logged = true;        
        localStorage.setItem('user', JSON.stringify(data))        
    }

    static add(key:string, value:string):void{
        let data = JSON.parse(localStorage.getItem('user')!);
        data[key] = value;        
        localStorage.setItem('user', JSON.stringify(data))        
    }


}