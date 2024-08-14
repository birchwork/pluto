import { Card } from "./ui/card";
import { TokenViewer } from "./token-viewer";
import { Input } from "./ui/input";

export function Swap() {
  return (
    <Card className="space-y-2 px-6 py-4">
      <span className="mb-2 text-xs font-normal text-foreground/50">
        You&apos;re selling
      </span>
      <div className="flex items-center justify-between focus-visible:bg-background">
        <TokenViewer />
        <Input
          type="number"
          placeholder="0.0"
          className="border-no h-10 text-end text-lg tracking-wide outline-none focus-visible:ring-0"
        />
      </div>
    </Card>
  );
}
