import Head from "next/head";
import Script from "next/script";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../components/layout.module.css";
import Image from "next/image";

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>Third Post</title>
      </Head>
     
       
      <div>
          <Image
            src="/../public/images/Chile.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

       </div>

        <div className={utilStyles.headingMd}>
        <h2>Where To Stay In Chile</h2>
        </div>
        <div>
          <p>
            Here's the top place to stay in Chile.
  
          </p>
          <div className={utilStyles.headingMd}>
          <h3>1. Sheraton Santiago Hotel</h3>
        </div>
        <p>
         It's best place to stay in Chile because of its stunning views.
        </p>
        <p>Average weather is 20° / 38° C</p>
        <div>
          <Image
            src="/../public/images/Hotel.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

        </div>
       
        </div>
    </Layout>
    <Footer />
    </>
  );
}
