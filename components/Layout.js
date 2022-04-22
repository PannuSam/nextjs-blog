import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Nav from "./Nav";
const name = "Saman Pannu";
const contact=" The Wanderer";
export const siteTitle = "Sam's Adventurous World";

export default function Layout({ children, home }) {

  return (
    <div className={styles.container}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content=" personal website with Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav/>
      <header className={styles.header}>
        {home ? (
          <>
          <div>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={170}
              width={170}
              alt={name}
            />
            </div>
            <div className={styles.names}>
            <h1 className={utilStyles.headingXl}>{name}</h1>
            <h3 className={utilStyles.headingMd}>{contact}</h3>
            </div>
          </>
        ) : (
          <>
            <Link href="/blog">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={120}
                  width={120}
                  alt={name}
                />
              </a>
            </Link>
            <div className={styles.names}>
            <h1 className={utilStyles.headingLg}>{name}</h1>
            <h3 className={utilStyles.headingMd}>{contact}</h3>
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Go Back</a>
          </Link>
        </div>
      )}
    </div>
  );
}
