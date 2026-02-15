import api from "./axios";

// ==============================
// GET USER PROFILE
// ==============================
export const getProfile = async () => {
  const res = await api.get("profile/");
  return res.data;
};

// ==============================
// UPDATE USER PROFILE
// ==============================
export const updateProfile = async (data) => {
  const res = await api.put("profile/update/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
