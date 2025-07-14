// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/baseball.jpg";
import Weather from "./images/weather.jpg";
import Realestate from "./images/realestate.jpg";
import Netflix from "./images/netflix.jpg";



/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "apfeif4";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="cib:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="simple-icons:scikitlearn" className="display-4" />,
    name: "Scikitlearn",
  },
  {
    id: 3,
    skill: <Icon icon="devicon-plain:pandas-wordmark" className="display-4" />,
    name: "Pandas",
  },
  {
    id: 4,
    skill: <Icon icon="file-icons:rstudio" className="display-4" />,
    name: "R Studio",
  },
  {
    id: 5,
    skill: <Icon icon="simple-icons:apachesolr" className="display-4" />,
    name: "Solr",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:apachehadoop" className="display-4" />,
    name: "Hadoop",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:apachenifi" className="display-4" />,
    name: "NiFi",
  },
  {
    id: 8,
    skill: <Icon icon="simple-icons:apachehive" className="display-4" />,
    name: "Hive",
  },
  {
    id: 9,
    skill: <Icon icon="simple-icons:apachehbase" className="display-4" />,
    name: "HBase",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:apachespark" className="display-4" />,
    name: "PySpark",
  },
  {
    id: 11,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 12,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["MLB_Analysis", "Weather_Application", "Home_Price_Prediction_For_Texas", "Netflix_Viewership_EDA"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "MLB_Analysis",
    image: Logo,
  },
  {
    name: "Weather_Application",
    image: Weather,
  },
  {
    name: "Home_Price_Prediction_For_Texas",
    image: Realestate,
  },
  {
    name: "Netflix_Viewership_EDA",
    image: Netflix
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xeokwlkp";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
