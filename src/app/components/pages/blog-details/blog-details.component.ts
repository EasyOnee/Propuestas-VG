import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  // OWl Slider
  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    margin:0,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 1,
    navText: ['<i class="icofont icofont-arrow-left"></i>', '<i class="icofont icofont-arrow-right"></i>'],
  }

  slideStore = [
    {
      image: "post-02.jpg",
    },

    {
      image: "post-03.jpg",
    },

    {
      image: "post-04.jpg",
    }

  ]

   //Blogs
   blogs = [
    {
      img: "post-01.jpg",
      title: "How These Different Book",
      date: "July 04, 2023",
      comment: "35 Comments",
      time: "8 Minutes",
    },
    {
      img: "post-02.jpg",
      title: "8 Colorful Toys Designed",
      date: "April 19, 2024",
      comment: "4k Comments",
      time: "Just Now",
    },
    {
      img: "post-03.jpg",
      title: "User Experience Design",
      date: "Febuary 13, 2024",
      comment: "10 Comments",
      time: "One Month",
    }
  ]
}
