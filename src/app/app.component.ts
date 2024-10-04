import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'becki-app';
  showFooter = true;

  constructor(private router: Router) {
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/error' || event.url === '/coming-soon') {
          this.showFooter = false;
        } else {
          this.showFooter = true;
        }
      }
    });
  }
}
