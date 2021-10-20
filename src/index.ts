import { fetch_delete_user } from "./fetchHelpers/user/DELETE";
import { fetch_get_user } from "./fetchHelpers/user/GET";
import { fetch_post_user } from "./fetchHelpers/user/POST";
import { is_user_valid } from "./helpers/users/user_validator";

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
    console.log(deleted_user.data);
  } else {
    console.log(deleted_user);
  }
})();
