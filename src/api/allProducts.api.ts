export const getAllProducts = async () => {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products`,
  );
  const data = response.json();
  return data;
};
