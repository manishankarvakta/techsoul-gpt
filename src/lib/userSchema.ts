import { z } from "zod";

const userSignInSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string(),
  password: z.string().min(6, "Password at least 6 characters"),
});

export default userSignInSchema;
