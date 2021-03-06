export const projects = [
  {
    title: 'Home Inventory App',
    description: "A full stack inventory application using Firebase as a database. The app is accessed through email and password authentication. The items stored in the database is presented in a nice Material UI table, the headers of which allows sorting. Below is a fully functioning demo to view and try.",
      image: '/images/inventory.png',
      tags: ['React', 'Firebase', 'Material UI'],
    source: 'https://github.com/vhelfrih/inventory',
    visit: 'https://demo-inventory.netlify.app/login',
    id: 0,
  },
  {
    title: 'NASA API',
    description:"Inspired by a wildfire tracker app of Brad Traversy, we can request data from the NASA API and display it on a Google Map. We can select from three nature events to be displayed as icons. By clicking on them, an infobox pops up holding further information on the event and a link.",
    image: '/images/nature_extremes.png',
    tags: ['React', 'API'],
    source: 'https://github.com/vhelfrih/Nature-Extremes',
    visit: 'https://nature-extremes.netlify.app/',
    id: 1,
  },
  {
    title: 'Cat Cafe Landing Page',
    description: "This simple landing page of a cat cafe was created by following the mobile-first rule of responsive webdesign. I adopted the design from CSS-guru Kevin Powell.",
      image: '/images/catcafe001.png',
      tags: ['HTML', 'SCSS'],
    source: 'https://github.com/vhelfrih/catcafe',
    visit: 'https://catcafetokyo.netlify.app/',
    id: 2,
  },
  {
    title: 'Coinprices Tracker',
    description: "This fully responsive cryptocurrencies page allows users to search their favourite coins, check their daily price changes, or sort the available currencies by their daily percentage gains or losses",
    image: '/images/cryptotracker.png',
    tags: ['React'],
    source: 'https://github.com/vhelfrih/cointracker/tree/master',
    visit: 'https://coinpricetracker.netlify.app/',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2015, text: 'With a technical background (telecommunications) and a little experience with HTML, I took a course on Python', },
  { year: 2020, text: 'Turned to web development and took some comprehensive courses on HTML, CSS, Javascript and React', },
  { year: 2021, text: 'Improved my coding skills through building simple projects, and diving deeper into more advanced concepts', },
  { year: 2022, text: 'Working to become better each day, and sharing my projects with the world', },
];