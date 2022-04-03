import { useState } from "react";

import Image from "next/image";
import classes from "./Pagination.module.css";

const Index = () => {
  const [activePage, setActivePage] = useState(1);

  const pages = [1, 2, 3, 4, 5];

  const prev = () => {
    if (activePage <= 1) return setActivePage(1);
    setActivePage((state) => state - 1);
  };

  const next = () => {
    if (activePage >= pages.length) return setActivePage(pages.length);
    setActivePage((state) => state + 1);
  };

  return (
    <div className={classes.pagination}>
      <div className={classes.container}>
        <button className={classes.page} onClick={prev}>
          <Image
            src={"/icons/arrow-left.svg"}
            alt="left"
            height={22}
            width={22}
            objectFit={"contain"}
          />
        </button>
        {pages.map((page, idx) => (
          <button
            key={idx}
            className={
              activePage === page
                ? classes.page + " " + classes.active
                : classes.page
            }
            onClick={() => setActivePage(page)}
          >
            <span>{page}</span>
          </button>
        ))}
        <button className={classes.page} onClick={next}>
          <Image
            src={"/icons/arrow-right.svg"}
            alt="left"
            height={22}
            width={22}
            objectFit={"contain"}
          />
        </button>
      </div>
    </div>
  );
};

export default Index;
