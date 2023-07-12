
export interface Route {
  path: string,
  component?: any,   
  children?: any,
  canActivate?: any,
  name?: string,
  redirectTo?: any,
  pathMatch?: any,
}

export class Router{

    static routes:Array<Route> = [];
    static prefixPath:String = '';
    static nameRoute:string = '';
    static canActivate:Array<any>  = [];
    static children:Array<any>  = [];
    static routesTmp:Array<Route> = [];



    static all(): Array<Route>{
      return this.routes;
    }

    static path(name:string, args?:Array<object>|null): String{

      let path = '';

      this.routes.forEach(route => {

        if(path===''){

          if(route.name == name){           
            path = route.path;

          }else{           
            
            if(route.children !== undefined)
              route.children.forEach((childroute:any)=>{
                if(childroute.name == name)     
                  path = childroute.path;                
              });

          }

        }

      });

      if(path.includes(':')){
        var newPath = path
        const paths = path.split('/')
       
        paths.forEach(pathArg=>{

          if(pathArg.includes(':')){
          var x:any = args![0];
         
          var key = pathArg.replace(':','')  
             
          newPath = newPath.replace(pathArg, x[key])        
          } 
        })

        path = newPath

      }     
       

      return path
    }

    static named(name:string):any{

      this.nameRoute = name;

      return this
    }

    static set(): any{
     
      this.routesTmp.forEach(route=> {   
        this.routes.push(route)
      })

      this.routesTmp = [];     
      
    } 

    static get(path:string, component:any): any{ 

      let prefix = this.prefixPath;
      if(path === '')
        prefix = this.prefixPath.substring(0,this.prefixPath.length -1);

      const route = {
        path: `${prefix}${path}`,        
        component: component,
        canActivate: this.canActivate,
        name: this.nameRoute
      }

      this.nameRoute = '';

      this.routesTmp.push(route)

      return this
    }

    static raw(objectRoute: Route): any{   
      
      if(this.prefixPath != '')
        objectRoute.path = `${this.prefixPath}${objectRoute.path}`;
      
      this.routes.push(objectRoute)

      return this
    }

    static prefix(prefix: string, callback:any): any{

      if(prefix==='') return this

      this.prefixPath = prefix + '/';

      callback()

      this.prefixPath = ''  
      return this
    }

    static guard(guard: Array<any>, callback:any):any{

      this.canActivate = guard

      callback();

      this.canActivate = []    

      return this

    }

    static redirect(path: string, pathTo: string):void{
      this.routes.push({ path: path, redirectTo: pathTo, pathMatch: 'full' })
    }

    static layout( layout:any, callback:any):any{      
      
      callback()

      let path = String((this.prefixPath) ? this.prefixPath :  '');
     
      const route = {
        path: path,
        component: layout,
        children: this.routesTmp        
      }  

      Router.raw(route) 
      
      this.routesTmp = []       
     
      return this
    }

}

