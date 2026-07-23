"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-10 py-4 shadow-sm bg-[var(--brand-light)] sticky top-0 z-50 gap-4">
      <div className="flex items-center gap-3 text-[var(--brand-dark)]">
        <svg className="h-8 w-8 text-[var(--brand-primary)]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <Link href="/" className="text-xl font-bold tracking-tight">StudyHub</Link>
      </div>
      <div className="flex-1 max-w-lg hidden md:block">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
            </svg>
          </span>
          <input className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]" placeholder="Search for projects and notes..." type="text"/>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-[var(--brand-dark)]">
        <a className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors" href="/project-marketplace">Explore Projects</a>
        <a className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors" href="/notes-marketplace">Explore Notes</a>
        <a className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors" href="/buyer-dashboard">Buyer Dashboard</a>
        <a className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors" href="/seller-dashboard">Seller Dashboard</a>
      </nav>
      <div className="flex items-center gap-4">
        <Link className="text-sm font-medium text-[var(--brand-dark)] hover:text-[var(--brand-primary)] transition-colors" href="/login">Login</Link>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-[var(--brand-primary)] text-[var(--brand-light)] text-sm font-bold shadow-md hover:bg-indigo-700 transition-all">
          <span className="truncate">Sign up</span>
        </button>
      </div>
    </header>
  );
}