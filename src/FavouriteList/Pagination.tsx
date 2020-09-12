import * as actions from "./actions";

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";

import MUIPagination from "@material-ui/lab/Pagination";
import type { RootState } from "../rootReducer";
import useFavourites from "../useFavourites";

function Pagination() {
  const dispatch = useDispatch();
  const favourites = useFavourites();
  const favouriteIds = favourites.getIds();

  const totalPagesCount = Math.ceil(favouriteIds.length / 10);
  const currentPage = useSelector((state: RootState) => state.favouriteList.page);

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(actions.setPage(page));
  }, [dispatch]);

  if (totalPagesCount < 2) {
    return null;
  }

  return (
    <MUIPagination count={totalPagesCount} onChange={handlePageChange} page={currentPage} />
  );
}

export default Pagination;
