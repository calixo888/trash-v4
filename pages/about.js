/** @jsx jsx */

import Head from 'next/head'
import Layout from '../components/Layout.js'
import { jsx } from 'theme-ui'

export default () => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="../styles/odometer.css" />
        <script src="/js/odometer.js"></script>
      </Head>

      <div className="container" sx={{
        mt: 4
      }}>
        <h1 sx={{
          fontSize: 3
        }}>About</h1>

        <div className="about-me-container" sx={{
          mt: 5
        }}>
          <div className="calix-container">
            <img className="calix-image" src="img/calix/calix.jpeg" />
          </div>
          <div className="calix-description">
            I am completely self-taught, using online resources to teach myself every single thing I know about software engineering. I believe in learning by doing, so I build a lot of large-scale projects to solidify my knowledge in certain areas.
            <div className="my-4"></div>
            I try to model my projects around useful ideas that can be deployed to users around the globe. My skills in full-stack development allow me to take a project from an idea to a product.
            <div className="statistics-container">
              <div className="num-commits">3,598 contributions in the last year</div>
              <div className="num-repos">67  Respositories</div>
              <div className="years-of-programming">1.5 Years of Programming</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-me-container {
          display: grid;
          grid-template-columns: 25% 1fr;
          grid-gap: 30px;
          align-items: center;
        }

        .about-me-container * {
          color: var(--color-green);
          font-size: 20px;
        }

        .calix-image {
          width: 200px;
          border-radius: 50%;
          border: 5px solid #56FFD6;
        }

        .statistics-container {
          margin-top: 30px;

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 25px;
        }

        .resumes-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 20px;

          margin-top: 30px;
        }

        .resumes-container > * {
          text-align: center;
        }

        .odometer {
          transform: translateY(-2px);
        }

        .num-commits {
          text-align: left;
        }

        .num-repos {
          text-align: center;
        }

        .years-of-programming {
          text-align: right;
        }
      `}</style>
    </Layout>
  )
}
