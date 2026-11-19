import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Eye, Heart, Plus, RefreshCw, Star } from "lucide-react";
import { IProducts } from "@/types/products.interface";
import CartBTN from "../CartBTN/CartBTN";

export default function SingleProduct({ product }: { product: IProducts }) {
  return (
    <>
      <Card
        key={product.id}
        className="group relative overflow-hidden rounded-md border border-slate-200 bg-white p-0 shadow-none transition-all duration-200 hover:border-emerald-200 hover:shadow-md"
      >
        {/* Product Image */}
        <div className="relative h-[155px] overflow-hidden bg-white">
          <Link
            href={`/products/${product.id}`}
            aria-label={`View ${product.title}`}
            className="absolute inset-0"
          >
            <Image
              src={product.imageCover}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Discount Badge */}
          {
            <span className="absolute left-2 top-2 z-10 rounded-sm bg-rose-500 px-1.5 py-1 text-[9px] font-bold text-white">
              -{15}%
            </span>
          }

          {/* Product Actions */}
          <div className="absolute right-2 top-2 z-10 flex flex-col gap-1.5">
            <button
              type="button"
              aria-label="Add to wishlist"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:bg-rose-50 hover:text-rose-500"
            >
              <Heart className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              aria-label="Compare product"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:bg-emerald-50 hover:text-emerald-600"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              aria-label="Quick view"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:bg-emerald-50 hover:text-emerald-600"
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Product Information */}
        <div className="flex min-h-[94px] flex-col px-2.5 pb-2.5 pt-1">
          {/* Category */}
          <p className="truncate text-[9px] text-slate-500">
            {product.category.name}
          </p>

          {/* Product Name */}
          <Link
            href={`/products/${product.id}`}
            className="mt-1 line-clamp-2 min-h-[14px] text-[10px] font-medium leading-4 text-slate-800 hover:text-emerald-600"
          >
            {product.title}
          </Link>

          {/* Rating */}
          <div className="mt-1 flex items-center gap-1">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-3 w-3 fill-current"
                  strokeWidth={1}
                />
              ))}
            </div>

            <span className="whitespace-nowrap text-[9px] text-slate-500">
              {product.ratingsAverage} ({product.sold})
            </span>
          </div>

          {/* Price and Add to Cart */}
          <div className="mt-auto flex items-center justify-between gap-1 pt-2">
            <div className="flex min-w-0 flex-wrap items-center gap-x-2">
              <span
                className={`text-[11px] font-bold ${
                  product.price ? "text-emerald-600" : "text-slate-900"
                }`}
              >
                {product.price} EGP
              </span>

              {/* {product.oldPrice && (
                        <span className="text-[9px] text-slate-400 line-through">
                          {product.oldPrice} EGP
                        </span>
                      )} */}
            </div>

            <CartBTN id={product.id}/>
          </div>
        </div>
      </Card>
    </>
  );
}
