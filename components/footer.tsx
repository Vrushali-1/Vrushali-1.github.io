import React from "react";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Vrushali. All rights reserved.
      </small>
      <div className="mb-10 px-4 text-center text-gray-500">
  <div className="flex justify-center items-center space-x-4">
    <a
      href="https://www.instagram.com/vrushalipatil_01/?next=%2F"
      target="_blank"
      rel="noopener noreferrer" // Added for security reasons
      className="inline-block" // Ensure the anchor tag is inline-block if the icons are block-level elements
    >
      <CiInstagram className="inline-block"/> {/* Apply inline-block if needed */}
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=100007412357373&mibextid=ZbWKwLF"
      target="_blank"
      rel="noopener noreferrer" // Added for security reasons
      className="inline-block" // Ensure the anchor tag is inline-block if the icons are block-level elements
    >
      <CiFacebook className="inline-block"/> {/* Apply inline-block if needed */}
    </a>
  </div>
</div>


    </footer>
  );
}
