/** @jsx jsx */

import styles from '../styles/layout.module.scss'
import { jsx, Button, useColorMode } from 'theme-ui'
import Link from 'next/link'

export default ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div sx={{
      bg: 'primary'
    }} style={{
      'min-height': '100vh'
    }}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img className="nav-logo" src="img/calix/calix-logo-light.png" alt="Calix Huang's Logo" style={{
                width: '50px'
              }} />
            </a>
          </Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-target">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-target">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/projects">
                  <a className="nav-link">Projects</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/skills">
                  <a className="nav-link">Skills</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/past-competitions">
                  <a className="nav-link">Past Competitions</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/calix-resume.pdf">
                  <a className="nav-link">Resume</a>
                </Link>
              </li>
              <li className="nav-item">
                <Button onClick={(e) => {
                  console.log(colorMode)
                  setColorMode(colorMode === 'default' ? 'light' : 'default')
                }}>Toggle Color</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div sx={{
        py: 5
      }}>{children}</div>
    </div>
  )
}
