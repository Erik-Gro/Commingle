"use client";

import { CreateChannelModal } from "@/features/channels/components/CreateChannelModal";
import { CreateWorkspaceModal } from "@/features/workspaces/components/CreateWorkspaceModal";
import { useEffect, useState } from "react";

export const Modals = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateChannelModal />
      <CreateWorkspaceModal />
    </>
  );
};
