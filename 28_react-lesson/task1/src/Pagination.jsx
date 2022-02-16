import React from 'react';

// input: pageNumber, prevHandler, nextHandler
// output: jsx

const Pagination = ({ pageNumber, prev, next, usersCount, itemsPerPage }) => {
  const isPrevBtnDisabled = pageNumber === 1;
  const isNextBtnDisabled = pageNumber === Math.ceil(usersCount / itemsPerPage);

  return (
    <div className="pagination">
      <button className="btn" onClick={prev} disabled={isPrevBtnDisabled}>
        {!isPrevBtnDisabled && '←'}
      </button>
      <span className="pagination__page">{pageNumber}</span>
      <button className="btn" onClick={next} disabled={isNextBtnDisabled}>
        {!isNextBtnDisabled && '→'}
      </button>
    </div>
  );
};

export default Pagination;
