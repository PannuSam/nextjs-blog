import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Posts() {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className={utilStyles.headingMd}>
          <h2>Blog</h2>
          <p>You can find all my posts here &#128522;</p>
          <h4>
     
            <Link href="/blog/first-post">
              <div className={styles.card}>
                <div className={styles.topCanada}>
                </div>
                <div className={styles.bottom}>
                  <h2>
                    <a>Canada</a>
                  </h2>
                  <p className={styles.intro}>
                  If you are traveling to Canada then you should read this post so that you do not miss out on anything.
                  I have mentioned all the MUST visit places. </p>
                  <p className={styles.info}><a>Read More ...</a>
                  </p>
                </div>
              </div>
              </Link>
              
              <Link href="/blog/second-post">
              <div className={styles.card}>
                <div className={styles.topIndia}>
                </div>
                <div className={styles.bottom}>
                  <h2>
                    <a>India</a>
                  </h2>
                  <p className={styles.intro}>
                  I want to share my memorable experience in India. Although this post ca not do justice. I still want to share top 3 things you should see or do in India.</p>
                  <p className={styles.info}><a>Read More ...</a>
                  </p>
                </div>
              </div>
              </Link>

              <Link href="/blog/third-post">
              <div className={styles.card}>
                <div className={styles.topChile}>
                </div>
                <div className={styles.bottom}>
                  <h2>
                    <a>Chile</a>
                  </h2>
                  <p className={styles.intro}>
                  I want to share the places that I stayed in Chile. They were super awesome places with incredible views. Here is my top list of places in Chile. </p>
                  <p className={styles.info}><a>Read More ...</a>
                  </p>
                </div>
              </div>
              </Link>
        
          </h4>
        </section>
      </Layout>
      <Footer />
    </>
  );
}
