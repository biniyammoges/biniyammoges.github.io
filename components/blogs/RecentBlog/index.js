import moment from "moment";
import React from "react";
import CustomLink from "../../CustomLink";

import classes from "./RecentBlog.module.css";

const index = ({ title, imageUrl, date }) => {
  return (
    <CustomLink className={classes.recentBlog}>
      <div>
        <h4>{title}</h4>
        <span>{moment(date).format("MMM Do YY")}</span>
      </div>
    </CustomLink>
  );
};

export default index;
