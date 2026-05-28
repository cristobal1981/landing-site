import { SiteChatWidget } from "@/components/chat/site-chat-widget"
import { Header, Footer } from "@/src/modules/landing/ui"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">{children}</div>
      <Footer />
      <SiteChatWidget />
    </>
  )
}
