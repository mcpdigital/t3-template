import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/reports">Reports</NavLink>
        <NavLink href="/search">Search</NavLink>
      </Nav>

      <div className="container my-6">{children}</div>
    </>
  );
}
