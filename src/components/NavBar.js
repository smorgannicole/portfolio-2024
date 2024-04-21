import React from "react"

const NavBar = () => {
  return (
    <>
      <div className="nav-elements bg-none">
        <div className="flex mb-5 mt-6">
          <a href="/">
            <span className="text-3xl">
              Morgan
              <br />
              Smith
            </span>
          </a>
        </div>
        <nav>
          <ul className="flex flex-col gap-1">
            <CustomLink href="/">Projects</CustomLink>
            <CustomLink href="/About">About</CustomLink>
            <CustomLink href="/Contact">Contact</CustomLink>
          </ul>
        </nav>
      </div>
    </>
  )
}

const CustomLink = ({ href, children }) => {
  const path = window.location.pathname
  const isActive = path === href || (href === "/Home" && path === "/")
  return (
    <>
      <li className={isActive ? "active" : ""}>
        <a href={href}>
          <span className="nav-links">{children}</span>
          {isActive && <span> ✤</span>}
        </a>
      </li>
    </>
  )
}

export default NavBar
