import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../Context/github/GithubContext";

function User() {
  const { user, getUser } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>{params.login}</div>;
}

export default User;
