const axios = require("axios").default;
require("dotenv").config();

export const fetch_get_user = async () => {
  let fetched_user_res = null;
  try {
    fetched_user_res = await axios.get(
      `${process.env.USER_API_URL}?user_id=foo`
    );
  } catch (e) {
    console.log((e as Error).message);
    return "Coudln't get the user";
  }

  return fetched_user_res;
};
