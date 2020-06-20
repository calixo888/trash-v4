/** @jsx jsx */

import Layout from '../components/Layout.js'
import Head from 'next/head'
import { jsx } from 'theme-ui'

export default function Home() {
  return (
    <Layout>
      <Head>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="/js/three.r95.min.js" />
        <script src="/js/vanta.rings.min.js" />
      </Head>

      <div className="container">
        <div className="horizontal-container">
          <div>
            <h1 sx={{
              fontSize: 4
            }}>Calix Huang</h1>
            <p sx={{
              fontSize: 1
            }}>A self-taught software engineer with a passion for entrepreneurship.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          margin-top: 200px;
        }

        .horizontal-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 25px;
          align-items: center;
          height: 100%;
        }
      `}</style>
    </Layout>
  )
}
