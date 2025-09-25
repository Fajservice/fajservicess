import React, { useState } from 'react';
import './css/career.css';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobPositions = [
    {
      title: "AC Technician, Appliances and Commercial Equipment Technician",
      shortDescription: "We are seeking a technician with a minimum of 3-5 years of experience in commercial and domestic environments.",
      description: `## Job description:
        FAJ Group, located in Dubai, UAE, began in 2010 as a small, major, equipments technical services and sales trading company. Today, we have evolved into a dynamic organization with over four subsidiaries operating in two main sectors.
        We have experienced significant growth in areas such as trading (including e-commerce), technical services, and a variety of appliances and electronics.
        Company Name: F A J Technical Services LLC
        Al Quoz Ind Area 4th, Dubai, UAE
        Link: https://www.fajservices.ae/ac-repair-dubai/
        Location: https://maps.app.goo.gl/FK6Qrd8DAkEVwA3P6
        Send CV by WhatsApp: +971 50 609 7717 (Don't Call)

## Job Requirements:

    We are seeking a technician with a minimum of 3-5 years of experience in commercial and domestic environments.
    The ideal candidate will have expertise in air conditioners, refrigeration systems, household /home appliances, and coffee machines. Responsibilities include the maintenance, repair, and installation of all types of air conditioners (AC), refrigeration equipment, commericial appliances.The technician must be able to troubleshoot, repair, replace parts, provide maintenance services, quickly diagnose faults, and perform installations.
    Should have strong knowledge of maintenance, and repair service of:
    - Chiller FCUs, VRV, VRF, ducted split ACs, cassette-type ACs, package ACs, and wall-mounted split ACs,. Cs are all included.
    - Responsibilities will involve complete electrical wiring, compressor installation, gas welding, threading, and nitrogen flushing. Skills in ducting, electrical brazing, and chiller FCU installation will be advantageous.
    - Additionally, knowledge of industrial refrigerators, chillers, deep freezers, and home appliances such as washing machines, dishwashers, dryers, and refrigerators, as well as other electronic equipment, is essential.

## Responsibilities and Duties

    Will be a leader of a team of 2-3 members of a mobile unit.
    Manage multiple complaints and solve them at the same point.
    Covering many complaints at different sites all over Dubai.
    Managing our AMC sites with regular servicing and making of ppm reports.
    Quick decision making.
    Dealing with customers and attending their queries.
    Generating invoices on the site etc.
    Qualifications and Skills
    Diploma/Certificate in relevant field.
    Job Types: Full-time, Contract
    Pay: AED 2,300.00 - AED3,500.00 per month
    Job Types: Full-time, Permanent, Contract
    Job Type: Full-time
    Work Location: In person
    Job Types: Full-time, Contract`
    },
    {
      title: "Technician Coffee Machines, Espresso Machine and Appliances Repair Job",
      shortDescription: "We are seeking a skilled Coffee Machine Technician with expertise in commercial and home equipment.",
      description: `## Company Overview:
FAJ Group, based in Dubai, UAE, started in 2010 as a small technical services and sales trading house. Today, we are a dynamic organisation with over four companies operating in two main sectors. We have experienced significant growth in areas such as trading (including e-commerce), technical services, and various appliances and electronics.
Location: Al Quoz Industrial Area 4, Dubai
WhatsApp Chat Only: +971506097717
Job Opportunities: Coffee Machines Technician
We are seeking a skilled Coffee Machine Technician with expertise in commercial and home equipment.
The ideal candidate should have 3-5 years of experience in descaling, cleaning, maintenance, repair, and installation of coffee machines.
Strong troubleshooting and diagnostic skills are essential.
Responsibilities and Duties: Inspect coffee machines to identify faults or issues.
## Duties:
1. Installation coffee machines, Descaling and Maintenance
2. Check and repair coffee machines at customer premises and in the workshop.
3. Conduct preventive maintenance and calibration services.
4. Respond to breakdown call-outs.
5. Perform duties effectively to avoid repeat repairs and complete tasks promptly to enhance overall outlet performance.
6. Conduct demonstrations on servicing techniques for all coffee machine brands.
7. Prepare endorsement reports related to tasks performed and client queries for the Sales department.
8. Ensure monthly productivity targets are achieved to minimise outstanding customer calls.
9. Maintain a professional and courteous demeanour with all clients.
10. Provide comprehensive training to clients on machine operation and maintenance protocols.
11. Complete other tasks as assigned by the supervisor.
If you meet these qualifications and are passionate about providing exceptional service, we would love to hear from you.
Diagnose electrical, mechanical, and other problems.
Repair or replace defective parts to restore functionality.
Communicate with customers to understand their issues and provide clear information regarding repairs or maintenance needs.
Advise customers on proper care and maintenance of their coffee machines.
Ensure all tools and equipment used in the workshop are in good working condition.
Follow all relevant safety protocols when working with electrical components and coffee machines.
Manage multiple complaints and resolve them promptly.
Cover various complaints across different sites throughout Dubai. Oversee our AMC sites with regular servicing and create PPM reports. Make quick decisions and address customer queries effectively. - Generate invoices on-site.

## Qualifications and Skills:

Diploma/Certificate in a relevant field. - Minimum of 3 years’ experience with coffee machines.
Ability to work effectively as part of a team and independently.
Highly organised with strong problem-solving abilities.
Goal-orientated and committed to achieving business objectives.
Ability to thrive under pressure.
Job Types: - Full-time, Permanent -
Job Types: Full-time, Contract
Contract length: 24 months`
    },
    {
      title: "Air Conditioning ( AC ) Technician",
      shortDescription: "We are seeking a technician with a minimum of 3-5 years of experience in commercial and domestic environments.",
      description: `FAJ Group, located in Dubai, UAE, began in 2010 as a small, major, equipments technical services and sales trading company. Today, we have evolved into a dynamic organization with over four subsidiaries operating in two main sectors.
We have experienced significant growth in areas such as trading (including e-commerce), technical services, and a variety of appliances and electronics.
Company Name: F A J Technical Services LLC
Al Quoz Ind Area 4th, Dubai, UAE
Link.: https://www.fajservices.ae/ac-repair-dubai/
Location..: https://maps.app.goo.gl/FK6Qrd8DAkEVwA3P6
Send CV by WhatsApp: +971 50 609 7717 (Don't Call)
## Job Requirements:
We are seeking a technician with a minimum of 3-5 years of experience in commercial and domestic environments.
The ideal candidate will have expertise in air conditioners, refrigeration systems, household /home appliances, and coffee machines. Responsibilities include the maintenance, repair, and installation of all types of air conditioners (AC), refrigeration equipment, commericial appliances.The technician must be able to troubleshoot, repair, replace parts, provide maintenance services, quickly diagnose faults, and perform installations.
Should have strong knowledge of maintenance, and repair service of:
Chiller FCUs, VRV, VRF, ducted split ACs, cassette-type ACs, package ACs, and wall-mounted split ACs,. Cs are all included.
Responsibilities will involve complete electrical wiring, compressor installation, gas welding, threading, and nitrogen flushing. Skills in ducting, electrical brazing, and chiller FCU installation will be advantageous.
Additionally, knowledge of industrial refrigerators, chillers, deep freezers, and home appliances such as washing machines, dishwashers, dryers, and refrigerators, as well as other electronic equipment, is essential.
## Responsibilities and Duties
Will be a leader of a team of 2-3 members of a mobile unit.
Manage multiple complaints and solve them at the same point.
Covering many complaints at different sites all over Dubai.
Managing our AMC sites with regular servicing and making of ppm reports.
Quick decision making.
Dealing with customers and attending their queries.
Generating invoices on the site etc.
## Qualifications and Skills
Diploma/Certificate in relevant field.
Job Types: Full-time, Contract
Job Type: Full-time`
    },
    {
      title: "Large and Small Appliances, and Kitchen Equipment Technician Job",
      shortDescription: "We are seeking a technician with a minimum of 3-5 years of experience in commercial and domestic environments.",
      description: `We have experienced significant growth in areas such as trading (including e-commerce), technical services, and a variety of appliances and electronics.
Company Name: F A J Technical Services LLC
Al Quoz Ind Area 4th, Dubai, UAE
Link.: https://www.fajservices.ae/ac-repair-dubai/
Location..: https://maps.app.goo.gl/FK6Qrd8DAkEVwA3P6
Send CV by WhatsApp: +971 50 609 7717 (Don't Call)
## Job Requirements:
We are seeking a technician with a minimum of 3-5 years of experience in commercial and domestic environments.
The ideal candidate will have expertise in air conditioners, refrigeration systems, household /home appliances, and coffee machines. Responsibilities include the maintenance, repair, and installation of all types of air conditioners (AC), refrigeration equipment, commericial appliances.The technician must be able to troubleshoot, repair, replace parts, provide maintenance services, quickly diagnose faults, and perform installations.
Should have strong knowledge of maintenance, and repair service of:
Chiller FCUs, VRV, VRF, ducted split ACs, cassette-type ACs, package ACs, and wall-mounted split ACs,. Cs are all included.
Responsibilities will involve complete electrical wiring, compressor installation, gas welding, threading, and nitrogen flushing. Skills in ducting, electrical brazing, and chiller FCU installation will be advantageous.
Additionally, knowledge of industrial refrigerators, chillers, deep freezers, and home appliances such as washing machines, dishwashers, dryers, and refrigerators, as well as other electronic equipment, is essential.
## Responsibilities and Duties
Install new kitchen and refrigeration equipment and systems when required.
Performs service and mechanical repairs on all commercial kitchen equipment and appliances; perform all repairs, maintenance replacement of parts for preventive maintenance schedule and accurately record all pertinent data.
Maintains, service and repair of refrigeration units, walk-in refrigerators and freezers.
Ensure that equipment is in safe operating condition.
Knowledge of repairing and maintenance of of kitchen and refrigeration equipment such as walk-in freezers, industrial-sized steam cookers, refrigerators, ice machines, washers, ovens, dryers, dishwashers, and water coolers
Carry out installation of new equipment and change defective parts
Experience in soldering and blazing skills for refrigeration maintenance works / installation of compressors
Stand Mixer, Vacuum Cleaner, Robotic Vacuum, Ice maker, Mixers, Blender, Juicer, Steam Iron, Repair, Fixing and PCB Repair
Ability to optimize the PPM operation to avoid down time
Will be a leader of a team of 2-3 members of a mobile unit.
Manage multiple complaints and solve them at the same point.
Covering many complaints at different sites all over Dubai.
Managing our AMC sites with regular servicing and making of ppm reports.
Quick decision making.
Dealing with customers and attending their queries.
Generating invoices on the site etc.
## Qualifications and Skills
Diploma/Certificate in relevant field.
Job Types: Full-time, Contract
Job Types: Full-time, Contract`
    },
    {
      title: "Front Desk and Sales Representative Job",
      shortDescription: "FAJ Group, based in Dubai, UAE, started in 2010 as a small technical services and sales trading house.",
      description: `FAJ Group, based in Dubai, UAE, started in 2010 as a small technical services and sales trading house. Today, we are a dynamic organisation with over four companies operating in two main sectors. We have experienced significant growth in areas such as trading (including e-commerce), technical services, and various appliances and electronics.
Company Name: F A J Technical Services LLC
Al Quoz Ind Area 4th, Dubai, UAE
Send CV by WhatsApp: +971 50 609 7717 (Don't Call)
## Job Responsibilities:
- Greet and assist visitors and customers in finding services/products that meet their needs in a professional and friendly manner.
- Answer phone calls, emails, and direct enquiries to appropriate departments.
- Explain product features, benefits, and pricing.
- Schedule appointments and maintain front desk records
- Handle customer inquiries, feedback, and complaints professionally.
- Support administrative tasks and assist other departments as needed.
## Skills Required:
- Excellent communication, interpersonal and persuasive selling skills.
- Professional appearance and attitude.
- Good organizational and multitasking abilities.
- Ability to work in a team and handle a fast-paced environment.
- Dependable, motivated, and goal-driven.
- Customer service-oriented mindset.
- 1 or 2 years working experience in receptionist or customer service role.
Job Types: Full-time, Contract
Contract length: 24 months
Pay: AED 2500 - AED 3200 per month
## Ability to commute/relocate:
Dubai: Reliably commute or planning to relocate before starting work (Required)
Job Types: Full-time, Permanent, Contract`
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
            <a href="https://api.whatsapp.com/send?phone=+971506097717">Apply Now</a>
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