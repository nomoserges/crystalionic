import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'List',
      url: '/list'
    },{
      title: 'Assurés volontaire',
      url: '/listdocs'
    },{
      title: 'Employeur',
      url: '/listdocs'
    },{
      title: 'Employé',
      url: '/listdocs'
    },{
      title: 'Nos appels d\'offres ',
      url: '/listdocs'
    },{
      title: 'Documentation',
      url: '/listdocs'
    },{
      title: 'Babillard',
      url: '/listdocs'
    },{
      title: 'A propos de nous',
      url: '/listdocs'
    },{
      title: 'Nos agences',
      url: '/listdocs'
    }
  ];

/* Pages documentation */

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
