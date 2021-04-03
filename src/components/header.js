import * as React from "react"
import PropTypes, { node } from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.5rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `90%`,
        padding: `1rem`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <StaticImage
        src="../images/gatsby-icon.png"
        width={70}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Candy Sweet logo"
        style={{
          marginRight: "1.5rem",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h5
          style={{
            margin: 0,
            color: "white",
            textDecoration: "none",
          }}
        >
          Candy Sweet endulza tu vida
        </h5>
      </div>
    </div>
    <hr></hr>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: "0.1rem 1rem",
        maxWidth: "90%",
        margin: "0 auto",
      }}
    >
      <p style={{ color: "white" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Inicio
        </Link>{" "}
        &bull;{" "}
        <Link
          to="/blog"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Blog
        </Link>{" "}
        &bull;{" "}
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
          Acerca de
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
