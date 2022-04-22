import Head from "next/head";
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
        <title>Second Post</title>
      </Head>
  
      
      <div>
          <Image
            src="/images/India.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

       </div>

        <div className={utilStyles.headingMd}>
        <h2>Top 3 Things To Do Or See In India</h2>
        </div>
        <div>
          <p>
            Here is the top three list of things to See in India.
  
          </p>
          <div className={utilStyles.headingMd}>
          <h3>1. Taj Mahal</h3>
        </div>
        <p>
         Taj Mahal located in Agra is a must see. I was mesmerised by its beauty.
        </p>
        <p>Average weather is 21° / 41° C</p>
        <div>
          <Image
            src="/images/taj.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

        </div>
        <div className={utilStyles.headingMd}>
          <h3>2. Rajasthan</h3>
        </div>
        <p>
          Rajasthan is famous for their culture and old monuments.

        </p>
        <p>Average weather is 21° / 42° F</p>
        <div>
          <Image
            src="/images/raj.jpg"
            alt=""
            className={styles.canada}
            width="800"
            height="600"
          />

        </div>
        <div className={utilStyles.headingMd}>
          <h3>3. Kolkata</h3>
        </div>
        <p>
         Kolkata is very beautiful place and its famous for their food and culture. Howrah Bridge is most famous tourist place to see.
        </p>
        <p>Average weather is 22° / 42° C</p>
        <div>
          <Image
            src="/images/kol.jpg"
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
