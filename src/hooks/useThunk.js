import {useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback((arg) => {
    setLoading(true);
    console.log("arg",arg)
    dispatch(thunk(arg))
      .unwrap()
      .catch(() => setError("something went wrong..."))
      .finally(() => setLoading(false));
  },[dispatch,thunk]);
  return [runThunk, isLoading, error];
}

export {useThunk};