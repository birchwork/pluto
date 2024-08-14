"use client";

import {
  useConnectWallet,
  useCreateSessionKey,
  useCurrentAddress,
  useCurrentSession,
  useRemoveSession,
  useRoochClientQuery,
  UseSignAndExecuteTransaction,
  useWallets,
  useWalletStore,
} from "@roochnetwork/rooch-sdk-kit";
import { Button } from "./ui/button";
import { shortAddress, shortAddressTwoChars } from "~/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ChevronDown, LogOut, Copy } from "lucide-react";
import copy from "copy-text-to-clipboard";

export function Wallet() {
  const wallets = useWallets();
  const sessionKey = useCurrentSession();
  const currentAddress = useCurrentAddress();
  const connectionStatus = useWalletStore((state) => state.connectionStatus);
  const setWalletDisconnected = useWalletStore(
    (state) => state.setWalletDisconnected,
  );
  const { mutateAsync: connectWallet } = useConnectWallet();

  const { mutateAsync: createSessionKey } = useCreateSessionKey();
  const { mutateAsync: removeSessionKey } = useRemoveSession();
  const { mutateAsync: signAndExecuteTransaction } =
    UseSignAndExecuteTransaction();

  const connectHandle = async () => {
    await connectWallet({ wallet: wallets[0]! });
  };

  const disConnectHandle = async () => {
    setWalletDisconnected();
  };

  const copyAddressHandle = async () => {
    if (currentAddress?.genRoochAddress().toStr()) {
      copy(currentAddress?.genRoochAddress().toStr());
    }
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {connectionStatus !== "connected" ? (
        <Button
          variant="ghost"
          onClick={connectHandle}
          className="flex h-8 items-center gap-4 rounded-full bg-muted/50 px-2 py-1.5 md:h-10 md:px-3 md:py-2"
        >
          Connect Wallet
        </Button>
      ) : (
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-7 w-7 items-center justify-center border-2 border-[#5C5D5E] sm:flex">
            <AvatarImage src="/avatars/05.png" alt="Avatar" />
            <AvatarFallback>
              {shortAddressTwoChars(
                currentAddress?.genRoochAddress().toStr().toUpperCase(),
              )}
            </AvatarFallback>
          </Avatar>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="flex h-8 items-center gap-4 rounded-full bg-muted/50 px-2 py-1.5 md:h-10 md:px-3 md:py-2"
              >
                <div className="flex items-center gap-2 uppercase">
                  {shortAddress({
                    address: currentAddress?.genRoochAddress().toStr(),
                    start: 8,
                    end: 6,
                  })}
                  <ChevronDown className="h-4 w-4" />
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="gaa-2 flex w-48 flex-col justify-center p-0">
              <Button
                className="flex w-48 items-center justify-between gap-2 rounded-none px-4 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground"
                variant={"ghost"}
                onClick={copyAddressHandle}
              >
                <span>Copy Wallet Address</span>
                <Copy className="h-4 w-4" />
              </Button>
              <div
                className="h-[1px] w-full shrink-0 bg-border"
                data-orientation="horizontal"
                role="nonde"
              />
              <Button
                className="flex w-48 items-center justify-between gap-2 rounded-none px-4 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground"
                variant={"ghost"}
                onClick={disConnectHandle}
              >
                <span>Disconnect Wallet</span>
                <LogOut className="h-4 w-4" />
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
}
