import { z } from "zod";

const publicEnvSchema = z
  .object({
    NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  })
  .superRefine((env, context) => {
    const hasUrl = Boolean(env.NEXT_PUBLIC_SUPABASE_URL);
    const hasKey = Boolean(env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    if (hasUrl !== hasKey) {
      context.addIssue({
        code: "custom",
        message: "Supabase URL and anon key must be provided together.",
        path: [hasUrl ? "NEXT_PUBLIC_SUPABASE_ANON_KEY" : "NEXT_PUBLIC_SUPABASE_URL"],
      });
    }
  });

export const publicEnv = publicEnvSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});
