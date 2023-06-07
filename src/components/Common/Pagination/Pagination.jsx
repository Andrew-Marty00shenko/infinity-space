import ReactPaginate from "react-paginate";
import useBreakpoint from "../../../hooks/useBreakpoints";

import "./Pagination.scss";

const Pagination = ({
  pagesCount = 10,
  setSkip = 1,
  limit = 10,
  total = 80,
}) => {
  const breakpoint = useBreakpoint();

  const handlePageClick = (event) => {
    setSkip((event.selected * limit) % total);
  };

  return (
    <div className="pagination-page">
      <ReactPaginate
        breakLabel="..."
        containerClassName="pagination"
        nextLabel={
          <div>
            {breakpoint === "0" ? "" : "Next"}

            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.83325 10L17.1666 10M17.1666 10L12.1666 5M17.1666 10L12.1666 15"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        }
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        pageCount={pagesCount}
        previousLabel={
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 10L3.33342 10M3.33342 10L8.33341 15M3.33342 10L8.33342 5"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {breakpoint === "0" ? "" : "Previous"}
          </div>
        }
        renderOnZeroPageCount={() => null}
      />
    </div>
  );
};

export default Pagination;
