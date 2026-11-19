import Image from "next/image";
import Link from "next/link";

import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headset,
  ArrowRight,
  Eye,
  Flame,
  Heart,
  Plus,
  RefreshCw,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { Card } from "@/components/ui/card";
import { getAllCategories } from "@/api/allCategories.api";
import { ICatrgory } from "@/types/category.interface";
import { getAllProducts } from "@/api/allProducts.api";
import { IProducts } from "@/types/products.interface";
import AllProducts from "@/_components/AllProducts/page";

const features = [
  {
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: Truck,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Secure Payment",
    description: "100% secure transactions",
    icon: ShieldCheck,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Easy Returns",
    description: "14-day return policy",
    icon: RotateCcw,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team",
    icon: Headset,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];
const promotions = [
  {
    id: 1,
    badge: "🔥 Deal of the Day",
    title: "Fresh Organic Fruits",
    description: "Get up to 40% off on selected organic fruits",
    discount: "40% OFF",
    coupon: "ORGANIC40",
    buttonText: "Shop Now",
    href: "/products?category=fruits",
    gradient: "from-emerald-500 to-emerald-700",
    badgeColor: "bg-white/20",
    buttonColor: "text-emerald-700",
  },
  {
    id: 2,
    badge: "✨ New Arrivals",
    title: "Exotic Vegetables",
    description: "Discover our latest collection of premium vegetables",
    discount: "25% OFF",
    coupon: "FRESH25",
    buttonText: "Explore Now",
    href: "/products?category=vegetables",
    gradient: "from-orange-500 to-rose-500",
    badgeColor: "bg-white/20",
    buttonColor: "text-orange-600",
  },
];

// Products data

export default async function Home() {
  const { data: categoties } = await getAllCategories();
  const categoriesList = categoties;
  const { data: products } = await getAllProducts();
  const productsList = products;

  return (
    <>
      <section className="w-full bg-white">
        {/* Features Section */}
        <div className="bg-slate-50 px-4 py-5 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1720px] grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="flex min-h-[92px] flex-row items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div
                    className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full ${feature.bgColor}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${feature.iconColor}`}
                      strokeWidth={2.7}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-0.5 text-sm text-slate-500 sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Categories Section */}
        <div className="mx-auto max-w-[1800px] px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          {/* Section Heading */}
          <div className="mb-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-9 w-[6px] rounded-full bg-emerald-600" />

              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Shop By <span className="text-emerald-600">Category</span>
              </h2>
            </div>

            <Link
              href="/categories"
              className="group flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700 sm:text-base"
            >
              View All Categories
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {categoriesList.map((category: ICatrgory) => (
              <Link
                key={category._id}
                href={"categories"}
                className="group block"
              >
                <Card className="flex min-h-[168px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md">
                  {/* Category Image */}
                  <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-full bg-slate-100 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="90px"
                      className="object-contain"
                    />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-center text-base font-medium text-slate-800 transition-colors group-hover:text-emerald-600">
                    {category.name}
                  </h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full  px-4 pb-12 pt-2 sm:px-6">
        {/* Promotional Banners */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {promotions.map((promotion) => (
            <div
              key={promotion.id}
              className={`relative isolate min-h-[188px] overflow-hidden rounded-xl bg-gradient-to-br ${promotion.gradient} p-5 text-white`}
            >
              {/* Decorative circles */}
              <div className="pointer-events-none absolute -right-8 -top-8 -z-10 h-28 w-28 rounded-full bg-white/10" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-20 w-20 rounded-full bg-white/10" />

              {/* Badge */}
              <span
                className={`inline-flex rounded-full ${promotion.badgeColor} px-3 py-1 text-[10px] font-semibold`}
              >
                {promotion.badge}
              </span>

              {/* Content */}
              <h2 className="mt-2 text-lg font-bold leading-tight">
                {promotion.title}
              </h2>

              <p className="mt-1 text-[11px] font-medium text-white/90">
                {promotion.description}
              </p>

              {/* Discount */}
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className="text-xl font-extrabold">
                  {promotion.discount}
                </span>

                <span className="text-[9px] text-white/90">
                  Use code: <strong>{promotion.coupon}</strong>
                </span>
              </div>

              {/* Button */}
              <Button
                size="sm"
                className={`mt-3 h-8 rounded-full bg-white px-4 text-[10px] font-semibold hover:bg-white/90 ${promotion.buttonColor}`}
              >
                <Link href={promotion.href} className="flex items-center">
                  {promotion.buttonText}
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <AllProducts />
      </section>
    </>
  );
}
