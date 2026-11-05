"use client"

import {
  ShoppingCart,
  Search,
  Heart,
  Headset,
  UserRound,
  Menu,
  ChevronDown,
  Leaf,
  
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Mail, Phone, User, UserRoundArrowLeft, Van } from "lucide-react";
import  Link  from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export default function Navbar() {

    const categories = [
  "All Categories",
  "Electronics",
  "Women's Fashion",
  "Men's Fashion",
  "Beauty & Health",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Brands", href: "/brands" },
];
  return (
    <>
      <div className="flex justify-between">
        <div className=" m-2 flex gap-4">
          <div className="flex gap-3">
            <Van color="#16a34a" />
            <h2 className="text-gray-600 text-xl">
              Free Shipping on Orders 500 EGP
            </h2>
          </div>
          <div className="flex gap-3">
            <Gift color="#16a34a" />
            <h2 className="text-gray-600 text-xl">New Arrivals Daily</h2>
          </div>
        </div>
        <div className=" m-2 flex gap-4">
          {" "}
          <div className="flex gap-3">
            <Phone color="#16a34a" />
            <h2 className="text-gray-600 text-xl">+1 (800) 123-4567</h2>
          </div>
          <div className="flex gap-3">
            <Mail color="#16a34a" />
            <h2 className="text-gray-600 text-xl">support@freshcart.com</h2>
          </div>
          <Link href={'/login'}>
          <div className="flex gap-3">
            <User color="#16a34a" />
            <h2 className="text-gray-600 text-xl">Sign In</h2>
          </div></Link>
          <Link href={'/register'}>
            <div className="flex gap-3">
              <UserRoundArrowLeft color="#16a34a" />
              <h2 className="text-gray-600 text-xl">Sign Up</h2>
            </div>
          </Link>
        </div>
      </div>

      <header className=" z-50 w-full border-b border-gray-100 bg-white sticky top-0">
      <div className="mx-auto flex min-h-[92px] max-w-[1920px] items-center gap-5 px-4 py-3 lg:px-6 xl:gap-8">
        
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-[#263746]"
          aria-label="FreshCart Home"
        >
          <ShoppingCart
            className="h-8 w-8 text-[#16a34a]"
            strokeWidth={1.8}
          />
          <span className="text-[28px] font-bold tracking-tight">
            FreshCart
          </span>
        </Link>

        
        <form
          role="search"
          className="relative hidden min-w-0 flex-1 md:block md:max-w-[700px] xl:ml-4"
        >
          <Input
            name="search"
            type="search"
            placeholder="Search for products, brands and more..."
            aria-label="Search products"
            className="h-[58px] rounded-full border border-gray-200 bg-[#fcfcfd] pl-6 pr-[68px] text-base shadow-none placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-green-600"
          />

          <Button
            type="submit"
            size="icon"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 h-[46px] w-[46px] -translate-y-1/2 rounded-full bg-[#16a34a] text-white hover:bg-[#15803d]"
          >
            <Search className="h-5 w-5" />
          </Button>
        </form>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden shrink-0 items-center gap-6 lg:flex xl:gap-7"
        >
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[18px] font-medium text-[#172033] transition-colors hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}

          
          <DropdownMenu>
            <DropdownMenuTrigger >
              <Button
                variant="ghost"
                className="gap-1 px-0 text-[18px] font-medium border-gray-100 hover:bg-transparent hover:text-green-700"
              >
                Categories
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              sideOffset={14}
              className="w-[250px] rounded-2xl border border-gray-100 bg-white p-2 shadow-lg"
            >
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  
                  className="cursor-pointer rounded-lg px-3 py-3 text-base text-slate-600 focus:bg-green-50 focus:text-green-700"
                >
                  <Link
                    href={`/products?category=${encodeURIComponent(category)}`}
                  >
                    {category}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={navLinks[2].href}
            className="whitespace-nowrap text-[18px] font-medium text-[#172033] transition-colors hover:text-green-600"
          >
            Brands
          </Link>
        </nav>

        
        <Link
          href=""
          className="hidden shrink-0 items-center gap-2.5 xl:flex"
        >
          <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green-50 text-[#16a34a]">
            <Headset className="h-6 w-6" strokeWidth={2.5} />
          </span>

          <span className="whitespace-nowrap leading-6">
            <span className="block text-[17px] text-slate-400">
              Support
            </span>
            <span className="block text-[17px] font-medium text-slate-700">
              24/7 Help
            </span>
          </span>
        </Link>

        <Separator
          orientation="vertical"
          className="hidden h-12 w-px xl:block"
        />

       
        <Link
          href="/wishlist"
          aria-label="Wishlist"
          className="hidden shrink-0 text-slate-500 transition-colors hover:text-green-600 sm:flex"
        >
          <Heart className="h-[27px] w-[27px]" strokeWidth={2} />
        </Link>

        
        <Link
          href="/cart"
          aria-label="Shopping cart"
          className="hidden shrink-0 text-slate-500 transition-colors hover:text-green-600 sm:flex"
        >
          <ShoppingCart className="h-[28px] w-[28px]" strokeWidth={2} />
        </Link>
        <Button
          
          className="hidden h-[52px] shrink-0 rounded-full bg-[#16a34a] px-6 text-base font-semibold text-white shadow-sm hover:bg-[#15803d] sm:flex"
        >
          <Link href="/login">
           <div className="flex gap-3 items-center">
            <User color="#fff" size={'26px'}/>
            <h2 className=" text-xl">Sign In</h2>
          </div>
            
          </Link>
        </Button>
      </div>
    </header>
    </>
  );
}
