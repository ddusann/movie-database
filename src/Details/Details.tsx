import React, { useEffect, useState } from 'react';

import Box from "@material-ui/core/Box";
import { Typography } from '@material-ui/core';
import { getMovieDetails } from "../api";
import { useParams } from 'react-router-dom';

interface DataResponse {
  Title: string;
  Year: string;
  Poster: string;
}

function Details() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id ?? "").then((data: DataResponse) => {
      setTitle(data.Title);
      setYear(data.Year);
      setPoster(data.Poster);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <>
        Loading...
      </>
    );
  }

  return (
    <Box>
      <Typography variant="h4">
        {title}
      </Typography>
      <img src={poster} alt="Poster" />
      <div>
        <b>Year:</b> {year}
      </div>
    </Box>
  );
}

export default Details;
