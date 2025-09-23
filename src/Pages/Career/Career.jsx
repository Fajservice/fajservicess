import React, { useState } from 'react';
import './css/career.css';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobPositions = [
    {
      title: "Technician Coffee Machines, Espresso Machine and Appliances Repair Job",
      shortDescription: "We are seeking a skilled Coffee Machine Technician with expertise in commercial and home equipment.",
      jobDescription: [
        "The ideal candidate should have 3-5 years of experience in descaling, cleaning, maintenance, repair, and installation of coffee machines. Strong troubleshooting and diagnostic skills are essential."
      ],
      keyResponsibilities: [
        "1. Installation coffee machines, Descaling and Maintenance",
        "2. Check and repair coffee machines at customer premises and in the workshop.",
        "3. Conduct preventive maintenance and calibration services.",
        "4. Respond to breakdown call-outs.",
        "5. Perform duties effectively to avoid repeat repairs and complete tasks promptly to enhance overall outlet performance.",
        "6. Conduct demonstrations on servicing techniques for all coffee machine brands.",
        "7. Prepare endorsement reports related to tasks performed and client queries for the Sales department.",
        "8. Ensure monthly productivity targets are achieved to minimise outstanding customer calls.",
        "9. Maintain a professional and courteous demeanour with all clients.",
        "10. Provide comprehensive training to clients on machine operation and maintenance protocols.",
        "11. Complete other tasks as assigned by the supervisor.",
      ],
      requirements: [
        "Bachelor's degree in Graphic Design, Visual Communication, Multimedia, or related field (preferred).",
        "2+ years of experience in UI/UX design and video editing",
        "Proficiency in design tools (Figma, Adobe XD, Sketch, etc.).",
        "Strong understanding of user-centered design principles.",
        "Experience creating motion graphics and animations is a plus.",
        "Excellent communication and collaboration skills.",
        "Strong attention to detail and ability to manage time effectively."
      ],
      PreferredSkills: [
        "Knowledge of HTML/CSS is a plus.",
        "Familiarity with 3D animation or advanced motion graphics.",
        "Experience with social media video formats and trends.",
        "Ability to work in a fast-paced environment and adapt to changing priorities.",
      ],
      jobDetails: {
        channel: "UI / UX Designer",
        industry: "Media and Information Technology",
        functionalArea: "Designing",
        totalPositions: "1 Posts",
        jobShift: "Day Shift",
        jobType: "Contract",
        jobLocation: "Islamabad, Pakistan",
        gender: "Male/Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Medium Level",
        experience: "1 Years",
        applyBefore: "Oct 20, 2025",
        postingDate: "Sep 12, 2025"
      }
    },
    {
      title: "Sales Executive for E-commerce Inquiries (Female)",
      shortDescription: "We require an Operations Assistant Sales / Purchase Department job in Islamabad Capital Territory, Pakistan",
      jobDescription: [
        "The Operations Assistant will report to designated PRM staff and provide logistic support and other tasks as assigned. The Assistant shall work in collaboration with other designated operational assistants to provide smooth operational services.",
        "Strong planning and organizing skills to handle operational assistance tasks under the given timelines.",
        "Proficiency in computers, especially Word, Excel, CRM and Outlook.",
        "Effective writing and communication skills in English.",
      ],
      keyResponsibilities: [
        "Attends inbound and makes outbound calls, WhatsApp chat / Online chat etc.. responds",
        "Registers and follows up customers' inquiries or complaint/s",
        "Prepares quotations/estimates, invoices to customers",
        "Prepares weekly reports on power retailers",
        "Handles our products / spare parts inquiries and customers' registration via chat or emails.",
        "Ensures all field teams address customers' complaint/s and requests",
        "Develops customer feedback system to ensure customer satisfaction",
        "Sends daily and monthly reports to the manager",
        "Performs other related clerical, admin and sales jobs",
        "Addresses customers' queries",
        "Prepares Statement of Accounts of various parties and follows up",
        "Coordinate with teams",
        "Handles prospective clients and provides counseling",
        "Handles clients in a professional manner",
        "Deals with customer issues",
        "Processes customer orders",
        "Keeps up to date with product developments",
        "Calls clientele",
        "Devise new sales or marketing strategies",
        "Works with other departments",
        "Schedules appointments, calls and meetings"
      ],
      requirements: [
        "Bachelor's degree in any field, from a recognized university.",
        "Preferred Age of 28-35",
        "Minimum 3 years of relevant experience, preferably working in an international or corporate organization.",
        "Strong planning and organizing skills to handle operational assistance tasks under the given timelines.",
        "Proficiency in computers, especially Word, Excel, CRM and Outlook.",
        "Effective writing and communication skills in English."
      ],
      PreferredSkills: [
        "Sales and Communication",
      ],
      jobDetails: {
        channel: "Sales Department(F A J Trading L.L.C)",
        industry: "Ecommerce",
        functionalArea: "Sales",
        totalPositions: "1 Post",
        jobShift: "Day Shift",
        jobType: "Contract",
        jobLocation: "Islamabad, Pakistan",
        gender: "Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Mid-Level",
        experience: "1 Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Video Editor and Graphic Designer",
      shortDescription: "Join FAJ Group as a creative professional handling video editing and graphic design for social media platforms.",
      jobDescription: [
        "FAJ Group, based in Dubai, UAE, was founded in 2010 as a small company focused on technical services and equipment sales. We have since grown into a dynamic organisation with over four subsidiaries in two sectors: International Training Academy and IT solutions. Our growth spans trading (including e-commerce), technical services, and various appliances and electronics."
      ],
      keyResponsibilities: [
        "Edit high-quality, attention-grabbing videos optimised for platforms like Instagram, TikTok, Facebook, LinkedIn, and YouTube",
        "Cut, trim, and assemble raw footage into compelling short-form and long-form video content",
        "Add motion graphics, text overlays, subtitles, music, and sound effects to enhance viewer engagement",
        "Repurpose long-form videos into shorter clips for reels, stories, and ads",
        "Stay up to date with trending video styles, transitions, and formats that perform well on social media",
        "Design visually appealing static and animated graphics for use in social media posts, ads, and stories",
        "Create on-brand thumbnails, banners, and digital marketing materials",
        "Develop branded templates for consistent content creation",
        "Work closely with the marketing team to understand campaign goals and translate ideas into visuals",
        "Collaborate with content creators, marketers, and copywriters to align visuals with messaging",
        "Maintain an organized digital asset library for video clips, graphics, templates, and design files",
        "Manage multiple projects simultaneously while meeting deadlines",
        "Ensure all content adheres to brand guidelines and voice"
      ],
      requirements: [
        "Intermediate ICS, and Bachelor Degree or related field",
        "1+ years of experience in Graphics Designing",
        "Should be proficient in at least one professional editing suite and basic motion design",
        "Tools like Final Cut Pro, CapCut, Canva Pro, etc.",
        "Adobe Premiere Pro, After Effects, Photoshop, Illustrator"
      ],
      PreferredSkills: [
        "Photoshop, Illustrator, Adobe Premier Pro",
      ],
      jobDetails: {
        channel: "Graphic Designing",
        industry: "Information Technology / Ecommerce",
        functionalArea: "IT",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Contract",
        jobLocation: "Islamabad - Pakistan",
        gender: "Male/Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Medium Level",
        experience: "1 Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Google Ads and Social Media Specialist and Internship",
      shortDescription: "We're seeking an experienced Social Media Ads Manager to lead our social media advertising efforts.",
      jobDescription: [
        "We are looking for a dynamic and results-driven Google Ads and Social Media Specialist to join our marketing team. The ideal candidate will be responsible for creating, managing, and optimizing advertising campaigns across Google Ads and various social media platforms to drive brand awareness, engagement, and conversions."
      ],
      keyResponsibilities: [
        "Develop and execute social media advertising strategies",
        "Manage Meta Ads campaigns (Facebook, Instagram)",
        "Create engaging ad content and optimize ad performance",
        "Analyze ad metrics and provide insights for improvement",
        "Collaborate with teams to align social media with business goals",
        "Stay up-to-date with industry trends and best practices",
      ],
      requirements: [
        "2+ year of experience in social media advertising and google ads",
        "Proven expertise in Meta Ads and social media management",
        "Strong analytical and problem-solving skills",
        "Excellent communication and collaboration skills",
        "Bachelor's degree in Marketing or related field"
      ],
      PreferredSkills: [
        "Meta Ads, Marketing Strategies",
      ],
      jobDetails: {
        channel: "Google Ads and Social Media",
        industry: "Advertisement",
        functionalArea: "Marketing",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Contract",
        jobLocation: "Islamabad - Pakistan",
        gender: "Male/Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Medium Level",
        experience: "2+ Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Front Desk Receptionist and Admin Assistant (Female)",
      shortDescription: "We are looking for a Sales Executive who is passionate about education and skilled in customer communication.",
      jobDescription: [
        "We are seeking a professional and friendly Front Desk Receptionist and Admin Assistant to be the first point of contact for our organization. The ideal candidate will provide excellent customer service, manage administrative tasks, and support daily office operations efficiently."
      ],
      keyResponsibilities: [
        "Both indoor and outdoor marketing play vital roles in an effective marketing strategy, as they target consumers in different contexts, ensuring that brands can reach their audience through multiple channels and touchpoints.",
        "Identifying and nurturing leads from a variety of sources, such as online platforms and referrals.",
        "Presenting the academy's programs and services to prospective students and their families, guiding them through the enrollment process, and finalizing their registrations for outdoor clients such as school management, colleges, and other sectors related to our courses.",
        "Achieving and exceeding set sales goals and KPIs.",
        "Delivering outstanding customer service during the sales and enrollment process.",
      ],
      requirements: [
        "Bachelor's degree in Business Administration, Communications, or related field",
        "2+ years of experience in reception, administration, or customer service",
        "Excellent ability to build rapport, present information effectively, and handle inquiries.",
        "Proven experience in sales, preferably within the education or training industry.",
        "Ability to address concerns and find solutions for prospective students and their parents.",
        "Managing multiple leads, prioritising tasks, and maintaining accurate records.",
        "Experience with CRM systems, email marketing platforms, and other relevant tools."
      ],
      PreferredSkills: [
        "Communication Skills, Meeting potential students and their families, Recruitment Agencies: Contact agencies specializing in education or sales placements.",
      ],
      jobDetails: {
        channel: "Administration",
        industry: "Education",
        functionalArea: "Administration",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Contract",
        jobLocation: "Islamabad - Pakistan",
        gender: "Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Medium Level",
        experience: "2+ Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Secretary to Senior Manager (Female)",
      shortDescription: "We are looking for a highly organised, proactive, and detail-oriented Secretary to Senior Manager to provide high-level administrative support to senior executives.",
      jobDescription: [
        "We are seeking a highly organized, proactive, and detail-oriented Secretary to Senior Manager to provide comprehensive administrative support to our senior leadership team. The ideal candidate will be a trusted professional who can handle confidential information, manage complex schedules, and facilitate smooth communication across all organizational levels."
      ],
      keyResponsibilities: [
        "Manage the executive's calendar, schedule meetings, appointments, and travel arrangements.",
        "Screen and manage all incoming and outgoing communications, including phone calls, emails, the operations team tasks and correspondence.",
        "Draft, proofread, and format internal and external documents, reports, and presentations.",
        "Organize and maintain files, records, and databases with confidentiality.",
        "Coordinate logistics for board meetings, conferences, and corporate events.",
        "Liaise between the executive and other staff members, clients, and business partners.",
        "Take accurate minutes of meetings and follow up on action items.",
        "Handle sensitive information with the highest level of discretion.",
        "Assist with research and preparation of reports or documents as requested.",
        "Manage office supplies, expense reports, and basic budget tracking."
      ],
      requirements: [
        "Proven experience (3+ years) as an Executive Secretary, Executive Assistant, or similar role.",
        "Bachelor's degree in Business Administration, Communications, or related field",
        "Proficiency in MS Office (Word, Excel, PowerPoint, Outlook).",
        "Excellent verbal and written communication skills.",
        "Strong organizational, multitasking, and time-management abilities.",
        "Ability to handle confidential information with integrity and professionalism.",
        "Fluent in English and Urdu."
      ],
      PreferredSkills: [
        "Experience working in a fast-paced corporate environment",
        "Knowledge of document management and office procedures",
        "Strong interpersonal skills and customer service mindset",
        "Prior experience as a Personal or Private Secretary is a plus",
        "Well-organized with attention to detail",
        "Energetic, enthusiastic, and polished personality"
      ],
      jobDetails: {
        channel: "Administration",
        industry: "Corporate Services",
        functionalArea: "Administration",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Full-time",
        jobLocation: "Islamabad - Pakistan",
        gender: "Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Medium Level",
        experience: "3+ Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Junior SEO, SEO Executive, SEO Executive, Link Builder and Internship",
      shortDescription: "The ideal candidate will have a strong grasp of current Google algorithms, with particular expertise in on-page SEO and link-building strategies.",
      jobDescription: [
        "We are seeking a motivated and detail-oriented Junior SEO Executive and Link Builder to join our digital marketing team. The ideal candidate will have a strong grasp of current Google algorithms, with particular expertise in on-page SEO and link-building strategies. This role offers an excellent opportunity for professional growth in the rapidly evolving field of search engine optimization."
      ],
      keyResponsibilities: [
        "Contribute to developing the link building to improve our SEO and search engine ranking",
        "Identify and acquire backlink opportunities to increase website traffic",
        "Collaborate with other SEO and marketing team members to ensure the consistency of our online marketing efforts",
        "Interact with outside vendors to build backlinks to our website and implement our link building strategy",
        "Conduct online research, interpret, and use the obtained data and results",
        "Find new link opportunities by using the latest search techniques and conducting a competitor backlink analysis",
        "Contact bloggers to interest them in our brand and provide reliable backlinks",
        "Build and maintain healthy links by keeping track of a backlink profile",
      ],
      requirements: [
        "Candidates should have 1 to 2 years of SEO experience, with 2 to 3 years preferred as a Search Engine Optimisation Specialist.",
        "Bachelor's degree in Marketing, Communications, Advertising, Business is preferred",
        "1+ years of experience in SEO, Digital Marketing field",
        "Proven experience of implementing backlink campaigns",
        "Working knowledge of Google Analytics and backlink tools, such as SEMrush, Ahrefs, Monitor Backlinks, and Buzz Stream",
        "Strong analytical, communication, and problem-solving skills"
      ],
      PreferredSkills: [
        "Research, SEO Writing, Backlinking, On-Page SEO, Off-Page SEO"
      ],
      jobDetails: {
        channel: "SEO",
        industry: "Digital Marketing",
        functionalArea: "SEO/SEM",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Contract",
        jobLocation: "Islamabad - Pakistan",
        gender: "Male/Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Junior Level",
        experience: "1-2 Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Creative Content Writer / Copywriter (Female Only)",
      shortDescription: "We are seeking a talented and creative Content Writer/Copywriter to join our dynamic marketing team.",
      jobDescription: [
        "We are seeking a talented and creative Content Writer/Copywriter to join our dynamic marketing team. The ideal candidate will have a passion for storytelling, excellent writing skills, and the ability to create compelling content that engages our target audience across various digital platforms. This role requires creativity, attention to detail, and the ability to adapt writing style to different brand voices and marketing objectives."
      ],
      keyResponsibilities: [
        "Write engaging and persuasive product descriptions, creative slogans, and catchy captions tailored for social media.",
        "Craft creative, informative, and SEO-optimized blog content for websites and other platforms.",
        "Contribute fresh ideas while staying up-to-date with industry and content trends.",
        "Ensure accuracy, clarity, and consistency in every piece of content.",
        "Deliver high-quality work on tight deadlines while pushing creative boundaries",
        "Collaborate closely with design, marketing, and product teams to bring campaigns to life.",
        "Develop content strategies that align with brand goals and target audience preferences",
        "Edit and proofread content to ensure error-free and polished final deliverables"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, Advertising, English, Journalism or IT field",
        "1-3 years of experience in content writing, copywriting, or digital marketing",
        "Strong analytical, communication, and problem-solving skills",
        "Excellent command of written English with impeccable grammar and spelling",
        "Portfolio demonstrating diverse writing samples and creative content"
      ],
      PreferredSkills: [
        "Excellent command of written English",
        "Strong copywriting and content writing capabilities",
        "Creative thinking and knowledge of SEO and digital content trends",
        "Ability to multitask and work in a fast-paced environment",
        "Social media content creation experience"
      ],
      jobDetails: {
        channel: "Content Writing",
        industry: "Digital Marketing",
        functionalArea: "Content Marketing",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Contract",
        jobLocation: "Islamabad - Pakistan",
        gender: "Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Junior to Medium Level",
        experience: "1-3 Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    },
    {
      title: "Marketing and Referral Outreach Coordinator (Middle East and U.S. Market)",
      shortDescription: "We are looking for a driven and dynamic Marketing and Referral Outreach Coordinator to expand our presence in Middle East and U.S. markets.",
      jobDescription: [
        "We are seeking a driven and dynamic Marketing and Referral Outreach Coordinator to focus on Middle East and U.S. markets. This role combines strategic business development, relationship building, and innovative marketing approaches to drive growth in international markets. The ideal candidate will have strong communication skills, cultural awareness, and proven experience in B2B sales and marketing."
      ],
      keyResponsibilities: [
        "Identify, research, and connect with potential clients through LinkedIn, Upwork, Fiverr, cold outreach, email marketing, social media, and other channels.",
        "Develop and execute creative, unique outreach strategies to attract new clients and strengthen the brand's market presence.",
        "Focus on brand-building initiatives that foster long-term relationships and repeat business.",
        "Generate high-quality leads and set up meetings for the executive team.",
        "Demonstrate proven results in converting leads into clients through innovative sales tactics and campaigns.",
        "Develop and maintain a strong pipeline, ensuring consistent follow-up and relationship management.",
        "Achieve and exceed monthly targets for outreach, meetings booked, and deals closed.",
        "Work closely with internal teams to align messaging, proposals, and delivery.",
        "Track activities, update CRM records, and report on progress regularly.",
        "Stay up to date with industry trends and best practices in digital sales and marketing.",
        "Develop and Manage B2B Relationships: Build strong, long-lasting relationships with key corporate clients, partners, and stakeholders.",
        "Business Development: Research and identify new B2B opportunities within the corporate sector.",
        "Client Needs Assessment: Understand the specific needs of corporate clients by conducting consultations and creating customized proposals.",
        "Project Management & Coordination: Oversee planning, coordination, and execution by liaising between clients, vendors, and internal teams.",
        "Negotiate Contracts & Pricing: Lead negotiations for contracts, pricing, and service agreements with corporate clients.",
        "Sales Reporting and Analytics: Track and report on sales performance, client acquisition, and business growth.",
        "Marketing & Promotion: Collaborate with the marketing team to design and implement strategies for promoting B2B services."
      ],
      requirements: [
        "Minimum 2+ years of proven experience in business development, ideally within a digital marketing agency or related B2B environment",
        "Demonstrated track record of generating business through platforms like Upwork, Fiverr, cold outreach, and other channels",
        "Excellent communication, negotiation, and presentation skills in spoken and written English",
        "Strong understanding of digital marketing services and the ability to pitch clear value propositions",
        "Tech-savvy, well-organized, and adaptable to using CRM systems, outreach software, and productivity tools",
        "Ability to build trust-based, long-term client relationships and nurture repeat business",
        "Experience working with international clients, particularly in Middle East and U.S. markets"
      ],
      PreferredSkills: [
        "International market experience",
        "Multi-cultural communication skills",
        "Advanced CRM and sales automation tools",
        "Social media marketing expertise",
        "Lead generation and conversion optimization"
      ],
      jobDetails: {
        channel: "Sales / Marketing",
        industry: "Digital Marketing",
        functionalArea: "Business Development",
        totalPositions: "1 Posts",
        jobShift: "Day",
        jobType: "Full-time",
        jobLocation: "Islamabad - Pakistan",
        gender: "Male/Female",
        minimumEducation: "Bachelor's Degree",
        careerLevel: "Medium to Senior Level",
        experience: "2+ Years",
        applyBefore: "Oct 25, 2025",
        postingDate: "Sep 13, 2025"
      }
    }
  ];

  // Fixed handleReadMore function to show actual job data
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

  // Job Details Template Component
  const JobDetailsTemplate = ({ job }) => (
    <div className="apply-now-container">
      <div className="apply-now-content">
        <div className="back-button-container">
          <button className="back-button" onClick={handleBackToJobs}>
            ← Back to All Positions
          </button>
        </div>
        
        <h1 className="page-title">{job.title}</h1>
        
        <div className="content-grid">
          <div className="main-content">
            {/* Job Description */}
            <section className="content-section">
              <h2 className="section-heading">Job Description</h2>
              <div className="section-content">
                {job.jobDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Key Responsibilities */}
            <section className="content-section">
              <h2 className="section-heading">Key Responsibilities</h2>
              <div className="section-content">
                <ul>
                  {job.keyResponsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Requirements */}
            <section className="content-section">
              <h2 className="section-heading">Requirements</h2>
              <div className="section-content">
                <ul>
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Preferred Skills */}
            <section className="content-section">
              <h2 className="section-heading">Preferred Skills</h2>
              <div className="section-content">
                <ul>
                  {job.PreferredSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Experience */}
            <section className="content-section">
              <h2 className="section-heading">Experience Required</h2>
              <div className="section-content">
                <p>We require candidates with {job.jobDetails.experience.toLowerCase()} of relevant experience in the specified field. The ideal candidate should have a proven track record in the mentioned domain and be ready to contribute effectively to our team.</p>
              </div>
            </section>
          </div>

          {/* Sidebar with Job Details */}
          <div className="sidebar">
            <section className="details-section">
              <h2 className="section-heading">Job Details</h2>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Job Channel:</span>
                  <span className="detail-value">{job.jobDetails.channel}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Industry:</span>
                  <span className="detail-value">{job.jobDetails.industry}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Functional Area:</span>
                  <span className="detail-value">{job.jobDetails.functionalArea}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Total Positions:</span>
                  <span className="detail-value">{job.jobDetails.totalPositions}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Job Shift:</span>
                  <span className="detail-value">{job.jobDetails.jobShift}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Job Type:</span>
                  <span className="detail-value">{job.jobDetails.jobType}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Job Location:</span>
                  <span className="detail-value">{job.jobDetails.jobLocation}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Gender:</span>
                  <span className="detail-value">{job.jobDetails.gender}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Minimum Education:</span>
                  <span className="detail-value">{job.jobDetails.minimumEducation}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Career Level:</span>
                  <span className="detail-value">{job.jobDetails.careerLevel}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Experience:</span>
                  <span className="detail-value">{job.jobDetails.experience}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Apply Before:</span>
                  <span className="detail-value important-date">{job.jobDetails.applyBefore}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Posting Date:</span>
                  <span className="detail-value">{job.jobDetails.postingDate}</span>
                </div>
              </div>
              
              <button className="apply-button">
                <a href="https://api.whatsapp.com/send?phone=+971506097717"> Apply Now</a>
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedJob) {
    return <JobDetailsTemplate job={selectedJob} />;
  }

  // Main job listings grid
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