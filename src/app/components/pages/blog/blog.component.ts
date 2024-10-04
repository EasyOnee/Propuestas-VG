import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  //Blogs
  blogs = [
    {
      img: "post-01.jpg",
      title: "How the Slow Clothing Movement Could Save You Money",
      date: "July 04, 2023",
      comment: "35 Comments",
      time: "8 Minutes",
    },
    {
      img: "post-02.jpg",
      title: "This App Aims to Make Life a Little Easier for Plus-Size People",
      date: "April 19, 2024",
      comment: "4k Comments",
      time: "Just Now",
    },
    {
      img: "post-03.jpg",
      title: "20 Things You Can Do Right Now to Feel Less Overwhelmed",
      date: "Febuary 13, 2024",
      comment: "10 Comments",
      time: "One Month",
    },
    {
      img: "post-04.jpg",
      title: "How These Different Book Covers Reflect the Design",
      date: "January 15, 2023",
      comment: "5 Comments",
      time: "5 Minutes",
    },
    {
      img: "post-05.jpg",
      title: "8 Colorful Toys Designed to Spark the Imagination",
      date: "April 19, 2024",
      comment: "22 Comments",
      time: "Just Now",
    },
    {
      img: "post-06.jpg",
      title: "User Experience Design is one of the most rapidly developing",
      date: "Febuary 13, 2024",
      comment: "1k Comments",
      time: "One Month",
    },
  ]
}
