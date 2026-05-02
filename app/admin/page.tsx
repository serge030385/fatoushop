"use client";

import { AdminPanel } from "@/components/admin-panel";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export default function AdminPage() {
  const { t } = useI18n();
  return (
    <main>
      <PageHeader
        eyebrow={t.pages.admin.eyebrow}
        title={t.pages.admin.title}
        description={t.pages.admin.description}
      />
      <section className="px-4 pb-12 md:px-6">
        <div className="mx-auto max-w-6xl">
          <AdminPanel />
        </div>
      </section>
    </main>
  );
}
