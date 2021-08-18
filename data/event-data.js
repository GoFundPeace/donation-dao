import image1 from "../assets/images/events/Workshop.png";
import image2 from "../assets/images/events/Start.jpeg";
import image3 from "../assets/images/events/Vote.jpg";
import image4 from "../assets/images/events/Report.jpeg";

import eventImage1 from "../assets/images/events/workshop/Picture1.jpg"

export const eventHome = [
  {
    image: image1,
    title: "Workshop",
    date: "13 Aug",
    time: "9:00am 12:00pm GMT-5",
    link: "/event?event=workshop"
  },
  {
    image: image2,
    title: "Start Fundraising",
    date: "20 Aug",
    time: "12:00pm GMT-5",
    link: "/events"
  },
  {
    image: image3,
    title: "Vote",
    date: "TBD",
    time: "12:00pm GMT-5",
    link: "/events"
  },
  {
    image: image4,
    title: "Report",
    date: "TBD",
    time: "12:00pm GMT-5",
    link: "/events"
  }
];

export const events = {
  workshop : {
    title: "Blockchain 101 Workshop",
    crumb: "Workshop",
    heading: "The Future of Fundraising",
    text: [
      `The world is more connected now more than ever. How can can grassroot
      organizations benefit from this? During this three hour workshop, GoFundPeace will be 
      teaching AsCamCat, ASOM, ASOPEP and COOMBUVIPAC what blockhain networks are, 
      and how they can be leveraged for international funding.`
    ],
    image: eventImage1,
    venue: {
      title: "Online",
      date: "August 13th, 2021",
      time: "9:00am - 12:00pm GMT-5"
    },
    organizer: {
      name: "Daniel Marquez",
      organization: "MIT Media Lab's Viral Communications",
      about: `Daniel was born in Colombia and is excited to share his love and 
              knowledge of blockchain networks with grassroot organizations in
              his home country.`,
      email: "dmarquez@mit.edu"
    }
  }
}
