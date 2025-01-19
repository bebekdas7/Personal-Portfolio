import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Bebek das',
    default:
      'Bebek das - Software engineer, designer, and cloud architect',
  },
  description:
    'I’m Bebek Das, a software engineer and entrepreneur based in India. I’m the founder of a startup aimed at revolutionizing social connections with a focus on privacy, safety, and innovation. With expertise in frontend and backend development, I’m passionate about crafting solutions that empower individuals and make technology more accessible and meaningful.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
