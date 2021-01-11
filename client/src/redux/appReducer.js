const SET_POINTS = "SET_POINTS";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

const initialState = {
  points: [],
  isLoading: false,
  error: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POINTS: {
      return {
        ...state,
        points: action.points,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.value,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.message,
      };
    }
    default: {
      return state;
    }
  }
};

const setError = (message) => {
  return { type: SET_ERROR, message };
};

const setPoints = (points) => {
  return { type: SET_POINTS, points };
};

const setLoading = (value) => {
  return { type: SET_LOADING, value };
};

export const getData = (values) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch("/api/calculation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json.message || "Some error");
    }
    dispatch(setPoints(json.array));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(e.message));
  }
};

export default appReducer;
