import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>About Us</h2>
        <p>Bill Hofmann is a senior engineering and product leader who helps
          teams deliver and helps teams grow. He&rsquo;s worked with small angel
          funded companies, venture funded companies, and mid-size and large
          public companies, delivering product both B2C and B2B. Bill has
          managed teams in multiple countries and time zones, and has deep
          experience working with Asian and Eastern European engineering teams.</p>
        <p>At Dolby, Bill built and led the Core Technology Product Team for
          Dolby Vision. He drove innovation and incubated new applications of
          Dolby Vision high dynamic range/wide color gamut technology.
          He helped the Dolby Vision team scale by introducing collaboration
          and just enough process. The team is responsible for defining and
          delivering shared technologies used by content creators, content
          distribution, and playback, as well as core enabling technology
          licensed to silicon vendors, PC OEMs, and mobile OEMs.</p>
        <p>At Klamr, a mobile-social startup based in Ho Chi Minh City and
          San Francisco, Bill grew the development and operations team from 10
          to over 40, and decreased the average time to add features from over
          2 months to about 2 weeks.</p>
        <p>Bill earned his BS, MS, and Advanced Engineer degrees in Electrical
          Engineering and Computer Science from the Massachusetts
          Institute of Technology. He has received three patents for cloud-based technical support.</p>
        <p>Learn more about Bill on <a target='_blank' rel="noreferrer" href='http://www.linkedin.com/in/billhofmann'>LinkedIn</a>.</p>
      </section>
    </Layout>
  )
}
