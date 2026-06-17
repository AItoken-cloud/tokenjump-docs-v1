import { redirect } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  redirect(`/${lang}/docs/guide/feature-guide/user/auth`);
}

export async function generateStaticParams() {
  return ['en', 'zh', 'ja'].map((lang) => ({ lang }));
}
