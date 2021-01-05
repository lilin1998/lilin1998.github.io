import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container-fluid_foot">
        <div className="row row-sm">
          &copy; {new Date().getFullYear()} Tan Li Lin | All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
