import { Logo } from "./logo";

export function Sider() {
  return (
    <div className="container fixed top-10 z-30 hidden h-[calc(100vh-3.5rem)] shrink-0 items-center space-y-6 px-4 md:sticky md:flex md:flex-col">
      <Logo />
      <div className="flex h-full flex-col items-center justify-center space-y-10">
        <div className="flex h-44 w-full items-center justify-center">
          return
        </div>
        <div className="w-full space-y-20">
          <div className="flex h-44 items-center justify-center">1</div>
          <div className="flex h-44 items-center justify-center">2</div>
        </div>
      </div>
    </div>
  );
}
