// import Head from 'next/head'
//
// import Post from '../components/post'
//
// export async function getStaticProps() {
//   // fetch list of posts
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_page=1'
//   )
//   const postList = await response.json()
//   return {
//     props: {
//       postList,
//     },
//   }
// }
//
// export default function IndexPage({ postList }) {
//   return (
//     <main>
//       <Head>
//         <title>Home page</title>
//       </Head>
//
//       <h1>List of posts</h1>
//
//       <section>
//         {postList.map((post) => (
//           <Post {...post} key={post.id} />
//         ))}
//       </section>
//     </main>
//   )
// }
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Script from 'next/script'

// export async function getServerSideProps(context) {
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()
//
//   console.log(`${context.resolvedUrl}`);
//
//   if (!data) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }
//
//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }


export default function Home() {
  return (
    <Layout home>
      <Script src="checkredirect.js" strategy="beforeInteractive">
      </Script>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2>What We Do</h2>
        <p>All technology companies need engineering leadership, but some
          companies may not be ready to sustain this role on a full-time basis.
          Carleton Digital can fulfill this role on an as-needed basis:</p>
        <ul>
        <li>Turnaround leadership - solve operational/execution issues within
          your engineering team and get them back on track.</li>
        <li>Global development - design and build a global development team to
          access the skills you need at minimum cost.</li>
        <li>Process improvement - identify key bottlenecks and improve</li>
        <li>Improve transparency - make engineering progress visible.</li>
        <li>Engage the business - facilitate meetings and design processes to
          ensure marketing, sales, and engineering pipelines are fully connected.</li>
        </ul>
      </section>
      <section>
        <h2>Interim Vice President of Engineering</h2>
        <p>Challenged delivering a clear technical vision of your company&rsquo;s
          products and services to your customers and partners? Need to ensure
          that your intellectual property is documented and protected?
          Acquiring another company&rsquo;s technology?</p>
        <ul>
        <li>White papers and presentations - we can help articulate your company&rsquo;s
          products and services, with our years of experience in technical
          communication.</li>
        <li>IP programs - we can work with you to put programs in place to
          protect your Intellectual Property.</li>
        <li>Engineering audit - get an independent perspective on the team,
          processes, and IP.</li>
        </ul>
      </section>
      <section>
        <h2>Interim CTO</h2>
        <p>Do you have a business plan, but no engineering
          capability to implement?</p>
        <ul>
        <li>Reality Check - adjust your solution and generate alternatives,
          ensuring your solutions can be realized at reasonable cost.</li>
        <li>Partnerships - get a Silicon Valley insider to help evaluate
          partnership opportunities.</li>
        <li>Execution - help assemble a global development team to turn your
          idea into product as quickly and efficiently as possible.</li>
        </ul>
      </section>
      <section>
        <h2>Business Meets Technology</h2>
        <p>Do you have a business plan, but no engineering
          capability to implement?</p>
        <ul>
        <li>Reality Check - adjust your solution and generate alternatives,
          ensuring your solutions can be realized at reasonable cost.</li>
        <li>Partnerships - get a Silicon Valley insider to help evaluate
          partnership opportunities.</li>
        <li>Execution - help assemble a global development team to turn your
          idea into product as quickly and efficiently as possible.</li>
        </ul>
      </section>
      <section>
        <h2>Talk to Us</h2>
        <p>Reach out to us with any questions at &nbsp;
          <a target="_blank" rel="noreferrer" href='mailto:info@carletondigital.com'>info@carletondigital.com</a>.
        </p>
        <p>
          For more information, see our info at our {' '}
           <Link href='contact'>Contact</Link> page.
        </p>
      </section>
    </Layout>
  )
}
