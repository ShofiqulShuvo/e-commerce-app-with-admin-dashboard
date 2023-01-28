

export const BASE_URL = REACT_APP_BACKEND_URL;

export const postConfigure = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };
};

export const patchConfigure = (data) => {
  return {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };
};

export const deleteConfig = () => {
  return {
    method: "DELETE",
  };
};
