import React, { useState } from "react"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import itsame from "../images/itsame.jpg"

const About = () => {
  const [showBadge, setShowBadge] = useState(false)

  const palette = [
    "#2173B5",
    "#987A70",
    "#0F3380",
    "#22223D",
    "#664D63",
    "#1D2561",
    "#7D7076",
    "#0E4D92",
    "#014895",
    "#111318",
  ]
  return (
    <>
      <div className="about-cont">
        <h1 className="about-h1" style={{ fontSize: "7vh" }}>
          <span className="about-lg-text" style={{ color: "#AFA195" }}>
            <AutoAwesomeIcon
              className="about-svg"
              style={{ fontSize: "6vh", paddingBottom: "1vh" }}
            />{" "}
            I'm Morgan,
          </span>{" "}
          <span className="about-md-text" style={{ fontSize: "4vh" }}>
            {" "}
            a frontend developer in Austin, Texas
          </span>
        </h1>
        <div className="for-ipad-layout flex" style={{ justifyContent: "end" }}>
          <div
            className="flex"
            style={{
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* <p style={{ fontSize: "2.75vh", marginBottom: "1vh" }}>
              My interest lies in creating interesting, user-centric interfaces.
            </p> */}
            <p
              className="about-sm-text"
              style={{ fontSize: "2.1vh", marginBottom: "1vh" }}
            >
              <span style={{ paddingLeft: "2vw" }}>
                I was first introduced to coding in my CS Fundamentals class
                during my second year of college— I finished with a C.
              </span>{" "}
              Five years later I attended both Codeup and LEARN Academy's full
              stack web development bootcamps. Despite Codeup's closure midway
              through the course, my time at LEARN Academy reinforced my skills
              in frontend languages like HTML, CSS, JavaScript, and React. If I
              went back now, I'd like to think I could make at least a B in CS
              Fundamentals.
            </p>
            <p className="about-sm-text" style={{ fontSize: "2.1vh" }}>
              <span style={{ paddingLeft: "2vw" }}>
                Outside work, I enjoy friendly games of chess (add me on
                chess.com @smorgannicole), any spectator sport, live music,
                discovering the magic of the world with my partner, and spending
                quality time with my animals.
              </span>{" "}
            </p>
          </div>
          <img
            className="me"
            src={itsame}
            alt="Morgan in front of a blue sculpture"
            onMouseEnter={() => setShowBadge(true)}
            onMouseLeave={() => setShowBadge(false)}
          />
          {showBadge && (
            <span
              className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 location-badge"
              onMouseEnter={() => setShowBadge(true)}
            >
              Miami, Florida
            </span>
          )}
        </div>
        <div className="flex about-palette">
          {palette.map((color, index) => (
            <div
              key={index}
              style={{
                backgroundColor: color,
                height: "2vh",
                width: "5.5vw",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
