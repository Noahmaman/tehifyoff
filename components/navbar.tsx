import dynamic from 'next/dynamic';

// Server component wrapper
export function NavbarWrapper() {
  const Navbar = dynamic(() => import('./navbar-client'), {
    ssr: false,
  });

  return <Navbar />;
}