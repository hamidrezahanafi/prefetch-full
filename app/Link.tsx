"use client";

import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch(href, { kind: PrefetchKind.AUTO });
  }, [href, router]);
  return (
    <a
      href={href}
      style={{ padding: "50px", backgroundColor: "red"}}
      onMouseEnter={() => router.prefetch(href, { kind: PrefetchKind.FULL })}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
    >
      {children}
    </a>
  );
};
