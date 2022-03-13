import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getDetail } from "../lib/api/posts";
import CardMedia from "@material-ui/core/CardMedia";

function Detail(props) {
  const [data, setData] = useState({});
  const query = useParams();
  const history = useHistory();

  useEffect(() => {
    handleGetDetail(query);
  }, [query]);

  const handleGetDetail = async (query) => {
    try {
      const res = await getDetail(query.id);
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Detail</h1>
      <div>ID:{data.id}</div>
      <div>名前：{data.content}</div>
      <div>
        {data.image?.url ? (
          <CardMedia component="img" src={data.image.url} alt="post image" />
        ) : null}
      </div>
      <button onClick={() => history.push("/")}>戻る</button>
    </div>
  );
}

export default Detail;
