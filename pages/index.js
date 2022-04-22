import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.main}>
        <section className={utilStyles.headingMd}>
          <h2>About Me</h2>
          <p>
            Hi! My name is Samanpreet Pannu and I am a software developer. I
            started this blog because I want to share amazing pictures that I
            clicked on my travel adventures. I want to inspire others and give
            them ideas or directions for their future travels. I hope you find
            this blog useful. If you want to reach me, you can go to About
            section for more details.
          </p>
          <h2>Check Out Travel Tips</h2>
          <h4>
          <Link href="/blog/travel-tips">
            <div role="navigation" className={styles.travel}>
              <p className={utilStyles.headingMd}> Travel Tips </p>
            </div>
            </Link>
          </h4>
        </section>
      </div>
    
    </Layout>
    <Footer/>
    </>
  );
}
