import axios from "axios";

require("dotenv").config();

export const fetch_post_user = () => {
  const body = {
    user_id: "foo",
    user_username: "ha",
    user_fullname: "Nope",
    user_email: "example@example.com",
    user_avatar: {
      sex: "woman",
      faceColor: "#F9C9B6",
      earSize: "big",
      eyeStyle: "smile",
      noseStyle: "round",
      mouthStyle: "smile",
      shirtStyle: "short",
      glassesStyle: "none",
      hairColor: "#FC909F",
      hairStyle: "womanShort",
      hatStyle: "none",
      hatColor: "#D2EFF3",
      eyeBrowStyle: "up",
      shirtColor: "#6BD9E9",
      bgColor: "linear-gradient(45deg, #3e1ccd 0%, #ff6871 100%)",
    },
  };
  const posted_user_res = axios.post(`${process.env.USER_API_URL}`, body);

  return posted_user_res;
};
