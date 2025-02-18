import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const metadata = {
  metadataBase: new URL("https://manumorante.com"),

  title: "Manu Morante",
  description:
    "Portfolio of Manu Morante, a software engineer and web developer",
  openGraph: {
    images: [
      {
        url: "/og/manumorante.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased text-gray-800 min-h-full">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
