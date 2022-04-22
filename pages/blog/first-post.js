import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../components/layout.module.css";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <div>
          <Image
            src="/../public/images/Canada.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

        </div>

        <div className={utilStyles.headingMd}>
          <h2>Best Places To Visit In Canada</h2>
        </div>
        <div>
          <p>
            Here is the top three list of best places to visit in Canada.
          </p>
          <div className={utilStyles.headingMd}>
          <h3>1. Vancouver</h3>
        </div>
        <p>
          Vancouver is a amazing place to visit and live. Here you can go on bike trips as weather is great all year around.

        </p>
        <p>Average weather is 38° / 64° F</p>
        <div>
          <Image
            src="/../public/images/V.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

        </div>
        <div className={utilStyles.headingMd}>
          <h3>2. Toronto</h3>
        </div>
        <p>
          Toronto is a great place to visit and live. Here you can go to world famous museums and zoo.

        </p>
        <p>Average weather is 28° / 70° F</p>
        <div>
          <Image
            src="/../public/images/T.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

        </div>
        <div className={utilStyles.headingMd}>
          <h3>3. Calgary</h3>
        </div>
        <p>
          Calgary is a beautiful place. Here you can go on day trips to Lake Louise and Yoho N.P. and Moraine Lake.

        </p>
        <p>Average weather is 19° / 62° F</p>
        <div>
          <Image
            src="/../public/images/C.jpg"
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
