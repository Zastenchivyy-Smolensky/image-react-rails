import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { createPost } from "../lib/api/posts";
import PostForm from "./PostForm";

function New({ handleGetPosts }) {
  return (
    <div>
      <PostForm />
    </div>
  );
}

export default New;
