import moment from "moment";
import React from "react";
import CustomLink from "../../CustomLink";

import classes from "./RecentBlog.module.css";

const index = ({ blog }) => {
  const { title, slug, createdAt } = blog.attributes;

  return (
    <CustomLink href={`/blogs/${slug}`} className={classes.recentBlog}>
      <div>
        <h4>{title.length <= 65 ? title : title.substring(0, 65) + ".."}</h4>
        <span>{moment(createdAt).format("MMM Do YY")}</span>
      </div>
    </CustomLink>
  );
};

export default index;
