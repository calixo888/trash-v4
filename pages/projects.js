/** @jsx jsx */

import Head from 'next/head'
import Layout from '../components/Layout.js'
import { jsx } from 'theme-ui'

export default () => {
  return (
    <Layout>
      <div className="container">
        <h1 sx={{
          fontSize: 3
        }}>My Projects</h1>

        <div className="project">
          <div className="project-logo-container">
            <img className="project-logo" src="img/logos/npocore.png" alt="Project Logo" />
          </div>
          <div>
            <h5 className="project-name">
              NPO Core
            </h5>
            <p className="project-description">
              NPO Core is a curated list of nonprofit organizations, allowing anyone to find the perfect nonprofit to get involved with and get in contact! NPO Core also has a Slack workspace, where nonprofit executives and members can join and talk among their peers to network, partner up, or just discuss about other topics!
            </p>
            <div className="options-grid">
              <div className="tags">
                <span className="tag">React.js</span>
                <span className="tag">Google Firebase</span>
                <span className="tag">SCSS</span>
                <span className="tag">Netlify</span>
              </div>
              <div className="out-btns">
                <a href="https://www.github.com/launchtechllc/npocore" className="out-btn">
                  <img className="out-btn-icon github-out-btn-icon" src="img/social-media/github-light.png" alt="GitHub Logo" />
                </a>
                <a href="https://www.npocore.com" className="out-btn">
                  <img className="out-btn-icon" src="img/icons/my-projects/out-light.png" alt="Project Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-logo-container">
            <img className="project-logo" src="img/logos/anojs.png" alt="Project Logo" />
          </div>
          <div>
            <h5 className="project-name">
              Ano.js
            </h5>
            <p className="project-description">
              Ano.js is a free, open source web animation library that makes creating beautiful designs a whole lot easier. We've designed Ano.js in the interest of simplifying the process of creating and integrating web animations into your website. All of our animations are free to use, and the entire operation is powered by open source contributions.
            </p>
            <div className="options-grid">
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">Express</span>
                <span className="tag">MongoDB</span>
                <span className="tag">GitHub API</span>
                <span className="tag">HTML5 Canvas</span>
                <span className="tag">Mo.js</span>
                <span className="tag">Anime.js</span>
              </div>
              <div className="out-btns">
                <a href="https://www.github.com/launchtechllc/anojs" className="out-btn">
                  <img className="out-btn-icon github-out-btn-icon" src="img/social-media/github-light.png" alt="GitHub LogoGitHub Logo" />
                </a>
                <a href="http://www.anojs.com" className="out-btn">
                  <img className="out-btn-icon" src="img/icons/my-projects/out-light.png" alt="Project Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 sx={{
          fontSize: 3
        }}>Team Projects</h1>

        <div className="project">
          <div className="project-container-logo">
            <img className="project-logo" src="img/logos/no-logo.png" alt="Project Logo" />
          </div>
          <div>
            <img className="date-icon" src="img/icons/calendars/calendar-light.png" alt="" />
            <span className="experience-date">August 2019 - Present</span>
            <h5 className="experience-org">
              <img className="location-icon" src="img/icons/section-icons/user-light.png" alt="" />
              Co-Founder, Frontend Web Developer + UI/UX Designer
            </h5>
            <h5 className="project-name">EdConnect</h5>
            <p className="project-description">
              EdConnect is a web-based education platform, optimizing the use of machine learning to drive forward the future of grading and evaluation in schools and organizations. My role in this project is as the frontend web developer and UI/UX designer. I wireframe and prototype different UI designs and integrate them into websites, as well as working with backend developers to transfer data from the backend server to the UI.
            </p>
            <div className="options-grid">
              <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">Java</span>
                <span className="tag">MySQL</span>
                <span className="tag">Adobe Xd</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-container-logo">
            <img className="project-logo" src="img/logos/no-logo.png" alt="Project Logo" />
          </div>
          <div>
            <img className="date-icon" src="img/icons/calendars/calendar-light.png" alt="" />
            <span className="experience-date">Janurary 2020 - Present</span>
            <h5 className="experience-org">
              <img className="location-icon" src="img/icons/section-icons/user-light.png" alt="" />
              Co-Founder, Frontend Web Developer + UI/UX Designer
            </h5>
            <h5 className="project-name">Procura</h5>
            <p className="project-description">
              Procura is a cross-platform mobile application designed to help hackathon organizers manage their attendees more efficiently, as well as allowing hackathon participants to have a more enjoyable time competing at the event. My role in this project is the main frontend web developer, designing and developing the landing page for the application.
            </p>
            <div className="options-grid">
              <div className="tags">
                <span className="tag">Flutter</span>
                <span className="tag">Android Studio</span>
                <span className="tag">Java</span>
                <span className="tag">Adobe Xd</span>
              </div>
              <div className="out-btns">
                <a href="https://github.com/calixo888/procura" className="out-btn">
                  <img className="out-btn-icon github-out-btn-icon" src="img/social-media/github-light.png" alt="GitHub Logo" />
                </a>
                <a href="https://www.procura.ml" className="out-btn">
                  <img className="out-btn-icon" src="img/icons/my-projects/out-light.png" alt="Project Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .project {
          display: grid;
          grid-template-columns: 10% 1fr;
          grid-gap: 75px;
        }

        .project:not(:last-child) {
          margin-bottom: 75px;
        }

        .project-logo {
          width: 100%;
        }

        .project-name {
          font-weight: bold;
          font-size: 30px;
        }

        .project-description {
          font-size: 20px;
        }

        .project-btns {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-gap: 5px;
        }

        .github-btn {
          display: flex !important;
          align-items: center;
          justify-content: center;
        }

        .github-logo {
          height: 20px;
          margin-right: 6px;
          transform: translateY(-1px);
        }

        .project-icon {
          width: 30px;
          transform: translateY(-2px);
          margin-right: 5px;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        .tags {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .tag {
          background-color: rgba(147, 224, 201, 0.9);
          padding: 5px 10px;
          border-radius: 4px;
          color: #072740;
          margin: 3px;
        }

        .out-btns {
          justify-self: flex-end;
        }

        .out-btn-icon {
          width: 30px;
        }

        .out-btn:not(:last-child) {
          margin-right: 10px;
        }

        .out-btn:hover {
          text-decoration: none;
        }

        .github-out-btn-icon {
          transform: translateY(3px);
        }

        .other-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 15px;
        }

        .other-options-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }

        .other-out-btns {
          justify-self: flex-end !important;
        }

        .other-project {
          position: relative;
          background-color: rgba(147, 224, 201, 0.95);
          border-radius: 4px;
          padding: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,.1);
        }

        .other-project * {
          color: var(--color-green);
        }

        .other-project-icon {
          width: 50px;
        }

        .other-project-title {
          margin-top: 20px;
          font-size: 35px;
          /* word-wrap: break-word; */
        }

        .other-project-description {
          margin: 0 5px;
          font-size: 17px;
        }

        .other-tags {
          margin-top: 15px;
        }

        .other-tags .tag {
          background-color: rgba(7, 39, 64, 0.85);
          color: var(--color-blue);
        }
      `}</style>
    </Layout>
  )
}
