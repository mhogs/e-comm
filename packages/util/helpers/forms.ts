export const createFormData = (body: any) => {
  const data = new FormData();
  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });
  return data;
};
