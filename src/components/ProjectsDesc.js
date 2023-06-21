import {
  nprj1, nprj2, nprj3, nprj4, nprj5, nprj6, nprj7, nprj8, nprj9, nprj10, nprj11,
  pf1, pf2, pf3, pf4, pf5, pf6, pf7, pf8, pf9, pf10, pf11, pf12, pf13,
pdir1, pdir2, pdir3, pdir4, pdir5, pdir6, pdir7, pdir8, pdir9, 
tw1, tw2, tw3, tw5, tw4, tw6, tw7, tw8, 
} from '../assets/Img/images' 

export const projects = [
    {
      project_name: "NEWS SITE",
      technologies: ["PHP", "MySql"],
      other_techs: ["html", "css", "javascript", "bootstrap"],
      description:
      `
      This was my first project in PHP and MySql.
      I had worked with sql queries and enhanced my learning with joins in databases.
      This project has both client and administrator access.
      For client side - 
      a. News are offered to them getting from database developed in mysql.
      b. Client can watch news of their selected category.
      c. There is of side bar 'recent news', the most rated news are set their.
      d. Client can read full news on clicking 'read more' button.
      e. News post consist of Heading, Category, date_of_origin, description and Creator_name.
      f. Client can also search news of their choice.

      For admin side -
      Project uses admin and creator login according to their role and authorities.
      a. It had user panel where admin and creator works according to their authority.
      b. News post creation, deletion, updation are managed on to their end.
      c. Admin can change the website setting, creator-user and news-content.
      d. Admin and creator has authority to their domain.
      e. Creator has it domain limited to news only.
      `,
      git_link: "https://github.com/harshit-8118/NEWS_PROJECT",
      project_imgs:[  nprj1, nprj2, nprj3, nprj4, nprj5, nprj6, nprj7, nprj8, nprj9, nprj10, nprj11]
    },
    {
      project_name: "PORTFOLIO",
      technologies: ["React", "Tailwindcss"],
      other_techs: ["html", "css", "javascipt", "jquery"],
      description:`
      - It is the website itself in which I used my 'react' learning with lots of fun and techs.
      - I designed each page with Tailwind and used javascript for toggling.
      - I used 'aos' package for animations.
      - This react app project uses 'react-router-dom' package for routing to avoid page reload and fast services.
      - I have set routes and nested routes in this project with outlet.
      - My experience with technologies, and self learning helped me a lot for making this awesome working portfolio.
      - I have tried to avoid code repetition on each edge,
      This project contains sections of my -
      a. skills
      b. projects
      c. achievements
      d. academics
      e. social-media links
      f. About me 
      g. Contact
      h. Resume
      I have increased a lot of knowledge and experience with this project.
      `,
      git_link: "https://github.com/harshit-8118/portfolio",
      project_imgs:[  pf1, pf2, pf3, pf4, pf5, pf6, pf7, pf8, pf9, pf10, pf11, pf12, pf13]
    },
    {
      project_name: "PHONE DIRECTORY",
      technologies: ["C++"],
      other_techs: [],
      description: `
      - This was my academic project based on DATA STRUCTURE..
      - I had used 'TRIE' data structure with 'AVL tree' data structure.
      - The purpose of this project is to maintain phone directory with low space complexity.
      - I had coded it down in C++.

      Working is as follow - 
      a. select an option 's' - search, 'i' - insert, 'd '- delete, 'x'- exit from directory.
      b. If one inserts name if name doesn't already exists it will be saved with number in phone directory.
      c. If one search for name and it exists in phone directory, their contact details will be shown.
      d. If one deletes a contact, it will be removed from phone records and can not be found on next search onwards.
      e. Can exit from this looping operation under phone directory, by pressing 'x'
      `,
      git_link: "https://github.com/harshit-8118/phone-directory",
      project_imgs:[pdir1, pdir2, pdir3, pdir4, pdir5, pdir6, pdir7, pdir8, pdir9]
    },
    {
      project_name: "TAILWIND CSS",
      technologies: ["Tailwindcss"],
      other_techs: ["javascript", "jquery"],
      description:`
      There are two responsive one page websites designed using Tailwindcss
      I had used Tailwind css for design and Javascript for toggling navbar.
      These two short project helped me using tailwind on next level.
      I had read whole tailwind documentation, It was such a surprise to do the same with ease.
      I had used my knowledge and creativity for designing single page website using tailwind css only.
      a. The facebook login clone was my first handy project with tailwind, I didn't take much time to complete it.
      b. The Microsoft Edge home page, It was challenging at first but this also got completed with in a single day.
      `,
      git_link: "https://github.com/harshit-8118/TailwindCss",
      project_imgs:[tw1, tw2, tw3, tw4, tw5, tw6, tw7, tw8]
    },
  ];
