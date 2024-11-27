"use server";

import { getIronSession } from "iron-session";
import { defaultSession, sessionOptions } from "./lib";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = process.env.ADMIN;
let password = process.env.PASSWORD;

export async function getSession() {
  const cookieStore = cookies();
  const session = await getIronSession(cookieStore, sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
}

export async function login(prevState, formData) {
  const session = await getSession();

  const formUsername = formData.get("username");
  const formPassword = formData.get("password");

  if (formUsername !== username || formPassword !== password) {
    return { error: "Wrong Credentials!" };
  }

  session.userId = "1";
  session.username = formUsername;
  session.isLoggedIn = true;

  await session.save();
  return redirect("/dashboard");
}
