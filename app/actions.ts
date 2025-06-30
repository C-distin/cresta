"use server";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

interface SignUpParams {
  email: string;
  password: string;
  name: string;
  username: string;
}

export async function signUp({ email, password, name, username }: SignUpParams) {
  try {} catch (error) {
    const err = error as Error;
    console.error("Sign Up Error:", err.message);

    return { success: false, error: err.message };  
  }
}