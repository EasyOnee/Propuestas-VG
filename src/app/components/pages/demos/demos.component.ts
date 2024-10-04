import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})
export class DemosComponent {
  
  
  chooserTemplate = [
    {
      img: "../../../../assets/images/background/bg2.png",
      templateText: "Video Background",
      templateType: "(Landing Page)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-three",
      keyFeatures: ['Video Background', 'Animated Text', 'Gradient Color Background', 'Fullwidth Portfolio Gallery', 'Contact Form']
    },
    {
      img: "../../../../assets/images/background/videback2.png",
      templateText: "Design Friendly",
      templateType: "(Creative Langing Page)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-five",
      keyFeatures: ['Parallax Scrolling', 'Dark Gradient Background', 'Square Button', 'Contact Form', 'Mobile Friendly', 'Client Testimonials']
    },

  ]


  innerPages = [
    {
      img:'demo-10.jpg',
      url: '/blog'
    },
    {
      img:'demo-11.jpg',
      url: '/blog-details'
    },
    {
      img:'demo-12.jpg',
      url: '/counters'
    },
    {
      img:'demo-13.jpg',
      url: '/countdowns'
    },
    {
      img:'demo-14.jpg',
      url: '/testimonials'
    },
    {
      img:'demo-15.jpg',
      url: '/pricings'
    },
    {
      img:'demo-16.jpg',
      url: '/error'
    },
    {
      img:'demo-17.jpg',
      url: '/coming-soon'
    },
    {
      img:'demo-18.jpg',
      url: '/show-case'
    }

  ]
  
}
