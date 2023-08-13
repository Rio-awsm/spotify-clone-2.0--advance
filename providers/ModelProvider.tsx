"use client";

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

const ModelProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
   setIsMounted(true);
  }, []);

  if(!isMounted) {
    return null;
  }

  return (
  <>
  <AuthModal />
  </>
  );
};

export default ModelProvider;
