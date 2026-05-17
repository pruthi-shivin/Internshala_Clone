import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import InternshipCard from "../components/InternshipCard";
import Pagination from "../components/Pagination";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

import "../styles/home.css";

const Home = () => {

  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const internshipsPerPage = 5;

  const [darkMode, setDarkMode] = useState(false);

  const [filters, setFilters] = useState({
    profile: "",
    location: "",
    workFromHome: false,
    partTime: false,
    stipend: 0,
  });

  const fetchInternships = async () => {

    try {

      const response = await axios.get(
        "https://internshala.com/hiring/search"
      );

      const internshipsArray = Object.values(
        response.data.internships_meta
      );

      setInternships(internshipsArray);

      setLoading(false);

    } catch (error) {

      console.log(error);
      setLoading(false);

    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  useEffect(() => {

    if (darkMode) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }

    }, [darkMode]);

  const getFilteredInternships = () => {

    let updated = [...internships];

    if (filters.profile) {

      updated = updated.filter((item) =>
        item.title
          ?.toLowerCase()
          .includes(filters.profile.toLowerCase())
      );
    }

    if (filters.location) {

      updated = updated.filter((item) =>
        item.location_names
          ?.join(" ")
          .toLowerCase()
          .includes(filters.location.toLowerCase())
      );
    }

    if (filters.workFromHome) {

      updated = updated.filter(
        (item) => item.work_from_home === true
      );
    }

    if (filters.partTime) {

      updated = updated.filter(
        (item) => item.part_time === true
      );
    }

    if (filters.stipend > 0) {

      updated = updated.filter((item) => {

        const salaryText =
          item.stipend?.salary || "";

        const cleanedSalary =
          salaryText.replace(/,/g, "");

        const match =
          cleanedSalary.match(/\d+/);

        if (!match) return false;

        const stipendValue =
          Number(match[0]);

        return stipendValue >= filters.stipend;
      });
    }

    return updated;
  };

  const filteredData =
    getFilteredInternships();

  const totalPages = Math.ceil(
    filteredData.length / internshipsPerPage
  );

  const startIndex =
    (currentPage - 1) * internshipsPerPage;

  const endIndex =
    startIndex + internshipsPerPage;

  const currentInternships =
    filteredData.slice(startIndex, endIndex);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />

      <div className="home-container">

        <div className="left-section">

          <Filters
            filters={filters}
            setFilters={setFilters}
          />

        </div>

        <div className="right-section">

          <h2 className="internship-count">
            {filteredData.length} internships
          </h2>

          {loading ? (

            <p>Loading...</p>

          ) : currentInternships.length > 0 ? (

            currentInternships.map((internship) => (

              <InternshipCard
                key={internship.id}
                internship={internship}
              />

            ))

          ) : (

            <p>No internships found.</p>

          )}

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />

          <Testimonials />
          
          <FAQ />

        </div>

      </div>
    </>
  );
};

export default Home;