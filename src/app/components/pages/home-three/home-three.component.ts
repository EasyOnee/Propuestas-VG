import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home-three',
  templateUrl: './home-three.component.html',
  styleUrl: './home-three.component.css',
})
export class HomeThreeComponent {
  // Video Player
  isMuted: boolean = true; // Start with the video muted

  toggleMute(): void {
    this.isMuted = !this.isMuted;
  }

  // Our Process
  steps = [
    {
      icon: 'icon-clipboard secondary-color font-30px',
      title: 'Consultation ',
      desc: 'Understanding your needs for heavy equipment parts.',
    },
    {
      icon: 'icon-globe secondary-color font-30px',
      title: 'Sourcing',
      desc: 'Finding the best quality parts from trusted suppliers.',
    },
    {
      icon: 'icon-heart secondary-color font-30px',
      title: 'Delivery ',
      desc: 'Ensuring timely and secure delivery of your orders.',
    },
    {
      icon: 'icon-phone secondary-color font-30px',
      title: 'Support ',
      desc: 'Providing post-sale support and assistance.',
    },
  ];

  // Type it
  phrases: string[] = ['Transmissions', 'Truck Components', 'Heavy Components'];
  displayedText: string = '';
  currentPhraseIndex: number = 0;
  currentIndex: number = 0;
  typingSpeed: number = 100;
  delayBetweenPhrases: number = 1500;

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    this.typePhrase();
  }

  typePhrase(): void {
    const phrase = this.phrases[this.currentPhraseIndex];

    const typingInterval = setInterval(() => {
      if (this.currentIndex < phrase.length) {
        this.displayedText += phrase.charAt(this.currentIndex);
        this.currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          this.startDeleting();
        }, this.delayBetweenPhrases); // Delay before starting to delete
      }
    }, this.typingSpeed);
  }

  startDeleting(): void {
    const deletingInterval = setInterval(() => {
      if (this.currentIndex > 0) {
        this.displayedText = this.displayedText.slice(0, -1);
        this.currentIndex--;
      } else {
        clearInterval(deletingInterval);
        this.currentPhraseIndex =
          (this.currentPhraseIndex + 1) % this.phrases.length;
        this.currentIndex = 0;
        setTimeout(() => {
          this.typePhrase();
        }, this.delayBetweenPhrases); // Delay before starting to type the next phrase
      }
    }, this.typingSpeed / 2); // Faster deleting speed
  }

  // Team

  slideStoreTwo: {
    title: string;
    subtitle: string;
    image: string;
    index: number;
  }[] = [
    {
      title: 'CEO',
      subtitle: 'Employee',
      image: '../../../../assets/images/vg/VgUser.png',
      index: 0,
    },
    {
      title: 'CEO',
      subtitle: 'Employee',
      image: '../../../../assets/images/vg/VgUser.png',
      index: 1,
    },
    {
      title: 'CEO',
      subtitle: 'Employee',
      image: '../../../../assets/images/vg/VgUser.png',
      index: 2,
    },
    {
      title: 'CEO',
      subtitle: 'Employee',
      image: '../../../../assets/images/vg/VgUser.png',
      index: 3,
    },
  ];

  socialLinks = [
    { iconOuter: 'facebook', iconInner: ['icofont icofont-social-facebook'] },
    { iconOuter: 'twitter', iconInner: ['icofont icofont-social-twitter'] },
    { iconOuter: 'pinterest', iconInner: ['icofont icofont-social-pinterest'] },
  ];

  // Services
  services = [
    {
      icon: 'icon-tools font-30px white-color',
      title: 'Heavy Equipment Parts',
      desc: 'We provide high-quality parts for heavy equipment, trucks, and vehicles to keep your operations running smoothly.',
    },
    {
      icon: 'icon-layers font-30px white-color',
      title: 'Truck Rentals',
      desc: 'Rental of trucks and work vehicles for construction, agriculture, and heavy-duty operations.',
    },
    {
      icon: 'icon-globe font-30px white-color',
      title: 'Specialized Equipment Rentals',
      desc: 'We offer specialized rentals including water tankers and other work equipment to meet your project needs.',
    },
    {
      icon: 'icon-tools font-30px white-color',
      title: 'Auto Parts',
      desc: 'Supplying quality components for a wide range of auto vehicles, ensuring reliability and performance.',
    },
    {
      icon: 'icon-layers font-30px white-color',
      title: 'Customer Support',
      desc: 'Providing exceptional post-sale support to ensure our customers receive the best service.',
    },
    {
      icon: 'icon-globe font-30px white-color',
      title: 'Global Sourcing',
      desc: 'We source the best quality parts from trusted suppliers worldwide to fulfill your requirements.',
    },
  ];

  // Skills
  skills = [
    { name: 'Integrity', level: 100 },
    { name: 'Quality', level: 100 },
    { name: 'Innovation', level: 100 },
    { name: 'Social Responsibility', level: 100 },
    { name: 'Customer Focus', level: 100 },
  ];

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const skillsSection = document.querySelector('.skill');

    // Add a null check for skillsSection
    if (skillsSection) {
      const position = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (position < windowHeight) {
        this.isScrolled = true;
      }
    }
  }

  // Portfolio
/*   portfolios = [
    {
      img: '1.jpg',
      title: 'Fode ',
      subTitle: 'Branding, Mockup',
    },
    {
      img: '2.jpg',
      title: 'Daniel and Denise',
      subTitle: 'Branding, UI/UX',
    },
    {
      img: '3.jpg',
      title: 'Sydney Design',
      subTitle: 'Design, Stationery',
    },
    {
      img: '4.jpg',
      title: 'Glasses',
      subTitle: 'Branding, UI/UX',
    },
    {
      img: '5.jpg',
      title: 'The Bijou Factory',
      subTitle: 'Branding, Mockup',
    },
    {
      img: '6.jpg',
      title: 'Calender',
      subTitle: 'Design, Branding',
    },
    {
      img: '7.jpg',
      title: 'Flyer',
      subTitle: 'Branding, Stationery',
    },
    {
      img: '8.jpg',
      title: 'Hand Watch',
      subTitle: 'Design, UI/UX',
    },
  ]; */

  // Pricing
/*   pricing = [
    {
      title: 'Basic Plan',
      subTitle:
        'An affordable option for end-to-end hiring at small companies.',
      currency: '$',
      amount: 9.99,
      btnClass: 'btn btn-dark btn-md btn-default btn-square',
      btnText: 'Get Started',
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
        'No content editors',
      ],
    },

    {
      title: 'Standard Plan',
      subTitle:
        'An affordable option for end-to-end hiring at small companies.',
      currency: '$',
      amount: 16.99,
      btnClass: 'btn btn-dark btn-md btn-default btn-square',
      btnText: 'Get Started',
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
        'No content editors',
      ],
    },

    {
      title: 'Extended Plan',
      subTitle:
        'An affordable option for end-to-end hiring at small companies.',
      currency: '$',
      amount: 24.99,
      btnClass: 'btn btn-dark btn-md btn-default btn-square',
      btnText: 'Get Started',
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
        'No content editors',
      ],
    },
  ]; */

  // Owl Testimonial
  customOptionsThree: OwlOptions = {
    loop: true,
    dots: true,
    margin: 30,
    nav: true,
    autoplay: true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 3,
    navText: [
      '<i class="icofont icofont-arrow-left"></i>',
      '<i class="icofont icofont-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  slideStoreThree = [
    {
      title: 'Anne McAdams',
      subTitle: 'Customer',
      description:
        'We have been purchasing parts from VG Enterprize for years. Their quality is consistently outstanding, and they always ensure prompt delivery, helping us keep our operations running smoothly.',
      image: 'assets/images/team/avatar-1.jpg',
    },
    {
      title: 'Jared Kane',
      subTitle: 'Customer',
      description:
        'The customer service at VG Enterprize is unmatched. They helped us find hard-to-source components, and the entire purchasing experience was seamless. Highly recommend!',
      image: 'assets/images/team/avatar-2.jpg',
    },
    {
      title: 'Nani Wale',
      subTitle: 'Customer',
      description:
        'We appreciate the dedication of VG Enterprize to quality. The parts we bought were exactly what we needed, and their support team was there for any questions. Great experience overall.',
      image: 'assets/images/team/avatar-3.jpg',
    },
    {
      title: 'John Doe',
      subTitle: 'Customer',
      description:
        'VG Enterprize made our purchase of heavy equipment parts hassle-free. They offer excellent guidance, and their products have always met our expectations. We are loyal customers for a reason.',
      image: 'assets/images/team/avatar-4.jpg',
    },
];


  // Owl Brand Logos
  customOptionsFour: OwlOptions = {
    loop: true,
    dots: false,
    margin: 0,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 6,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 6,
      },
    },
  };

 /*  slideStoreFour = [
    {
      image: 'assets/images/clients/1.png',
    },

    {
      image: 'assets/images/clients/2.png',
    },

    {
      image: 'assets/images/clients/3.png',
    },

    {
      image: 'assets/images/clients/4.png',
    },

    {
      image: 'assets/images/clients/5.png',
    },

    {
      image: 'assets/images/clients/6.png',
    },
  ]; */

  // Contact Form
  formData = {
    user_name: '',
    user_email: '',
    message: '',
  };

  // EmailJS service configuration
  private serviceId = 'contact-form'; // Replace with your EmailJS Service ID
  private templateId = 'contact-form-becki'; // Replace with your EmailJS Template ID
  private publicKey = 'gObMl0a3V0Jib9k5c'; // Replace with your EmailJS Public Key

  // Method to send email on form submission
  public sendEmail(event: Event): void {
    event.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        this.serviceId,
        this.templateId,
        event.target as HTMLFormElement,
        this.publicKey
      )
      .then(
        (response: EmailJSResponseStatus) => {
          alert(
            'Message sent successfully. Thank you, we will get back to you soon!'
          );
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
      message: '',
    };
  }

  socialMedia = [
    {
      iconClass: 'icon facebook',
      icon: 'icofont icofont-social-facebook',
    },
    {
      iconClass: 'icon twitter',
      icon: 'icofont icofont-social-twitter',
    },
    {
      iconClass: 'icon behance',
      icon: 'icofont icofont-social-behance',
    },
    {
      iconClass: 'icon linkedin',
      icon: 'icofont icofont-social-linkedin',
    },
    {
      iconClass: 'icon youtube',
      icon: 'icofont icofont-social-youtube',
    },
    {
      iconClass: 'icon instagram',
      icon: 'icofont icofont-social-instagram',
    },
  ];

  // Video Popup
  isOpen = false;
  openPopup(): void {
    this.isOpen = true;
  }
  closePopup(): void {
    this.isOpen = false;
  }
}
