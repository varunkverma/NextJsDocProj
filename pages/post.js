import { useRouter } from "next/router";
import Layout from "../component/layout.component";
import { Fragment } from "react";

const Content = () => {
  const router = useRouter();
  return (
    <Fragment>
      <h1>{router.query.title}</h1>
      <p>This is the post content.</p>
    </Fragment>
  );
};

const Post = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export default Post;
