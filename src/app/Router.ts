
export class Router{

    static routes:Array<any> = [];

    static set(path:string, component:any){ 
      this.routes.push({path:path, component: component})
    }

    static raw(object: object){ 
      this.routes.push(object)
    }

}

