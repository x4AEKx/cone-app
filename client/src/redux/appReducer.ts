const SET_POINTS = "SET_POINTS";
const SET_LOADING = "SET_LOADING";
const SET_ERROR = "SET_ERROR";

type initialStateType = {
  points: Array<Number>,
  isLoading: boolean,
  error: null | string,
}

const initialState:initialStateType = {
  points: [],
  isLoading: false,
  error: null,
};

const appReducer = (state = initialState, action: any):initialStateType => {
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

type setErrorActionType =  {
  type: typeof SET_ERROR,
  message: string
}

const setError = (message: string): setErrorActionType => {
  return { type: SET_ERROR, message };
};

type setPointsActionType = {
  type: typeof SET_POINTS,
  points: Array<Number>
}

const setPoints = (points: Array<Number>): setPointsActionType => {
  return { type: SET_POINTS, points };
};

type setLoadingActionType = {
  type: typeof SET_LOADING,
  value: boolean
}

const setLoading = (value: boolean): setLoadingActionType => {
  return { type: SET_LOADING, value };
};

type ValuesType = {
  Radius: string
  coneHeight: string
  segmentsNumber: string
}

export const getData = (values: ValuesType) => async (dispatch: any) => {
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
