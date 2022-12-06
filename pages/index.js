import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Housetable | Home</title>
      </Head>
      <div className={styles.container}>
        <img src="/vacation.jpg" alt="vacation" width="1000px" height="500px" />
        <h1 className={styles.title}>Find your next stay</h1>
        <p className={styles.text}>
          Search low prices on hotels, homes and much more...
          <br />
          Click on the link below to choose the location for your next vacation.
        </p>
        <Link href="/cities/">
          <a className={styles.btn}>See Cities Listing</a>
        </Link>
      </div>
    </>
  );
}
