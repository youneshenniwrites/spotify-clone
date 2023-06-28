"use client";

import { useRouter } from "next/navigation";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {};

  return <div>Header</div>;
};
