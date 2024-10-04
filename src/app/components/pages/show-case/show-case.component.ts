import { Component } from '@angular/core';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.css'
})
export class ShowCaseComponent {
  // Portfolio
  portfolios = [
    {
      img: "1.jpg",
      title: "Fode ",
      subTitle: "Branding, Mockup"
    },
    {
      img: "2.jpg",
      title: "Daniel and Denise",
      subTitle: "Branding, UI/UX"
    },
    {
      img: "3.jpg",
      title: "Sydney Design",
      subTitle: "Design, Stationery"
    },
    {
      img: "4.jpg",
      title: "Glasses",
      subTitle: "Branding, UI/UX"
    },
    {
      img: "5.jpg",
      title: "The Bijou Factory",
      subTitle: "Branding, Mockup"
    },
    {
      img: "6.jpg",
      title: "Calender",
      subTitle: "Design, Branding"
    },
    {
      img: "7.jpg",
      title: "Flyer",
      subTitle: "Branding, Stationery"
    },
    {
      img: "8.jpg",
      title: "Hand Watch",
      subTitle: "Design, UI/UX"
    }
  ]
}
