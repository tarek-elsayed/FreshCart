"use client";

import { addProductToCart } from "@/api/cartAction/addToCart";
import { Loader, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CartBTN({ id }: { id: string }) {
  const [isLodaing, setisLodaing] = useState(false);
  async function addToCart() {
    try {
      setisLodaing(true);
      const response = await addProductToCart(id);
      console.log(response);
      if (response.status == "success") {
        setisLodaing(false);
        toast.success(response.message, {
          position: "top-right",
          delay: 1500,
          autoClose: 1500,
          closeOnClick: true,
        });
      } else {
        toast.error("Somethins went Wrong", {
          position: "top-right",
          delay: 1500,
          autoClose: 1500,
          closeOnClick: true,
        });
      }
    } catch (error) {
      toast.error("Somethins went Wrong", {
        position: "top-right",
        delay: 1500,
        autoClose: 1500,
        closeOnClick: true,
      });
    } finally {
      setisLodaing(false);
    }
  }
  return (
    <>
      <button
        onClick={() => addToCart()}
        type="button"
        aria-label={`Add to cart`}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors hover:bg-emerald-700"
      >
        {isLodaing ? (
          <Loader className="animate-spin" />
        ) : (
          <Plus className="h-4 w-4 cursor-pointer" strokeWidth={2.5} />
        )}
      </button>
    </>
  );
}
