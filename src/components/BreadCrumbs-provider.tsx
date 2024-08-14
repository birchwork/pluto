"use cleint";

import { useState, useMemo } from "react";
import { BreadCrumbsContext } from "~/app/context/breadcrumbs-context";

type BreadCrumbsProviderProps = {
  children: React.ReactNode;
};

export const BreadCrumbsProvider = ({ children }: BreadCrumbsProviderProps) => {
  const [trailingPath, setTrailingPath] = useState("");

  const contextValue = useMemo(
    () => ({
      trailingPath,
      setTrailingPath,
    }),
    [trailingPath],
  );

  return (
    <BreadCrumbsContext.Provider value={contextValue}>
      {children}
    </BreadCrumbsContext.Provider>
  );
};
