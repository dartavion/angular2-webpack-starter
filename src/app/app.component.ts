/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {AppState} from './app.service';
import {Home} from './home';
import {RouterActive} from './router-active';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [RouterActive, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_TABS_DIRECTIVES, MD_PROGRESS_BAR_DIRECTIVES],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.css')
  ],
  template: `
    <md-progress-bar *ngIf="isNetworkActive" style="position: absolute; top: 0; left: 0" mode="query" color="accent"></md-progress-bar>
    

    <main>
      <md-toolbar color="primary">
        <span>Star Wars</span>
        
        <!-- This fills the remaining space of the current row -->
        <span class="example-fill-remaining-space"></span>
        
        <span></span>
      </md-toolbar>
      
      <span router-active>
        <button md-button [routerLink]=" ['Index'] ">
          Index
        </button>
      </span>
      <span router-active>
        <button md-button [routerLink]=" ['Home'] ">
          Home
        </button>
      </span>
      <span router-active>
        <button md-button [routerLink]=" ['About'] ">
          About
        </button>
      </span>
    
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})
@RouteConfig([
  {path: '/', name: 'Index', component: Home, useAsDefault: true},
  {path: '/home', name: 'Home', component: Home},
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  {path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About')}
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState:AppState) {

  }
  
  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
