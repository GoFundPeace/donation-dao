import blogImage1 from "../assets/images/blog/blog-1-1.jpg";
import blogImage2 from "../assets/images/blog/blog-1-2.jpg";
import blogImage3 from "../assets/images/blog/blog-1-3.jpg";

export const blogData = [
  {
    id: "donating",
    image: blogImage1,
    title: "Donating",
    text: "Learn how to donate",
    link: "https://t.me/GoFundPeaceBot",
    author: "Daniel Marquez",
    extraClassName: "background-base",
    icon: "gfp-icon-charity",
  },
  {
    id: "voting",
    image: blogImage2,
    title: "Voting",
    text: "Learn how to vote",
    link: "https://t.me/GoFundPeaceBot",
    author: "Daniel Marquez",
    extraClassName: "background-primary",
    icon: "gfp-icon-email1",
  },
  {
    id: "hiw",
    image: blogImage3,
    title: "How It Works",
    text: "Learn about the project",
    link: "https://t.me/GoFundPeaceBot",
    author: "Daniel Marquez",
    extraClassName: "background-secondary",
    icon: "gfp-icon-reading-book",
  },
];

export const blogs = {
  donating: {
    title: "Donating",
    crumb: "Donating"
  },

  voting: {

  },

  hiw: {

  }
}