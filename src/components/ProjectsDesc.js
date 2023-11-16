import {
  nprj1,
  nprj2,
  nprj3,
  nprj4,
  nprj5,
  nprj6,
  nprj7,
  nprj8,
  nprj9,
  nprj10,
  nprj11,
  pf1,
  pf2,
  pf3,
  pf4,
  pf5,
  pf6,
  pf7,
  pf8,
  pf9,
  pf10,
  pf11,
  pf12,
  pf13,
  pdir1,
  pdir2,
  pdir3,
  pdir4,
  pdir5,
  pdir6,
  pdir7,
  pdir8,
  pdir9,
  tw1,
  tw2,
  tw3,
  tw5,
  tw4,
  tw6,
  tw7,
  tw8,
  mf1,
  mf3,
  mf4,
  mf2,
  mf5,
  tio1,
  tio2,
  tio3,
  tio4,
  tio5,
  tio7,
  tio6,
  tio8,
  fr1,
  fr2,
  fr3,
  fr4,
  fr5,
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
} from "../assets/Img/images";

export const projects = [
  {
    project_name: "Task IO",
    technologies: ["MERN", "SASS", , "Firebase"],
    other_techs: ["JWT authorization", "G-Search Engine API"],
    description: `
    TASK IO
    November 2023
    I successfully developed TaskIO, a comprehensive MERN stack project, in a remarkable two-week timeframe. TaskIO excels in task management, capturing details like title, description, and completion date. The integration of Google APIs enables efficient text search through associated URLs. The project seamlessly handles task operations with robust functionalities for updating, deleting, and creating tasks. Leveraging Firebase storage, TaskIO adeptly manages user profile pictures. The user experience is elevated with a visually appealing UI/UX design. Notably, the system incorporates advanced filtering options, allowing users to categorize tasks based on completion status (completed or incomplete) and priority (important or not important). TaskIO stands as a testament to rapid, effective development with a focus on functionality and aesthetics.
    - Using Firebase Storage for profile images was an excellent choice for media content in my web application. It proved itself very much effective performance, security, and URL generation for TASKIO.
    - Json Web Tokens are used for authentication and authorization purposes in TaskIO. It is a compact, URL-safe means of representing claims to be transferred between two parties. JWTs are typically used to securely registering user.
    - For better state management and global data sharing, Context API's are handled through out the project in TaskIO itself.
    HOSTING DOMAIN: 'https://mr-task8.netlify.app'
    `,
    git_link: "https://github.com/harshit-8118/taskio",
    project_imgs: [tio1, tio2, tio3, tio4, tio5, tio6, tio7, tio8],
  },
  {
    project_name: "Face Recognizer",
    technologies: ["Python", "openCV"],
    other_techs: ["haar-cascade classifier"],
    description: `
    The FACE-RECOGNIZER ( Machine Learning project ) is an advanced facial recognition system that leverages the power of OpenCV with Haar-Cascade for precise face detection and employs the K-Nearest Neighbors algorithm for accurate face recognition. The system operates through a meticulous two-phase process. In the training phase, the model is equipped with a dataset of labeled faces. This involves extracting intricate facial features and training a robust KNN model, enabling it to discern subtle nuances in facial characteristics. The detection phase showcases the model's prowess as it associates detected faces with corresponding names and gender labels. This innovative approach ensures a high level of accuracy in identifying individuals, making it a versatile solution for security, surveillance, and various applications where reliable face recognition is paramount. The integration of Haar-Cascade for detection and K-Nearest Neighbors for recognition establishes a comprehensive and efficient facial recognition system.
    `,
    git_link: "https://github.com/harshit-8118/FaceRecognizer",
    project_imgs: [fr1, fr2, fr3, fr4, fr5],
  },
  {
    project_name: "Movie Recommendation",
    technologies: ["Python"],
    other_techs: ["MovieLens-100k dataset"],
    description: `
    The "Movie Recommendation" project, developed using Python, introduces an intelligent system for suggesting movies based on user preferences. The core technology leveraged in this project is collaborative filtering, a powerful approach that enhances accuracy by considering the viewing history of similar users. The project relies on the MovieLens-100k dataset, a well-known and widely used benchmark in recommendation system research.
    By tapping into the dataset's extensive collection of user ratings, the system can discern patterns and relationships between different movies, effectively tailoring recommendations to individual tastes. The Python programming language, with its versatility and extensive libraries like NumPy and pandas, forms the backbone of this recommendation engine. Whether you're a cinephile seeking new favorites or a developer interested in recommendation systems, the "Movie Recommendation" project offers a practical and insightful implementation that demonstrates the potential of collaborative filtering in delivering personalized movie suggestions.`,
    git_link: "https://github.com/harshit-8118/MovieRecommendation",
    project_imgs: [mr1, mr2, mr3, mr4, mr5],
  },
  {
    project_name: "Movieflixo",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "SASS",
      ,
      "Firebase",
    ],
    other_techs: ["JWT authorization"],
    description: `
    Movieflixo
    Jun 2023 - Jul 2023Jun 2023 - Jul 2023
    Movieflixo | Netflix Clone project is an ambitious web application that replicates the core functionalities of the popular streaming platform Netflix. 
    It has been developed over a span of 1.5 months, this project includes the MERN stack (MongoDB, Express.js, React.js, Node.js), JWT (JSON Web Tokens) for authorization, and Firebase integration. 
    Through this project, I have not only honed my technical skills but also demonstrated my deep understanding of bug resolving and best coding practices. 
    - Using Firebase Storage for image and video links was an excellent choice for hosting and serving media content in my web application. It proved itself very much effective performance, security, and URL generation for movieflixo.
    - Json Web Tokens are used for authentication and authorization purposes in movieflixo. It is a compact, URL-safe means of representing claims to be transferred between two parties. JWTs are typically used to securely registering user.
    - An admin-panel is also developed in same technologies for managing users, movies, movie lists, series, series lists and user-registeration analytics per month.
    - For better state management and global data sharing, Context API's are handled through out the project in movieflixo-admin-panel and movieflixo itself.
    HOSTING DOMAIN: 'https://movieflixo.netlify.app'
    ADMIN-PANEL HOSTING DOMAIN: 'https://movieflixo-admin.netlify.app'
    `,
    git_link: "https://github.com/harshit-8118/Movieflixo",
    project_imgs: [mf1, mf2, mf3, mf4, mf5],
  },
  {
    project_name: "PORTFOLIO",
    technologies: ["React", "Tailwindcss"],
    other_techs: ["html", "css", "javascipt", "jquery"],
    description: `
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
    project_imgs: [
      pf1,
      pf2,
      pf3,
      pf4,
      pf5,
      pf6,
      pf7,
      pf8,
      pf9,
      pf10,
      pf11,
      pf12,
      pf13,
    ],
  },
  {
    project_name: "NEWS SITE",
    technologies: ["PHP", "MySql"],
    other_techs: ["html", "css", "javascript", "bootstrap"],
    description: `
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
    project_imgs: [
      nprj1,
      nprj2,
      nprj3,
      nprj4,
      nprj5,
      nprj6,
      nprj7,
      nprj8,
      nprj9,
      nprj10,
      nprj11,
    ],
  },
  {
    project_name: "TAILWIND CSS",
    technologies: ["Tailwindcss"],
    other_techs: ["javascript", "jquery"],
    description: `
      There are two responsive one page websites designed using Tailwindcss
      I had used Tailwind css for design and Javascript for toggling navbar.
      These two short project helped me using tailwind on next level.
      I had read whole tailwind documentation, It was such a surprise to do the same with ease.
      I had used my knowledge and creativity for designing single page website using tailwind css only.
      a. The facebook login clone was my first handy project with tailwind, I didn't take much time to complete it.
      b. The Microsoft Edge home page, It was challenging at first but this also got completed with in a single day.
      `,
    git_link: "https://github.com/harshit-8118/TailwindCss",
    project_imgs: [tw1, tw2, tw3, tw4, tw5, tw6, tw7, tw8],
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
    project_imgs: [
      pdir1,
      pdir2,
      pdir3,
      pdir4,
      pdir5,
      pdir6,
      pdir7,
      pdir8,
      pdir9,
    ],
  },
];
