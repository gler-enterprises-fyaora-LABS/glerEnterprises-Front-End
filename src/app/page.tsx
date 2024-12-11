// pages/index.js
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
      <div>
        <h1 className="prose">Welcome to My App</h1>
        <ul>
          <li>
            <Link href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register">
              Register
            </Link>
          </li>
          <li>
            <Link href="/forgot-password">
              Forgot Password
            </Link>
          </li>
          <li>
            <Link href="/verify-email">
              Verify Email
            </Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">
                Terms and conditions
            </Link>
          </li>
        </ul>
      </div>
  );
}
