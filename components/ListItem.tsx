"use client";

import { useRouter } from "next/navigation";

type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

export const ListItem = ({ image, name, href }: ListItemProps) => {
  const router = useRouter();
  return <button></button>;
};
