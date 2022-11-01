import React from "react";

export const Footer = ({ position = 'sticky' }: { position?: 'sticky' | 'fixed' }) => {
  return (
    <footer className={`${position} bottom-0 p-6 text-mainColor text-center mx-auto w-full bg-gray-200 text-2xl font-bold`}>
      <h2>Movie-App</h2>
    </footer>
  );
};