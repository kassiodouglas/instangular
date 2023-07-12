import { Router } from "../core/Router"
import { AuthGuard } from "../core/guards/auth-guard";
import { DefaultComponent } from "../modules/layouts/default/default.component";
import { AboutComponent } from "../modules/pages/about/about.component";
import { DevComponent } from "../modules/pages/dev/dev.component";
import { ErrorComponent } from "../modules/pages/error/error.component";
import { HomeComponent } from '../modules/pages/home/home.component';
import { LogoutComponent } from "../modules/pages/logout/logout.component";
import { MyAccountComponent } from "../modules/pages/my-account/my-account.component";
import { UserComponent } from "../modules/pages/user/user.component";


Router.layout(DefaultComponent, ()=>{

    Router.named('home').get('', HomeComponent);
    Router.named('about').get('sobre', AboutComponent);
    Router.named('dev').get('dev', DevComponent);
    Router.named('user').get('@/:login', UserComponent);

    Router.guard([AuthGuard], ()=>{
        Router.named('myaccount').get('minha-conta', MyAccountComponent);
        Router.named('logout').get('logout', LogoutComponent);
    });

}).set();



// ficar no final
Router.named('error').get('error/:type', ErrorComponent).set();
Router.redirect('**', 'error/404');








