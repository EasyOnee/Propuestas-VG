import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isSticky: boolean = false;
  logo: string = '../../../../assets/images/vg/vgLogo.png';

    
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollTop > 100) {  
      this.isSticky = true;
      this.logo = '../../../../assets/images/vg/vgLogo.png';
    } else {
      this.isSticky = false;
      this.logo = '../../../../assets/images/vg/vgLogo.png';
    }
  }

  isCollapsed = true;
}
