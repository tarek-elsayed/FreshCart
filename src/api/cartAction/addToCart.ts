import { getMyToken } from "@/utilities/GetMyToken";

export async function addProductToCart(productId: string) {
  const token = await getMyToken();
  if (!token) {
    throw new Error("Login First");
  }
  const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    headers: {
      token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: productId,
    }),
  });
  const payload = await response.json();
  return payload;
}
