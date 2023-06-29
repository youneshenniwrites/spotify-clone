"use client";

import { useMounted } from "@/hooks/useMounted";

export const ModalProvider = () => {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return <div>Hi</div>;
};
