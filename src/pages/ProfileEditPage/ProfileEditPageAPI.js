import { BASE_URL } from "../../common/BASE_URL";

async function editProfile(data) {
  const TOKEN = window.localStorage.getItem("token");

  const reqData = { user: { ...data } };
  try {
    const data = await fetch(BASE_URL + "/user", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
    const result = await data.json();
    window.localStorage.setItem("accountname", result.user.accountname);
  } catch (error) {
    console.log(error.message);
  }
}

export { editProfile };
