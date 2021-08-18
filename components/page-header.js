import React from "react";
import Link from "next/link";

const PageHeader = (info) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${info.info.image})` }}
      ></div>

      <div className="container">
        <h2>{info.info.title}</h2>
        <ul className="thm-breadcrumb list-unstyled ">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>-</li>
          <li>
            <span>{info.info.crumb}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
