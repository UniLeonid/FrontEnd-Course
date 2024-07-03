"use client";

import { useEffect, useState } from "react";
import { XkcdResponse, fetchXkcd } from "@/utils/xkcd";
import Comic from "@/components/Comic";

export default function ComicPage() {
  const [xkcd, setXkcd] = useState<XkcdResponse>();

  useEffect(() => {
    fetchXkcd().then((xkcd) => {
      setXkcd(xkcd);
    });
  }, []);

  return (
    <main id="xkcd-main">
      <Comic xkcd={xkcd}></Comic>
    </main>
  );
}
