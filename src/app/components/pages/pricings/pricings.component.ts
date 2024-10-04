import { Component } from '@angular/core';

@Component({
  selector: 'app-pricings',
  templateUrl: './pricings.component.html',
  styleUrl: './pricings.component.css'
})
export class PricingsComponent {
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


  // Pricing Two
  pricingTwo = [
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
}
