"use client";

import { PrefetchKind } from "next/dist/client/components/router-reducer/router-reducer-types";
import { useRouter } from "next/navigation";

export const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <a
      href={href}
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
