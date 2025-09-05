"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function VerifyEmailPage() {
  const [token, settoken] = useState("");
  const [verified, setverified] = useState(false);
  const [error, seterror] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setverified(true);
    } catch (error: unknown) {
      seterror(true);
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log("An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    settoken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-3">
      <h1 className="text-4xl border-2 bg-black text-shadow-teal-400 p-2">
        Verify Email
      </h1>
      <h2 className="p-2 bg-orange-500 rounded-md border-2  text-black">
        {token ? `${token}` : "no token"}
      </h2>

      {verified && (
        <div>
          <h2 className="text-2xl">Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-2xl bg-red-500 text-black">Error</h2>
        </div>
      )}
    </div>
  );
}
