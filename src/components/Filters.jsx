import "../styles/filters.css";

const Filters = ({ filters, setFilters }) => {

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFilters({
      ...filters,
      [name]:
        type === "checkbox"
            ? checked
            : name === "stipend"
            ? Number(value)
            : value,
    });
  };

  const clearFilters = () => {
    setFilters({
      profile: "",
      location: "",
      workFromHome: false,
      partTime: false,
      stipend: 0,
    });
  };

  return (
    <div className="filters">

      <h2>Filters</h2>

      <div className="filter-group">

        <label>Profile</label>

        <input
          type="text"
          placeholder="e.g. Marketing"
          name="profile"
          value={filters.profile}
          onChange={handleChange}
        />

      </div>

      <div className="filter-group">

        <label>Location</label>

        <input
          type="text"
          placeholder="e.g. Delhi"
          name="location"
          value={filters.location}
          onChange={handleChange}
        />

      </div>

      <div className="checkbox-group">

        <label>
          <input
            type="checkbox"
            name="workFromHome"
            checked={filters.workFromHome}
            onChange={handleChange}
          />

          Work from home
        </label>

        <label>
          <input
            type="checkbox"
            name="partTime"
            checked={filters.partTime}
            onChange={handleChange}
          />

          Part-time
        </label>

      </div>

      <div className="filter-group">

        <label>
          Desired minimum monthly stipend
        </label>

        <input
          type="range"
          min="0"
          max="10000"
          step="2000"
          name="stipend"
          value={filters.stipend}
          onChange={handleChange}
        />

        <div className="stipend-values">

          <span>0</span>
          <span>2K</span>
          <span>4K</span>
          <span>6K</span>
          <span>8K</span>
          <span>10K</span>

        </div>

      </div>

      <button
        className="clear-btn"
        onClick={clearFilters}
      >
        Clear all
      </button>

    </div>
  );
};

export default Filters;