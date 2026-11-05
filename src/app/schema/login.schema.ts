import z, { object } from "zod";

export const loginSchema = z
  .object({
   
    email: z
      .string()
      .min(1, "email is requried")
      .pipe(z.email("invalied email")),
    password: z
      .string()
      .min(1, "password is requried")
      .min(6, "password must be at least 6 charcters"),
   
  });

export type loginSchemaType = z.infer<typeof loginSchema>;
