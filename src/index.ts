import { fetch_delete_user } from "./fetchHelpers/user/DELETE";
import { fetch_get_user } from "./fetchHelpers/user/GET";
import { fetch_post_user } from "./fetchHelpers/user/POST";
import { intended_user_get } from "./intended/user/get";
import { isCuid } from "cuid";
import { make_json_string } from "./helpers/validationHelpers";

const is_user_valid = (check_user: object) => {
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
      } else {
        // eslint-disable-next-line no-lonely-if
        if (
          make_json_string(user[key]) !==
          make_json_string(intended_user_get[key])
        ) {
          is_valid = false;
        }
      }
    }
  });

  return is_valid;
};

(async () => {
  let posted_user = null;
  try {
    posted_user = await fetch_post_user();
  } catch (e) {
    console.log((e as Error).message);
    console.log("Coudln't post the user");
    return;
  }

  if (!posted_user) {
    return;
  }

  const user = await fetch_get_user().then((res) => res?.data);

  if (!user) {
    console.log("No valid user");
    return;
  }

  const check_user = is_user_valid(user);

  if (check_user) {
    console.log("fetched user is valid");
  } else {
    console.log("fetched user is not valid");
    return;
  }

  const deleted_user = await fetch_delete_user();

  if (deleted_user) {
    console.log("Deleted");
    console.log(deleted_user);
  } else {
    console.log(deleted_user);
  }
})();
