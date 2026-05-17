import "../styles/pagination.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {

  const pages = [...Array(totalPages).keys()];

  return (
    <div className="pagination">

      <button
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
      >
        Previous
      </button>

      {pages.map((page) => (

        <button
          key={page}
          className={
            currentPage === page + 1
              ? "active"
              : ""
          }
          onClick={() =>
            setCurrentPage(page + 1)
          }
        >
          {page + 1}
        </button>

      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;