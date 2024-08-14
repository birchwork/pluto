import { BreadCrumbs } from "./breadcrumbs";
import { Wallet } from "./wallet";

export function Nav() {
  return (
    <div className="flex items-center justify-between pr-10">
      <div className="flex h-10 items-center justify-center">
        <BreadCrumbs withHome />
      </div>
      <div>
        <Wallet />
      </div>
    </div>
  );
}
