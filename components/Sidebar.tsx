import React from "react";

type SideBarPros = {
  children: React.ReactNode;
};

export const Sidebar = ({ children }: SideBarPros) => {
  return <div>{children}</div>;
};
