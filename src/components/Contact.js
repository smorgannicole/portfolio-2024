import React from "react"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const Contact = () => {
  return (
    <>
      <div className="proj-list-cont">
        <div
          className="map-list-cont w-3/4"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            gap: "1vh",
          }}
        >
          <p>
            <a
              className="transition hover"
              href="https://github.com/smorgannicole"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "6vh", fontWeight: 100 }}
            >
              <span style={{ fontSize: "1.75vh", fontWeight: 900 }}>
                github.com/smorgannicole
                <OpenInNewIcon style={{ height: "1.75vh" }} />/{" "}
              </span>
              GitHub
            </a>
          </p>
          <p>
            <a
              className="transition hover"
              href="https://www.linkedin.com/in/morgansmith13/"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "6vh", fontWeight: 100 }}
            >
              <span style={{ fontSize: "1.75vh", fontWeight: 900 }}>
                linkedin.com/in/morgansmith13
                <OpenInNewIcon style={{ height: "1.75vh" }} />/{" "}
              </span>
              LinkedIn
            </a>
          </p>
          <p>
            <a
              className="transition hover"
              href="mailto:smorgannicole@gmail.com?subject=Hi%20Morgan&body=%20I%20just%20wanted%20to%20say..."
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: "6vh", fontWeight: 100 }}
            >
              <span style={{ fontSize: "1.75vh", fontWeight: 900 }}>
                smorgannicole@gmail.com
                <OpenInNewIcon style={{ height: "1.75vh" }} />/{" "}
              </span>
              Email
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact
