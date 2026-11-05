import z, { object } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "name must be at least 3 charcters")
      .max(15, "name must be at most 15 charcters")
      .min(1, "name is required"),
    email: z
      .string()
      .min(1, "email is requried")
      .pipe(z.email("invalied email")),
    password: z
      .string()
      .min(1, "password is requried")
      .min(6, "password must be at least 6 charcters"),
    rePassword: z
      .string()
      .min(1, "rePassword is requried")
      .min(6, "rePassword must be at least 6 charcters"),
    phone: z
      .string()
      .min(1, "pohone is required")
      .regex(/^01[0125][0-9]{8}$/, "phone must be egypt number"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });

export type registerSchemaType = z.infer<typeof registerSchema>;
