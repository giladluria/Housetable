import { Activities } from "../../components/Activities";
import Map from "../../components/Map";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations"
  );
  const data = await res.json();

  const paths = data.map((city) => {
    return {
      params: { id: city.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations/" + id
  );

  const data = await res.json();

  return {
    props: { city: data },
  };
};

const Details = ({ city }) => {
  return (
    <>
      <div className="id-container">
        <div className="id">
          <h1>City: {city.cityName}</h1>
          <p>Country: {city.country}</p>
          <p>Price for a week: {city.vacationprice} $</p>
          <p>Things to do around the city:</p>
          <ul>
            {Activities.activity.map((act, index) => (
              <li key={act.index}>{act}</li>
            ))}
          </ul>
        </div>
        <Map />
      </div>
    </>
  );
};

export default Details;
