"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle, MailBadge } from "lucide-react";
import { registerSchema, registerSchemaType } from "../schema/register.schema";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Register() {
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const form = useForm<registerSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(registerSchema),
    mode: "all",
  });

  interface FormField {
    name: "name" | "email" | "password" | "rePassword" | "phone";
    placeholder: string;
    type: string;
    autoComplete: string;
  }
  const formInputs: FormField[] = [
    {
      name: "name",
      placeholder: "Enter Your Name",
      type: "text",
      autoComplete: "name",
    },
    {
      name: "email",
      placeholder: "Enter Your Email",
      type: "email",
      autoComplete: "email",
    },
    {
      name: "phone",
      placeholder: "Enter Your Phone",
      type: "tel",
      autoComplete: "phone",
    },
    {
      name: "password",
      placeholder: "Enter Your Password",
      type: "password",
      autoComplete: "password",
    },
    {
      name: "rePassword",
      placeholder: "Enter Your Repassword",
      type: "password",
      autoComplete: "password",
    },
  ];

  const handleResgister = async (values: registerSchemaType) => {
    try {
      setisLoading(true);
      const respones = await fetch(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await respones.json();
      if(data.message == 'success'){
        toast.success(data.message,{position:"bottom-left",delay:2000,autoClose:1500});
        router.push('/login')

      }
      else{
        toast.error(data.message,{position:"bottom-left",delay:2000,autoClose:1500});
      }
    } catch (error) {
        toast.error("Something went wrong",{position:"bottom-left",delay:2000,autoClose:1500});
      
    } finally {
      setisLoading(false);
    }
  };

  return (
    <>
      <div className="w-[90%] lg:w-[60%] shadow-2xl p-5 mx-auto my-5 rounded-2xl">
        <h2 className="text-xl text-center">
          {" "}
          Welcome to FreshCart , Shignup here:
        </h2>

        <form
          onSubmit={form.handleSubmit(handleResgister, (errors) => {
          })}
        >
          {formInputs.map((input) => (
            <Controller
              key={input.name}
              name={input.name}
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    className="my-4 p-5"
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder={input.placeholder}
                    autoComplete={input.autoComplete}
                    type={input.type}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          ))}
          <p>
            Already have an account?{" "}
            <Link href={"/login"} className="text-green-600">
              Sign In
            </Link>
          </p>
          <Button
          disabled={isLoading}
            type="submit"
            className="w-full bg-green-600 hover:bg-green-800 transition-all cursor-pointer duration-300"
          >
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <>
                Sign Up <MailBadge />
              </>
            )}
          </Button>
        </form>
      </div>
    </>
  );
}
