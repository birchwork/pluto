import { Swap } from "~/components/swap";

export default function HomePage() {
  return (
    <main className="flex h-full flex-1 gap-6 border bg-background/50 pt-6 backdrop-blur-3xl lg:pt-16">
      <div className="container flex justify-center">
        <div className="w-full max-w-2xl">
          <Swap />
        </div>
      </div>
    </main>
  );
}
