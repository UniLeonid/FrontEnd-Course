import Button from "@/components/Button";
import Link from "next/link";
import { XkcdResponse } from "@/utils/xkcd";
import Image from "next/image";

export default function Comic({ xkcd }: { xkcd?: XkcdResponse }) {
  return (
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
          <Image
            width={740}
            height={305}
            className="xkcd-image"
            src={xkcd.img}
            alt={xkcd.alt}
          />
        </div>
      )}
    </div>
  );
}
