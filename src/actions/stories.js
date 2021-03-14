import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchpost();
    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createpost(post);
    dispatch({ type: "CREATE ", payload: data });
  } catch (error) {
    console.log(error);
  }
};
