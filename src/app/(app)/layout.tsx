import { Nav } from "~/components/nav";

interface APPLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: APPLayoutProps) {
  return (
    <div className="flex h-screen flex-col space-y-6 pt-10">
      <Nav />
      <div className="flex-1">{children}</div>
    </div>
  );
}
