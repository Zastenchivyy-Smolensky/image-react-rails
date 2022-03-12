import React, { useState } from "react";
import { deletePost } from "../lib/api/posts";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function PostItem({ post, handleGetPosts }) {
  const [like, setLike] = useState(false);
  const handleDeletePost = async (id) => {
    await deletePost(id).then(() => {
      handleGetPosts();
    });
  };
  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar>U</Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="User Name"
        />
        {post.image?.url ? (
          <CardMedia component="img" src={post.image.url} alt="post image" />
        ) : null}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="span">
            {post.content.split("\n").map((content, index) => {
              return <p key={index}>{content}</p>;
            })}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={() => (like ? setLike(false) : setLike(true))}>
            {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
          <div>
            <IconButton onClick={() => handleDeletePost(post.id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default PostItem;
