import Head from "next/head";
import Script from "next/script";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";

export default function TravelTips() {
  return (
      <Layout home>
        <Head>
          <title>Travel Tips</title>
        </Head>
        <Script
          src="../js/main.js"
          strategy="lazyOnload"
          onLoad={() => console.log("script loaded")}
        />
        <section className={utilStyles.headingMd}>
        <h2>Here Are My Travel Tips For You</h2>
        <p>
        <ol>
          <li>Cash</li>
          <li>Credit Cards Or Debits Cards</li>
          <li>Make Sure To Get Travel Insurance</li>
          <li>Always Hire Local Guides</li>
          <li>Don't Stay In Your Comfort Zone</li>
          <li>Respect Local Culture and People</li>
          <li>Learn Basic Words or Phrases of Local Language</li>
          <li>Be Smart</li>
          <li>Lastly, Don't Forget To Take Lots Of Pictures</li>
        </ol>
        </p>
        </section>
        <Footer />
      </Layout>
  );
}
