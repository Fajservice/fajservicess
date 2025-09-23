import React, { useState } from 'react';
import './css/career.css';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobPositions = [
    {
      title: "UI / UX Designer",
      shortDescription: "We are looking for a creative and versatile UI/UX Designer to join our team.",
      description: `We are looking for a creative and versatile UI/UX Designer to join our team. The ideal candidate will design intuitive and engaging user interfaces for our digital products. You will collaborate with cross-functional teams to deliver designs and improve user experience.

## Key Responsibilities
 Conduct user research, competitive analysis, and usability testing.
 Create wireframes, prototypes, and high-fidelity UI designs for web and mobile applications.
 Collaborate with developers to ensure design feasibility and quality.
 Develop and maintain design systems, style guides, and UX documentation.
 Optimize existing user interfaces based on user feedback and data.

## Requirements
 Bachelor's degree in Graphic Design, Visual Communication, Multimedia, or related field (preferred).
 2+ years of experience in UI/UX design and video editing
 Proficiency in design tools (Figma, Adobe XD, Sketch, etc.).
 Strong understanding of user-centered design principles.
 Experience creating motion graphics and animations is a plus.
 Excellent communication and collaboration skills.
 Strong attention to detail and ability to manage time effectively.

## Preferred Skills
 Knowledge of HTML/CSS is a plus.
 Familiarity with 3D animation or advanced motion graphics.
 Experience with social media video formats and trends.
 Ability to work in a fast-paced environment and adapt to changing priorities.`
    },
    {
      title: "Sales Executive for E-commerce Inquiries (Female)",
      shortDescription: "We require an Operations Assistant Sales / Purchase Department job in Islamabad Capital Territory, Pakistan",
      description: `The Operations Assistant will report to designated PRM staff and provide logistic support and other tasks as assigned. The Assistant shall work in collaboration with other designated operational assistants to provide smooth operational services.

## Key Responsibilities
 Attends inbound and makes outbound calls, WhatsApp chat / Online chat etc.. responds
 Registers and follows up customers' inquiries or complaint/s
 Prepares quotations/estimates, invoices to customers
 Prepares weekly reports on power retailers
 Handles our products / spare parts inquiries and customers' registration via chat or emails.
 Ensures all field teams address customers' complaint/s and requests
 Develops customer feedback system to ensure customer satisfaction
 Sends daily and monthly reports to the manager
 Performs other related clerical, admin and sales jobs

## Requirements
 Bachelor's degree in any field, from a recognized university.
 Preferred Age of 28-35
 Minimum 3 years of relevant experience, preferably working in an international or corporate organization.
 Strong planning and organizing skills to handle operational assistance tasks under the given timelines.
 Proficiency in computers, especially Word, Excel, CRM and Outlook.
 Effective writing and communication skills in English.`
    },
    {
      title: "Video Editor and Graphic Designer",
      shortDescription: "Join FAJ Group as a creative professional handling video editing and graphic design for social media platforms.",
      description: `FAJ Group, based in Dubai, UAE, was founded in 2010 as a small company focused on technical services and equipment sales. We have since grown into a dynamic organisation with over four subsidiaries in two sectors: International Training Academy and IT solutions.

## Key Responsibilities
 Edit high-quality, attention-grabbing videos optimised for platforms like Instagram, TikTok, Facebook, LinkedIn, and YouTube
 Cut, trim, and assemble raw footage into compelling short-form and long-form video content
 Add motion graphics, text overlays, subtitles, music, and sound effects to enhance viewer engagement
 Repurpose long-form videos into shorter clips for reels, stories, and ads
 Stay up to date with trending video styles, transitions, and formats that perform well on social media
 Design visually appealing static and animated graphics for use in social media posts, ads, and stories

## Requirements
 Intermediate ICS, and Bachelor Degree or related field
 1+ years of experience in Graphics Designing
 Should be proficient in at least one professional editing suite and basic motion design
 Tools like Final Cut Pro, CapCut, Canva Pro, etc.
 Adobe Premiere Pro, After Effects, Photoshop, Illustrator`
    },
    {
      title: "Google Ads and Social Media Specialist and Internship",
      shortDescription: "We're seeking an experienced Social Media Ads Manager to lead our social media advertising efforts.",
      description: `We are looking for a dynamic and results-driven Google Ads and Social Media Specialist to join our marketing team. The ideal candidate will be responsible for creating, managing, and optimizing advertising campaigns across Google Ads and various social media platforms.

## Key Responsibilities
 Develop and execute social media advertising strategies
 Manage Meta Ads campaigns (Facebook, Instagram)
 Create engaging ad content and optimize ad performance
 Analyze ad metrics and provide insights for improvement
 Collaborate with teams to align social media with business goals
 Stay up-to-date with industry trends and best practices

## Requirements
 2+ year of experience in social media advertising and google ads
 Proven expertise in Meta Ads and social media management
 Strong analytical and problem-solving skills
 Excellent communication and collaboration skills
 Bachelor's degree in Marketing or related field`
    },
    {
      title: "Front Desk Receptionist and Admin Assistant (Female)",
      shortDescription: "We are looking for a Sales Executive who is passionate about education and skilled in customer communication.",
      description: `We are seeking a professional and friendly Front Desk Receptionist and Admin Assistant to be the first point of contact for our organization. The ideal candidate will provide excellent customer service, manage administrative tasks, and support daily office operations efficiently.

## Key Responsibilities
 Both indoor and outdoor marketing play vital roles in an effective marketing strategy
 Identifying and nurturing leads from a variety of sources, such as online platforms and referrals
 Presenting the academy's programs and services to prospective students and their families
 Achieving and exceeding set sales goals and KPIs
 Delivering outstanding customer service during the sales and enrollment process

## Requirements
 Bachelor's degree in Business Administration, Communications, or related field
 2+ years of experience in reception, administration, or customer service
 Excellent ability to build rapport, present information effectively, and handle inquiries
 Proven experience in sales, preferably within the education or training industry
 Experience with CRM systems, email marketing platforms, and other relevant tools`
    },
    {
      title: "Secretary to Senior Manager (Female)",
      shortDescription: "We are looking for a highly organised, proactive, and detail-oriented Secretary to Senior Manager to provide high-level administrative support to senior executives.",
      description: `We are seeking a highly organized, proactive, and detail-oriented Secretary to Senior Manager to provide comprehensive administrative support to our senior leadership team.

## Key Responsibilities
 Manage the executive's calendar, schedule meetings, appointments, and travel arrangements
 Screen and manage all incoming and outgoing communications, including phone calls, emails, the operations team tasks and correspondence
 Draft, proofread, and format internal and external documents, reports, and presentations
 Organize and maintain files, records, and databases with confidentiality
 Coordinate logistics for board meetings, conferences, and corporate events
 Liaise between the executive and other staff members, clients, and business partners

## Requirements
 Proven experience (3+ years) as an Executive Secretary, Executive Assistant, or similar role
 Bachelor's degree in Business Administration, Communications, or related field
 Proficiency in MS Office (Word, Excel, PowerPoint, Outlook)
 Excellent verbal and written communication skills
 Strong organizational, multitasking, and time-management abilities
 Fluent in English and Urdu`
    },
    {
      title: "Junior SEO, SEO Executive, SEO Executive, Link Builder and Internship",
      shortDescription: "The ideal candidate will have a strong grasp of current Google algorithms, with particular expertise in on-page SEO and link-building strategies.",
      description: `We are seeking a motivated and detail-oriented Junior SEO Executive and Link Builder to join our digital marketing team. The ideal candidate will have a strong grasp of current Google algorithms, with particular expertise in on-page SEO and link-building strategies.

## Key Responsibilities
 Contribute to developing the link building to improve our SEO and search engine ranking
 Identify and acquire backlink opportunities to increase website traffic
 Collaborate with other SEO and marketing team members to ensure the consistency of our online marketing efforts
 Interact with outside vendors to build backlinks to our website and implement our link building strategy
 Conduct online research, interpret, and use the obtained data and results
 Find new link opportunities by using the latest search techniques and conducting a competitor backlink analysis

## Requirements
 Candidates should have 1 to 2 years of SEO experience, with 2 to 3 years preferred
 Bachelor's degree in Marketing, Communications, Advertising, Business is preferred
 1+ years of experience in SEO, Digital Marketing field
 Proven experience of implementing backlink campaigns
 Working knowledge of Google Analytics and backlink tools, such as SEMrush, Ahrefs, Monitor Backlinks, and Buzz Stream
 Strong analytical, communication, and problem-solving skills`
    },
    {
      title: "Creative Content Writer / Copywriter (Female Only)",
      shortDescription: "We are seeking a talented and creative Content Writer/Copywriter to join our dynamic marketing team.",
      description: `We are seeking a talented and creative Content Writer/Copywriter to join our dynamic marketing team. The ideal candidate will have a passion for storytelling, excellent writing skills, and the ability to create compelling content that engages our target audience across various digital platforms.

## Key Responsibilities
 Write engaging and persuasive product descriptions, creative slogans, and catchy captions tailored for social media
 Craft creative, informative, and SEO-optimized blog content for websites and other platforms
 Contribute fresh ideas while staying up-to-date with industry and content trends
 Ensure accuracy, clarity, and consistency in every piece of content
 Deliver high-quality work on tight deadlines while pushing creative boundaries
 Collaborate closely with design, marketing, and product teams to bring campaigns to life

## Requirements
 Bachelor's degree in Marketing, Communications, Advertising, English, Journalism or IT field
 1-3 years of experience in content writing, copywriting, or digital marketing
 Strong analytical, communication, and problem-solving skills
 Excellent command of written English with impeccable grammar and spelling
 Portfolio demonstrating diverse writing samples and creative content`
    },
    {
      title: "Marketing and Referral Outreach Coordinator (Middle East and U.S. Market)",
      shortDescription: "We are looking for a driven and dynamic Marketing and Referral Outreach Coordinator to expand our presence in Middle East and U.S. markets.",
      description: `We are seeking a driven and dynamic Marketing and Referral Outreach Coordinator to focus on Middle East and U.S. markets. This role combines strategic business development, relationship building, and innovative marketing approaches to drive growth in international markets.

## Key Responsibilities
 Identify, research, and connect with potential clients through LinkedIn, Upwork, Fiverr, cold outreach, email marketing, social media, and other channels
 Develop and execute creative, unique outreach strategies to attract new clients and strengthen the brand's market presence
 Focus on brand-building initiatives that foster long-term relationships and repeat business
 Generate high-quality leads and set up meetings for the executive team
 Demonstrate proven results in converting leads into clients through innovative sales tactics and campaigns
 Develop and maintain a strong pipeline, ensuring consistent follow-up and relationship management

## Requirements
 Minimum 2+ years of proven experience in business development, ideally within a digital marketing agency or related B2B environment
 Demonstrated track record of generating business through platforms like Upwork, Fiverr, cold outreach, and other channels
 Excellent communication, negotiation, and presentation skills in spoken and written English
 Strong understanding of digital marketing services and the ability to pitch clear value propositions
 Experience working with international clients, particularly in Middle East and U.S. markets`
    }
  ];

  const handleReadMore = (index) => {
    if (index < jobPositions.length) {
      setSelectedJob(jobPositions[index]);
    } else {
      console.error(`Job at index ${index} not found`);
    }
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
  };

  const JobDetailsView = ({ job }) => (
    <div className="career-container">
      <div className="back-button-container">
        <button className="back-button" onClick={handleBackToJobs}>
          ← Back to All Positions
        </button>
      </div>
      
      <div className="job-details-content">
        <h1 className="job-details-title">{job.title}</h1>
        
        <div className="job-description">
          {job.description.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="job-section-heading">{paragraph.replace('## ', '')}</h2>;
            } else if (paragraph.startsWith('- ')) {
              return <li key={index} className="job-list-item">{paragraph.replace('- ', '')}</li>;
            } else if (paragraph.trim() !== '') {
              return <p key={index} className="job-paragraph">{paragraph}</p>;
            }
            return null;
          })}
        </div>
        
        <div className="apply-section">
          <button className="apply-button">
            <a href="https://w.app/fajitsolutions">Apply Now</a>
          </button>
        </div>
      </div>
    </div>
  );

  if (selectedJob) {
    return <JobDetailsView job={selectedJob} />;
  }

  // Main jobssssssssssssssssss
  return (
    <div className="career-container">
      <h1 className="job-main-title">Job Opening Apply Now</h1>
      
      <div className="services-grid">
        {jobPositions.map((service, index) => (
          <div 
            key={index} 
            className="job-service-card"
          >
            <h3 className="job-service-title">{service.title}</h3>
            <p className="job-service-description">{service.shortDescription}</p>
            <button 
              className="read-more-btn"
              onClick={() => handleReadMore(index)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;