import React from "react"

const Footer = () => {
  return (
    <>
      <footer>
        <p className="text-black">
          This portfolio was loosely conceptualized with{" "}
          <a
            className="text-gray-500"
            href="https://figma.com"
            target="_blank"
            rel="noreferrer"
          >
            Figma
          </a>{" "}
          and coded using{" "}
          <a
            className="text-gray-500"
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visual Studio Code
          </a>
          . Built with{" "}
          <a
            className="text-gray-500"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a
            className="text-gray-500"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </footer>
    </>
  )
}

export default Footer
