import '../../assets/Timeline.css';

const timelineData = [
  {
    title: 'F A J Technical Services L.L.C',
    date: '2010',
    color: '#3c8dbc',
  },
  {
    title: 'F A J IT Solutions',
    date: '2023',
     color: '#a94442',
  },
  {
    title: 'F A J International Training Academy Pvt. (Limited)',
    date: '2024',
    color: '#f39c12',
  },
  {
    title: 'F A J Trading L.L.C',
    date: '2024',
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
