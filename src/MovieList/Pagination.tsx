import * as actions from "./actions";

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import MUIPagination from "@material-ui/lab/Pagination";
import type { RootState } from "../rootReducer";

function Pagination() {
  const dispatch = useDispatch();

  const movieName = useSelector((state: RootState) => state.searchBox.movieName);
  const isLoading = useSelector((state: RootState) => state.movieList.loading);
  const totalPagesCount = useSelector((state: RootState) => state.movieList.totalCount);

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(actions.searchRequired({ name: movieName, page }));
    dispatch(actions.setLoading(true));
  }, [dispatch, movieName]);

  if (totalPagesCount < 2) {
    return null;
  }

  return (
    <MUIPagination count={totalPagesCount} disabled={isLoading} onChange={handlePageChange} />
  );
}

export default Pagination;
