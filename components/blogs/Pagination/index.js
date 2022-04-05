import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./Pagination.module.css";

const Index = ({ page, pages, onPageChange }) => {
  const [activePage, setActivePage] = useState(page);
  const allPages = [...Array(pages).keys()];

  const prev = () => {
    if (activePage <= 1) return setActivePage(1);
    setActivePage((state) => state - 1);
    onPageChange(activePage - 1);
  };

  const next = () => {
    if (activePage >= allPages.length) return setActivePage(allPages.length);
    setActivePage((state) => state + 1);
    onPageChange(activePage + 1);
  };

  const changePage = (val) => {
    if (val === activePage) return;
    setActivePage(val);
    onPageChange(val);
    window.screenTop = 0;
  };

  return (
    <div className={classes.pagination}>
      <div className={classes.container}>
        {activePage !== 1 && (
          <button
            style={{ fontSize: 14 }}
            className={classes.page}
            onClick={prev}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {allPages.map((pageVal, idx) => (
          <button
            key={idx}
            className={
              activePage === pageVal + 1
                ? classes.page + " " + classes.active
                : classes.page
            }
            onClick={() => changePage(pageVal + 1)}
          >
            <span>{pageVal + 1}</span>
          </button>
        ))}
        {activePage !== allPages.length && (
          <button
            style={{ fontSize: 14 }}
            className={classes.page}
            onClick={next}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
