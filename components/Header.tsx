"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [subPath, setSubPath] = useState<string | null>(null);
  const open = menuPath === pathname;
  const subOpen = subPath === pathname;
  const panelId = useId();
  const subId = useId();

  useEffect(() => {
    if (!open && !subOpen) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuPath(null);
        setSubPath(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, subOpen]);

  return (
    <header className="site-header">
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
              const children = "children" in item ? item.children : null;
              const current =
                pathname === item.href || (children?.some((child) => child.href === pathname) ?? false);
              return (
                <li key={item.href} className={children ? (subOpen ? "has-sub is-open" : "has-sub") : undefined}>
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : current ? "true" : undefined}>
                    {item.label}
                  </Link>
                  {children ? (
                    <>
                      <button
                        type="button"
                        className="sub-toggle"
                        aria-expanded={subOpen}
                        aria-controls={subId}
                        aria-label={`${item.label} services`}
                        onClick={() => setSubPath((value) => (value === pathname ? null : pathname))}
                      >
                        <span aria-hidden="true">▾</span>
                      </button>
                      <ul id={subId} className="sub-list">
                        {children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} aria-current={pathname === child.href ? "page" : undefined}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </li>
              );
            })}
            <li className="nav-cta">
              <Link className="button" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
