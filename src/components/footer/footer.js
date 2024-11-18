import React from "react"
import "./footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedinIn,
  faBehance,
} from "@fortawesome/free-brands-svg-icons"
import { socialMedia } from "../../config"

export default function Footer() {
  const socialIcon = (socialName) => {
    switch (socialName) {
      case "GitHub":
        return <FontAwesomeIcon icon={faGithub} />
      case "Linkedin":
        return <FontAwesomeIcon icon={faLinkedinIn} />
      case "Behance":
        return <FontAwesomeIcon icon={faBehance} />
      default:
        return null
    }
  }

  return (
    <footer>
      <ul className="social-media">
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {socialIcon(name)}
              </a>
            </li>
          ))}
      </ul>
      <span>
        Made with{" "}
        <span role="img" aria-label="Heart">
          ❤️
        </span>{" "}
        © 2024 Lewis Varrilly
      </span>
    </footer>
  )
}
