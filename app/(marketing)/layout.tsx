import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
