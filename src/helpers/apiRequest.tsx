import axios from "axios";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const sendRequest = async ({ link, formData }) => {
  const response = await axios.post(link, formData);

  return response;
};
