import Layout from "../component/layout.component";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h1>Batman TV shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");

  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
