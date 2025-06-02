import React from 'react';
import '../../assets/Timeline.css'; // Separate CSS for styling

const timelineData = [
  {
    title: 'FAJ Technical Services LLC',
    date: '2010',
    // description: 'Enter the description that describes what needs to be done during this phase. It can be an elaborate description of text or a list of activities.',
   
    color: '#3c8dbc',
  },
  {
    title: 'FAJ IT Solutions',
    date: '2023',
    // description: 'This sample text is a list of tests to be done during this phase.\nTest 1\nTest 2\nTest 3',
     color: '#a94442',
  },
  {
    title: 'FAJ International Training Academy Pvt. (Limited)',
    date: '2024',
    // description: 'Be creative with your own ideas and start creating your own infographic outline.',
    color: '#f39c12',
  },
  {
    title: 'FAJ Trading LLC',
    date: '2024',
    // description: 'Celebrate!',
    color: '#605ca8',
  },
];

export default function Timeline() {
  return (
    <div className="timeline-section">
      <div className="timeline-road">
        {timelineData.map((item, idx) => (
          <div key={idx} className={`timeline-marker ${idx % 2 === 0 ? 'top' : 'bottom'}`} >
            <div className="pin" style={{ borderColor: item.color }}>
              <h3 className="pin-date">{item.date}</h3>
            </div>
            <div className="pin-content">
              <h4>{item.title}</h4>
              {/* <p>{item.description.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
