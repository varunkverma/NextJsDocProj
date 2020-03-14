import Layout from "../../component/layout.component";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
    {props.show.image ? <img src={props.show.image.medium} /> : null}
  </Layout>
);

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched Show: ${show.name}`);
  return { show };
};

export default Post;
