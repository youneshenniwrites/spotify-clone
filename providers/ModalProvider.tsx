"use client";

import { AuthModal } from "@/components/AuthModal";
import { useMounted } from "@/hooks/useMounted";

export const ModalProvider = () => {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};
