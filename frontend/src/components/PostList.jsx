import React, { useEffect, useState } from "react";
import { getPosts } from "../lib/api/posts";
import PostForm from "./PostForm";
import PostItem from "./PostItem";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  container: {
    marginTop: "3rem",
  },
}));
function PostList() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const handleGetPosts = async () => {
    const { data } = await getPosts();
    setPosts(data.posts);
  };
  useEffect(() => {
    handleGetPosts();
  }, []);
  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container direction="row" justifyContent="center">
          <Grid item>
            <PostForm handleGetPosts={handleGetPosts} />
            {posts?.map((post) => {
              return (
                <PostItem
                  key={post.id}
                  post={post}
                  handleGetPosts={handleGetPosts}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PostList;
