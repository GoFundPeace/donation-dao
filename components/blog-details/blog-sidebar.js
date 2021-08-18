import React from "react";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__single">
        <h3>Categories</h3>
        <ul className="list-unstyled blog-sidebar__category">
          <li>
            <a href="#">Charity</a>
          </li>
          <li>
            <a href="#">Fundraising</a>
          </li>
          <li>
            <a href="#">Donations</a>
          </li>
          <li>
            <a href="#">Health</a>
          </li>
          <li>
            <a href="#">Save Lives</a>
          </li>
          <li>
            <a href="#">Clean Water</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
