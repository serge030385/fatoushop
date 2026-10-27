import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { SeoBreadcrumbs } from "@/components/seo-breadcrumbs";

export const metadata = pageMetadata("/reservation");

export default function Layout({ children }: { children: ReactNode }) {
  return <><SeoBreadcrumbs path="/reservation" />{children}</>;
}
