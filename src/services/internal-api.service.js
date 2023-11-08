import localforage from "localforage";

/** Gets user's role. */
export const user_role_loader = async () => {
  const loginData = await localforage.getItem("loginData");
  const role = loginData.userRole;
  return role;
};
