import React from "react";
import { getAllProducts } from "./../../api/allProducts.api";
import SingleProduct from "../singleProduct/page";
import { IProducts } from "@/types/products.interface";

export default async function AllProducts() {
  const { data } = await getAllProducts();
  return (
    <>
      <div className="mt-16">
        {/* Section Title */}
        <div className="mb-5 flex items-center gap-2">
          <span className="h-[19px] w-[3px] rounded-full bg-emerald-500" />

          <h2 className="text-lg font-bold text-slate-900">
            Featured <span className="text-emerald-600">Products</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {data.map((product: IProducts) => 
            <SingleProduct key={product.id} product={product} />
        )}
        </div>
      </div>
    </>
  );
}
