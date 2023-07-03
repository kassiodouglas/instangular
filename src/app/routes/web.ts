import { Router } from "../Router"

import { HomeComponent } from '../resources/pages/home/home.component';
import { UserComponent } from "../resources/pages/user/user.component";

Router.set('', HomeComponent);
Router.set('user/:username', UserComponent);

// above is the same of:
// Router.raw({path:'',component: HomeComponent});



