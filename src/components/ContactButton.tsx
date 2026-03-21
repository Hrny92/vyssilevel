"use client";

import type { ReactNode } from "react";
import { useContactModal } from "@/context/ContactModalContext";

interface ContactButtonProps {
  children: ReactNode;
  className?: string;
}

export default function ContactButton({ children, className }: ContactButtonProps) {
  const { open } = useContactModal();

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
