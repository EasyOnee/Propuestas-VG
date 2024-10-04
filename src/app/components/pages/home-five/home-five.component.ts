import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home-five',
  templateUrl: './home-five.component.html',
  styleUrl: './home-five.component.css'
})
export class HomeFiveComponent {
  // Funfacts
  funFacts =[
    {
      icon: "icon-hourglass white-color font-50px",
      number: 352,
      desc: "Happy Clients",
      displayedNumber: 0
    },
    {
      icon: "icon-lightbulb white-color font-50px",
      number: 884,
      desc: "Year Experience",
      displayedNumber: 0
    },
    {
      icon: "icon-wine white-color font-50px",
      number: 662,
      desc: "Project Completed",
      displayedNumber: 0
    },
    {
      icon: "icon-hotairballoon white-color font-50px",
      number: 444,
      desc: "Awwwards",
      displayedNumber: 0
    }
  ]

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    this.funFacts.forEach(fact => {
      this.animateCounter(fact);
    });
  }

  animateCounter(fact: any): void {
    const duration = 4000; 
    const intervalTime = 50; 
    const increment = fact.number / (duration / intervalTime);

    const interval = setInterval(() => {
      fact.displayedNumber += increment;
      if (fact.displayedNumber >= fact.number) {
        fact.displayedNumber = fact.number;
        clearInterval(interval); 
      }
    }, intervalTime);
  }

  // Team
  
  slideStoreTwo= [
    {
      title: "Web Designer",
      subtitle: "Tom Bills",
      image: "team-1.jpg"
    },
    {
      title: "CEO of Becki Agency",
      subtitle: "Sara Adams",
      image: "team-2.jpg"
    },
    {
      title: "Photographer",
      subtitle: "Enzo William",
      image: "team-3.jpg"
    }
  ];

  socialLinks = [
    { iconOuter: "facebook", iconInner: ['icofont icofont-social-facebook'] },
    { iconOuter: "twitter", iconInner: ['icofont icofont-social-twitter'] },
    { iconOuter: "pinterest", iconInner: ['icofont icofont-social-pinterest'] },
  ];

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
      title: "Standard Plan",
      subTitle: "An affordable option for end-to-end hiring at small companies.",
      currency: "$",
      amount: 16.99,
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

  //Testimonials
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 1,
    navText: ['', ''],
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

  slideStore = [
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

  //Blogs
  blogs = [
    {
      img: "post-04.jpg",
      title: "How These Different Book Covers Reflect the Design",
      date: "January 15, 2023",
      comment: "5 Comments",
      time: "5 Minutes",
    },
    {
      img: "post-06.jpg",
      title: "8 Colorful Toys Designed to Spark the Imagination",
      date: "April 19, 2024",
      comment: "22 Comments",
      time: "Just Now",
    },
    {
      img: "post-08.jpg",
      title: "User Experience Design is one of the most rapidly developing",
      date: "Febuary 13, 2024",
      comment: "1k Comments",
      time: "One Month",
    },
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

  // Video Popup
	isOpen = false;
  openPopup(): void {
      this.isOpen = true;
  }
  closePopup(): void {
      this.isOpen = false;
  }
}
