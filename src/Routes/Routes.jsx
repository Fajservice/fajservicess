import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import ServicesPage from "../Pages/ServicesPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
          path: "/about",
          element: <AboutPage></AboutPage>,
      },
      {
        path: "/service",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/service/service-details",
        element: <ServiceDetailsPage></ServiceDetailsPage>,
      }, 
      {
        path: "/project",
        element: <ProjectPage></ProjectPage>,
      },      
      {
        path: "/project/project-details",
        element: <ProjectDetailsPage></ProjectDetailsPage>,
      },
      {
        path: "/team",
        element: <TeamPage></TeamPage>,
      },
      {
        path: "/team/team-details",
        element: <TeamDetailsPage></TeamDetailsPage>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/blog-details",
        element: <BlogDetailsPage></BlogDetailsPage>,
      },        
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  }, 
  {
    path: 'home2',
    element: <Layout2></Layout2>,
    children: [
      {
        index: true,
        element: <Home2></Home2>,
      },                           
    ],
  }        
], {
  basename: "/fajservicess"
});