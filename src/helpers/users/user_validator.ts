import { intended_user_get } from "../../intended/user/get";
import { isCuid } from "cuid";
import { make_json_string } from "../validationHelpers";

export const is_user_valid = (check_user: object) => {
  const user: any = check_user;

  let is_valid = true;

  if (
    make_json_string(Object.keys(user)) !==
    make_json_string(Object.keys(intended_user_get))
  ) {
    is_valid = false;
  }

  Object.keys(user).map((key) => {
    if (is_valid) {
      if (key === "user_datecreated") {
        const date = new Date(user[key]);

        if (!date) {
          is_valid = false;
          console.log("first date check");
        }
      } else if (key === "user_lastseen") {
        const date = new Date(user[key]);

        if (!date) {
          is_valid = false;
          console.log("first date check");
        }
      } else if (key === "user_streak_last_updated") {
        const date = new Date(user[key]);

        if (!date) {
          is_valid = false;
          console.log("first date check");
        }
      } else if (key === "user_api_token") {
        if (!isCuid(user[key])) {
          is_valid = false;
        }
      } else if (
        make_json_string(user[key]) !== make_json_string(intended_user_get[key])
      ) {
        is_valid = false;
      }
    }
  });

  return is_valid;
};
