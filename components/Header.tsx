"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuPath(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="rail" />
      <div className="wrap header-bar">
        <Link href="/" className="logo-link">
          <Logo priority />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setMenuPath((current) => (current === pathname ? null : pathname))}
          >
            {open ? "Close" : "Menu"}
          </button>
          <ul id={panelId} className={open ? "nav-list is-open" : "nav-list"}>
            {nav.map((item) => {
              const current = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
