import { Metadata } from 'next';
import { ReactNode } from 'react';

export async function generateMetadata({
  params,
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const ogpTitle = "AIペンシル - AIイラストのSNSサイト";
  const ogpUrl = `https://cfa-backend-dev.s3.us-east-1.amazonaws.com/ogp/${params.id}.png`;
  const description =
  "AIペンシルは、AIイラストを“作る・投稿する・見つける”ためのSNSです。生成したAIイラストの投稿やシェアはもちろん、好みの作品を発見してクリエイター同士の交流を楽しめます。";

  return {
    title: ogpTitle,
    description: description,
    openGraph: {
      title: ogpTitle,
      description: description,
      images: [
        {
          url: ogpUrl,
          width: 1200,
          height: 630,
          alt: ogpTitle,
        },
      ],
      type: 'website',
      url: ogpUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogpTitle,
      description: ogpTitle,
      images: [ogpUrl],
    },
  };
}

// レイアウトコンポーネント
export default async function WorkLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { id: string; locale: string };
}) {
  return (
    <>
      {children}
    </>
  )
}