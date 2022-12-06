import Head from "next/head";
import styles from "../../styles/Cities.module.css";
import Link from "next/link";
import Searchbar from "../../components/Searchbar";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations"
  );
  const data = await res.json();

  return {
    props: { cities: data },
  };
};

const getFilteredCities = (query, cities) => {
  if (!query) {
    return cities;
  }
  return cities.filter((city) =>
    city.cityName.toLowerCase().includes(query.toLowerCase())
  );
};

const Cities = ({ cities }) => {
  const [query, setQuery] = useState("");

  const filteredCities = getFilteredCities(query, cities);

  return (
    <>
      <Head>
        <title>Housetable | Cities</title>
      </Head>
      ;
      <div>
        <h1 className={styles.title}>All Cities</h1>
        <Searchbar onSearch={(e) => setQuery(e.target.value)} />
        {filteredCities.map((city) => (
          <Link href={"/cities/" + city.id} key={city.id}>
            <a className={styles.single}>
              <h3>{city.cityName}</h3>
              <img
                src="/next.png"
                alt="next vacation"
                width="75px"
                height="75px"
              />
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cities;
