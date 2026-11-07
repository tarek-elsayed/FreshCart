"use client";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { KeyRound, LoaderCircle } from "lucide-react";

import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loginSchema, loginSchemaType } from "../schema/login.schema";
import { signIn } from "next-auth/react";

export default function Login() {
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();
  const form = useForm<loginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  interface FormField {
    name: "email" | "password";
    placeholder: string;
    type: string;
    autoComplete: string;
  }
  const formInputs: FormField[] = [
    {
      name: "email",
      placeholder: "Enter Your Email",
      type: "email",
      autoComplete: "email",
    },

    {
      name: "password",
      placeholder: "Enter Your Password",
      type: "password",
      autoComplete: "password",
    },
  ];

  const handleLogin = async (values: loginSchemaType) => {
    setisLoading(true);
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      // const data =await response;

      if (response?.ok == true) {
        toast.success("Login Successfully", {
          position: "top-right",
          delay: 2000,
          autoClose: 1500,
        });
        setTimeout(() => {
          router.push('/')
        }, 2000);
      }
    } catch (error) {
      setisLoading(false);
    } finally {
      setisLoading(false);
    }
    // try {
    //   const respones = await fetch(
    //     `https://ecommerce.routemisr.com/api/v1/auth/signin`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify(values),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     },
    //   );
    //   const data = await respones.json();
    //   if (data.message == "success") {
    //     toast.success(data.message, {
    //       position: "bottom-left",
    //       delay: 2000,
    //       autoClose: 1500,
    //     });
    //     router.push("/");
    //   } else {
    //     toast.error(data.message, {
    //       position: "bottom-left",
    //       delay: 2000,
    //       autoClose: 1500,
    //     });
    //   }
    // } catch (error) {
    //   toast.error("Something went wrong", {
    //     position: "bottom-left",
    //     delay: 2000,
    //     autoClose: 1500,
    //   });
    // } finally {
    //   setisLoading(false);
    // }
  };

  return (
    <>
      <div className="w-[90%] lg:w-[60%] shadow-2xl p-5 mx-auto my-5 rounded-2xl">
        <h2 className="text-xl text-center">
          {" "}
          Welcome to FreshCart , SignIn here:
        </h2>

        <form onSubmit={form.handleSubmit(handleLogin, (errors) => {})}>
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
            Have an account?{" "}
            <Link href={"/register"} className="text-green-600">
              Sign Up
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
                Login <KeyRound />
              </>
            )}
          </Button>
        </form>
      </div>
    </>
  );
}
