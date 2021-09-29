import React from "react";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Pet Shelter
          <input type="text" placeholder="Search by category " />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="UserName" />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
