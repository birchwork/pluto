"use client";

import { Button } from "./ui/button";

export function TokenViewer() {
  return (
    <Button
      variant="ghost"
      disabled
      className="flex h-8 items-center gap-2 bg-muted/50 px-2 py-1.5 md:h-10 md:px-3 md:py-2"
    >
      <span className="uppercase">Connect Wallet</span>
    </Button>
  );
}
