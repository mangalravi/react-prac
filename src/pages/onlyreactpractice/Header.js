import { useState } from 'react';
import './style.css'

const Header = () => {
  const [parentLi, setParentLi] = useState(null); 

  const parentList = ["Home", "Link", "Dropdown"];
  const childList = [
    null, 
    null, 
    ["ul2li1", "ul2li2", "ul2li3", "ul2li4"],
  ];

  const handleParentClick = (index) => {
    setParentLi(parentLi === index ? null : index); 
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
         >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {parentList.map((item, index) => (
              <li className="nav-item" key={index}>
                {item === "Dropdown" ? (
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                     role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded={parentLi === index ? "true" : "false"}
                    onClick={(e) => {
                      e.preventDefault(); 
                      handleParentClick(index);
                    }}
                  >
                    {item}
                  </a>
                ) : (
                  <button
                    className="nav-link"
                    onClick={() => handleParentClick(index)}
                  >
                    {item}
                  </button>
                )}

                  {parentLi === index && item === "Dropdown" && (
                  <ul className="dropdown-menu show"> 
                    {childList[index]?.map((childItem, childIndex) => (
                      <li key={childIndex}>
                        <a className="dropdown-item" href="#">
                          {childItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

           <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
