"use client";

import { useState } from "react";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";
import ScrollProgress from "./ScrollProgress";
import SearchOverlay from "./SearchOverlay";
import SmoothScroll from "./SmoothScroll";

export default function ClientShell({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SmoothScroll />
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <div className="noise-overlay" />
      <div className="site-shell">
        {children}
        <Footer />
      </div>
    </>
  );
}
