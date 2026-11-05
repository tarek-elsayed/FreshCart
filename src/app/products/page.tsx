import { getAllProducts } from "@/api/allProducts.api";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  
} from "@/components/ui/card";
import { IProducts } from "@/types/products.interface";
import { PackageOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Products() {
  const { data } = await getAllProducts();

  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#16b957] via-[#24c968] to-[#43dc83] text-white">
        <div className="mx-auto flex min-h-[284px] max-w-[1920px] flex-col justify-center px-4 py-8 sm:px-6 lg:px-[18px]">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-3 text-base font-medium"
          >
            <Link href="/" className="transition-opacity hover:opacity-80">
              Home
            </Link>

            <span className="text-white/60" aria-hidden="true">
              /
            </span>

            <span aria-current="page" className="text-white">
              All Products
            </span>
          </nav>

          {/* Heading */}
          <div className="flex items-center gap-6">
            {/* Icon */}
            <div className="flex h-[83px] w-[83px] shrink-0 items-center justify-center rounded-[22px] border border-white/15 bg-white/20 shadow-sm">
              <PackageOpen
                className="h-10 w-10"
                strokeWidth={3}
                aria-hidden="true"
              />
            </div>

            {/* Title and Description */}
            <div className="min-w-0">
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[46px]">
                All Products
              </h1>

              <p className="mt-1 text-base font-medium text-white/90 sm:text-lg lg:text-xl">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[90%] mx-auto my-5">
          <div className="flex flex-wrap">
            {data.map((currentProduct:IProducts) => (
              <>
                <div className="w-1/5">
                  <div className="inner p-5">
                    <Card className="w-full max-w-sm">
                      <CardHeader>
                        <CardTitle>
                          <Image
                            width={500}
                            height={500}
                            src={currentProduct.imageCover}
                            alt="ds"
                          />
                        </CardTitle>
                        <CardDescription>
                          <h2>{currentProduct.category.name}</h2>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h2>{currentProduct.title}</h2>
                        <div className="rate">
                          
                        </div>
                      </CardContent>
                      <CardFooter className="flex-col gap-2"></CardFooter>
                    </Card>
                  </div>
                </div>
                
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
