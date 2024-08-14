"use client";

import { networkConfig } from "~/config/newwork";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RoochProvider, WalletProvider } from "@roochnetwork/rooch-sdk-kit";

interface RoochProviderWrapperProps {
  children: React.ReactNode;
}

export function RoochProviderWrapper({ children }: RoochProviderWrapperProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RoochProvider networks={networkConfig} defaultNetwork="testnet">
        <WalletProvider chain={"bitcoin"} autoConnect>
          {children}
        </WalletProvider>
      </RoochProvider>
    </QueryClientProvider>
  );
}
