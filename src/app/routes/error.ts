import { Router } from "../core/Router"

import { ErrorComponent } from "../modules/pages/error/error.component";

Router.named('error').get('error/:type', ErrorComponent).set();
Router.redirect('**', 'error/404');