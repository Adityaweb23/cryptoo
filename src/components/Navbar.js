import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";
const Navbar = () => {
  const { query, setQuery,user } = useGlobalContext();
  return (
    <>

    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong sticky-top">
      <div className="container-fluid">
        <NavLink style={{ color: "gold" }} className="navbar-brand" to="/">
          C ₹ Y P T O
        </NavLink>
        <form
          className="d-flex input-group w-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            className="form-control rounded  bg-dark text-white"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span
            className="input-group-text border-none bg-dark"
            id="search-addon"
          >
            <i className="fas fa-search text-white"></i>
          </span>
        </form>
        {/* model added */}
      </div>
    </nav>
    {user ? <UserSidebar/> : <AuthModal />}

    </>
  );
};

export default Navbar;