import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <nav>
    
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS
    ]
})
@RouteConfig([
])
export class AppComponent {
    title = 'Waterloo Parking Infractions'
}
