import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../components/layout.module.css";

export default function TravelTips() {
  return (
    <>
    <Layout home>
      <Head>
        <title>About Me</title>
      </Head>
      <Script
        src="../js/main.js"
        strategy="lazyOnload"
        onLoad={() => console.log("script loaded")}
      />
      <section className={utilStyles.headingMd}>
      <h2>If You Want To Know More About Me</h2>
      <p>
          You can follow me on below platforms
      </p>
      <div className={styles.icons}>
      <div>
      <FontAwesomeIcon icon={['fab', 'twitter']} />
      </div>
      <div>
      <FontAwesomeIcon icon={['fab', 'facebook']} />
      </div>
      <div>
      <FontAwesomeIcon icon={['fab', 'instagram']} />
      </div>
      <div>
      <FontAwesomeIcon icon={['fab', 'youtube']} />
      </div>
      <div>
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </div>
      <div>
      <FontAwesomeIcon icon={['fab', 'github']} />
      </div>
      </div>
      </section>
     
    </Layout>
     <Footer />
     </>
  );
}
