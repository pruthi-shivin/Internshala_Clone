import "../styles/card.css";

const InternshipCard = ({ internship }) => {

  return (
    <div className="card">

      <div className="actively-hiring">
        Actively Hiring
      </div>

      <div className="card-top">

        <div>

          <h3 className="job-title">
            {internship.title}
          </h3>

          <p className="company-name">
            {internship.company_name}
          </p>

        </div>

      </div>

      <div className="card-details">

        <div>
          <span>📍</span>

          <p>
            {internship.location_names?.join(", ")}
          </p>
        </div>

        <div>
          <span>▶</span>

          <p>
            Starts Immediately
          </p>
        </div>

        <div>
          <span>⏳</span>

          <p>
            {internship.duration}
          </p>
        </div>

        <div>
          <span>💰</span>

          <p>
            {internship.stipend?.salary}
          </p>
        </div>

      </div>

      <div className="tags">

        <span>
          Internship
        </span>

        {internship.work_from_home && (
          <span>
            Work From Home
          </span>
        )}

        {internship.part_time && (
          <span>
            Part Time
          </span>
        )}

      </div>

      <div className="card-bottom">

        <p className="posted">
          Posted recently
        </p>

        <button>
          View Details
        </button>

      </div>

    </div>
  );
};

export default InternshipCard;