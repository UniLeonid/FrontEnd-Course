"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import { XkcdResponse, fetchXkcd } from "@/utils/xkcd";
import Image from "next/image";

export default function ComicPage() {
  const [xkcd, setXkcd] = useState<XkcdResponse>();

  useEffect(() => {
    fetchXkcd().then((xkcd) => {
      setXkcd(xkcd);
    });
  }, []);

  return (
    <main id="xkcd-main">
      <div className="container xkcd-container">
        <div className="xkcd-full-title">
          <Link href={"/"} legacyBehavior>
            <Button>Back</Button>
          </Link>

          <h1 className="xkcd-title">
            {xkcd ? xkcd.safeTitle : "Fetching data..."}
          </h1>

          {xkcd && (
            <a>
              {"Published at " +
                xkcd.date.toLocaleDateString() +
                " | " +
                xkcd.fromNow}
            </a>
          )}
        </div>

        {xkcd && (
          <div className="xkcd-image-div">
            <img
              className="xkcd-image"
              src={xkcd.img}
              alt={xkcd.alt}
            />
          </div>
        )}
      </div>
    </main>
  );
}
