import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home-six',
  templateUrl: './home-six.component.html',
  styleUrl: './home-six.component.css'
})
export class HomeSixComponent {
  //Owl Slider
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 1,
    navText: ['', ''],
  }

  slideStore = [
    {
      introtext: "Becki Agency",
      title: "Creative",
      subtitle: "One Page Template",
    },

    {
      introtext: "HTML5 Bootstrap",
      title: "The Perfect",
      subtitle: "One Page Template",
    },

    {
      introtext: "Becki Agency",
      title: "Creative",
      subtitle: "One Page Template",
    }

  ]

  // Features
  features =[
    {
      featureBox: "feature-box text-center xs-mb-50 feature-box-gradient-seven center-feature white-color border-radius-25",
      icon: "icon-laptop font-40px",
      title: "Friendly Codes",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      featureBox: "feature-box text-center xs-mb-30 feature-box-gradient-eight center-feature white-color border-radius-25",
      icon: "icon-globe font-40px",
      title: "SEO Optimized",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      featureBox: "feature-box text-center xs-mb-50 feature-box-gradient-seven center-feature white-color border-radius-25",
      icon: "icon-dial font-40px",
      title: "Fast Support",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }
  ]

  // Team
  
  slideStoreTwo : { title: string; subtitle: string; image: string; index: number }[] = [
    {
      title: "Web Designer",
      subtitle: "Tom Bills",
      image: "team-1.jpg",
      index: 0
    },
    {
      title: "CEO of Becki Agency",
      subtitle: "Sara Adams",
      image: "team-2.jpg",
      index: 1
    }
  ];

  socialLinks = [
    { iconOuter: "facebook", iconInner: ['icofont icofont-social-facebook'] },
    { iconOuter: "twitter", iconInner: ['icofont icofont-social-twitter'] },
    { iconOuter: "pinterest", iconInner: ['icofont icofont-social-pinterest'] },
  ];

  // Services
  services = [
    {
      icon: "icon-tools font-30px white-color",
      title: "Branding",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
    },
    {
      icon: "icon-linegraph font-30px white-color",
      title: "Marketing",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
    },
    {
      icon: "icon-globe font-30px white-color",
      title: "Development",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
    },
    {
      icon: "icon-tools font-30px white-color",
      title: "Web Design",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
    },
    {
      icon: "icon-beaker font-30px white-color",
      title: "Social Media",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
    },
    {
      icon: "icon-layers font-30px white-color",
      title: "Research",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
    },
  ]

  //Features

  leftServices = [
    {
      title: "Retina Ready",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },
    {
      title: "Awesome Design",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },
    {
      title: "Minimal Style",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    }
  ]

  rightServices = [
    {
      title: "Top Quality",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },
    {
      title: "Best Performance",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },{
      title: "Fast Support",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    }
  ]

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
    },
    {
      img: "9.jpg",
      title: "Flyer",
      subTitle: "Design, UI/UX"
    }
  ]

  // Pricing
  pricing = [
    {
      title: "Basic Plan",
      subTitle: "An affordable option for end-to-end hiring at small companies.",
      currency: "$",
      amount: 9.99,
      btnClass: "btn btn-dark btn-md btn-default btn-square",
      btnText: "Get Started",
      features: [
        'Mobile-Optimized Website',
        'Powerful Website Metrics',
        'Free Custom Domain',
        '24/7 Customer Support',
        'Fully Integrated E-Commerce',
        'Sell Unlimited Products &amp; Accept Donations',
        'No CMS items',
        'No site search',
        'No CMS API access',
        'No content editors'
      ]
    },

    {
      title: "Extended Plan",
      subTitle: "An affordable option for end-to-end hiring at small companies.",
      currency: "$",
      amount: 24.99,
      btnClass: "btn btn-dark btn-md btn-default btn-square",
      btnText: "Get Started",
      features: [
        'Mobile-Optimized Website',
        'Powerful Website Metrics',
        'Free Custom Domain',
        '24/7 Customer Support',
        'Fully Integrated E-Commerce',
        'Sell Unlimited Products &amp; Accept Donations',
        'No CMS items',
        'No site search',
        'No CMS API access',
        'No content editors'
      ]
    }
  ];

  // Owl Testimonial
  customOptionsThree: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 3,
    navText: ['<i class="icofont icofont-arrow-left"></i>', '<i class="icofont icofont-arrow-right"></i>'],
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
    }
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

  //Brand Logos
  logos = [
    {
      img: "1-colored.png"
    },
    {
      img: "2-colored.png"
    },
    {
      img: "3-colored.png"
    },
    {
      img: "4-colored.png"
    },
    {
      img: "5-colored.png"
    },
    {
      img: "6-colored.png"
    }
  ]

  // Contact Form
  formData = {
    user_name: '',
    user_email: '',
    message: ''
  };

  // EmailJS service configuration
  private serviceId = 'contact-form';  // Replace with your EmailJS Service ID
  private templateId = 'contact-form-becki';  // Replace with your EmailJS Template ID
  private publicKey = 'gObMl0a3V0Jib9k5c';  // Replace with your EmailJS Public Key

  // Method to send email on form submission
  public sendEmail(event: Event): void {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(this.serviceId, this.templateId, event.target as HTMLFormElement, this.publicKey)
      .then(
        (response: EmailJSResponseStatus) => {
          alert('Message sent successfully. Thank you, we will get back to you soon!');
          this.resetForm();
        },
        (error: EmailJSResponseStatus) => {
          console.error('Failed to send message. Error:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  }

  // Method to reset the form after submission
  private resetForm(): void {
    this.formData = {
      user_name: '',
      user_email: '',
      message: ''
    };
  }

  socialMedia = [
    {
      iconClass: "icon facebook",
      icon:"icofont icofont-social-facebook"
    },
    {
      iconClass: "icon twitter",
      icon:"icofont icofont-social-twitter"
    },
    {
      iconClass: "icon behance",
      icon:"icofont icofont-social-behance"
    },
    {
      iconClass: "icon linkedin",
      icon:"icofont icofont-social-linkedin"
    },
    {
      iconClass: "icon youtube",
      icon:"icofont icofont-social-youtube"
    },
    {
      iconClass: "icon instagram",
      icon:"icofont icofont-social-instagram"
    }
  ]
}
