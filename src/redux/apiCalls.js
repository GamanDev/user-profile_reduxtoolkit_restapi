import axios from "axios";
import { updateSuccess, updateError, updateStart } from "./UserSlice";

export const updateUser = async (userObj, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "http://localhost:8800/api/user/3301/update",
      userObj
    );

    dispatch(updateSuccess(res.data));
  } catch (e) {
    dispatch(updateError());
  }
};
