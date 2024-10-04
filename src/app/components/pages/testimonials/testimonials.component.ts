import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  // Owl Testimonial
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 3,
    navText: ['<i class="icofont icofont-arrow-left"></i>', '<i class="icofont icofont-arrow-right"></i>'],
    
  }

  slideStore = [
    {
      title: "Anne McAdams",
      subTitle: "CEO / Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales nec nulla ac aliquet. Duis vel nunc eget.",
      image: "assets/images/team/avatar-1.jpg",
    },

    {
      title: "Jared Kane",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-2.jpg",
    },

    {
      title: "Nani Wale",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-3.jpg",
    },

    {
      title: "John Doe",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-4.jpg",
    }

  ]

  //Testimonials
  customOptionsTwo: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 1,
    navText: ['', ''],
    
  }

  slideStoreTwo = [
    {
      title: "David Levine",
      description: "Very much satisfied with the service. Delivered on time and responded to request for modifications within few hours. I recommend Sloganshub for anyone looking for smart business.",
    },

    {
      title: "Michael Kyle",
      description: "I'm very happy with the results! They went above and beyond for me and that is always appreciated! I would highly recommend SH to anybody!",
    },

    {
      title: "Mellissa Christine",
      description: "Great work I got a lot more than what I ordered, they are very legítimas and catchy. I went for one of them for my brand but is always better to have more options.",
    },

    {
      title: "Anne McAdams",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales nec nulla ac aliquet. Duis vel nunc eget.",
    }

  ]

  // Owl Testimonial
  customOptionsThree: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 3,
    navText: ['<i class="icofont icofont-arrow-left"></i>', '<i class="icofont icofont-arrow-right"></i>'],
    
  }

  slideStoreThree = [
    {
      title: "Anne McAdams",
      subTitle: "CEO / Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales nec nulla ac aliquet. Duis vel nunc eget.",
      image: "assets/images/team/avatar-1.jpg",
    },

    {
      title: "Jared Kane",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-2.jpg",
    },

    {
      title: "Nani Wale",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-3.jpg",
    },

    {
      title: "John Doe",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-4.jpg",
    }

  ]
}
