import Link from "next/link";
import React from "react";

export default function UserModal() {
  return (
    <div>
      <button>User</button>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <ul>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}
