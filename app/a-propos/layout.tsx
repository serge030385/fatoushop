import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { SeoBreadcrumbs } from "@/components/seo-breadcrumbs";

export const metadata = pageMetadata("/a-propos");

export default function Layout({ children }: { children: ReactNode }) {
  return <><SeoBreadcrumbs path="/a-propos" />{children}</>;
}
