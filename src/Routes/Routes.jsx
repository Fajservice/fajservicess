import {
  createHashRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import AcServiceInDubai from "../Pages/AcServiceInDubai";
import WashingMachineRepairServiceDubai from "../Pages/WashingMachineRepairServiceDubai";
import ServicesPage from "../Pages/ServicesPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createHashRouter([
  {
    
    
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
          path: "/about-us",
          element: <AboutPage></AboutPage>,
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/ac-service-in-dubai",
        element: <AcServiceInDubai></AcServiceInDubai>,
      },
      {
        path: "/washing-machine-repair-service-dubai",
        element: <WashingMachineRepairServiceDubai></WashingMachineRepairServiceDubai>,
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
        path: "/contact-us/",
        element: <ContactPage></ContactPage>,
      },
    ],
    
  }, 
  {
    path: 'about-us',
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <AboutPage></AboutPage>
      },
                           
    ],
    
  },

  {
    path: 'services',
    element: <Layout2></Layout2>,
    children: [
      {
        index: true,
        element: <ServicesPage />
      },
                           
    ],
  }  
], {
  //  basename: "/fajservicess"
});
