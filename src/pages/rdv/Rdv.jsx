import "./Rdv.scss";

const Rdv = () => {
  const rdv = [
    {
      id: 1,
      date: "2023-10-01",
      time: "10:00",
      location: "Paris",
      status: "Confirmé",
    },
    {
      id: 2,
      date: "2023-10-02",
      time: "14:00",
      location: "Lyon",
      status: "En attente",
    },
    {
      id: 3,
      date: "2023-10-03",
      time: "16:00",
      location: "Marseille",
      status: "Refusé",
    },
  ];

  const listRdv = rdv.map((rdv) => {
    const date = new Date(rdv.date);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });

    return (
      <li key={rdv.id} className="rdv-item">
        <div className="rdv-date">
          <span className="day">{day}</span>
          <span className="month">{month}</span>
        </div>
        <div className="rdv-info">
          <p>Heure: {rdv.time}</p>
          <p>Lieu: {rdv.location}</p>
          <p className="status">Status: {rdv.status}</p>
        </div>
      </li>
    );
  });

  return (
    <ul className="rdv-list">
      {listRdv}
    </ul>
  );
};

export default Rdv;