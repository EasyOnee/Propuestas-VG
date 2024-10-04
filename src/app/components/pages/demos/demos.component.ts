import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrl: './demos.component.css'
})
export class DemosComponent {
  
  
  chooserTemplate = [
    {
      img: "demo-1.jpg",
      templateText: "Default Home",
      templateType: "(for Everyone)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-one",
      keyFeatures: ['OWl Slider', 'Gradient Color Background', 'Masonry Portfolio Gallery', 'Contact Form']
    },
    {
      img: "demo-2.jpg",
      templateText: "Image Background",
      templateType: "(for Corporate)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-two",
      keyFeatures: ['Single Image Background', 'Pie Charts', 'Metro Portfolio Gallery', 'Active Link Tab', 'Contact Form']
    },
    {
      img: "demo-3.jpg",
      templateText: "Video Background",
      templateType: "(for Photography)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-three",
      keyFeatures: ['Video Background', 'Animated Text', 'Gradient Color Background', 'Fullwidth Portfolio Gallery', 'Contact Form']
    },
    {
      img: "demo-4.jpg",
      templateText: "Digital Agency",
      templateType: "(for Agencies)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-four",
      keyFeatures: ['Owl Slider', 'Kenburn Effect', 'Solid Color Background', 'Fullwidth Portfolio Gallery', 'Contact Form']
    },
    {
      img: "demo-5.jpg",
      templateText: "Design Studio",
      templateType: "(for Personal Creative)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-five",
      keyFeatures: ['Parallax Scrolling', 'Dark Gradient Background', 'Square Button', 'Contact Form', 'Mobile Friendly', 'Client Testimonials']
    },
    {
      img: "demo-6.jpg",
      templateText: "Startup Business",
      templateType: "(for Everyone)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-six",
      keyFeatures: ['Owl Slider', 'Lime Gradient Background', 'Masonry Portfolio Gallery', 'Contact Form']
    },
    {
      img: "demo-7.jpg",
      templateText: "SEO Marketing",
      templateType: "(for Marketing)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-seven",
      keyFeatures: ['Animated Text', 'Gradient Color Text', 'Masonry Portfolio Gallery', 'Contact Form']
    },
    {
      img: "demo-8.jpg",
      templateText: "Innovative Agency",
      templateType: "(for Everyone)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-eighth",
      keyFeatures: ['Owl Slider', 'Gradient Overlay Background', 'Metro Portfolio Gallery', 'Contact Form']
    },
    {
      img: "demo-9.jpg",
      templateText: "Business Agency",
      templateType: "(for Everyone)",
      btnClass: "btn btn-color btn-lg btn-square",
      btnText: "Live Preview",
      url: "/home-nine",
      keyFeatures: ['Owl Slider', 'Animated Text', 'Grid Portfolio', 'Contact Form']
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
