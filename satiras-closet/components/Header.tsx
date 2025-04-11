import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBagIcon, UserIcon, Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    { name: "Women's Clothing", href: "/category/womens-clothing" },
    { name: "Books", href: "/category/books" },
    { name: "Furniture", href: "/category/furniture" },
    { name: "Beauty", href: "/category/beauty" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-primary-900">Satira&apos;s Closet</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-secondary-700 hover:text-primary-900 hover:bg-primary-50"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link href="/account" className="p-2 rounded-full text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <span className="sr-only">Account</span>
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="/cart" className="p-2 rounded-full text-secondary-500 hover:text-secondary-700 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 relative">
              <span className="sr-only">Shopping cart</span>
              <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
              <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-primary-600 ring-2 ring-white text-xs font-medium text-white text-center">0</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-secondary-100">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-secondary-700 hover:text-primary-900 hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; 