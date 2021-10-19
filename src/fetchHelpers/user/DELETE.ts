const axios = require("axios").default;
require("dotenv").config();

export const fetch_delete_user = async () => {
  let fetched_user_res = null;
  try {
    fetched_user_res = await axios.delete(
      `${process.env.USER_API_URL}?user_id=foo`
    );
  } catch (e) {
    console.log((e as Error).message);
    return "Coudln't delete the user";
  }

  return fetched_user_res;
};
