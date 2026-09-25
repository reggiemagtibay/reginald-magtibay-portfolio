import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://reginald-magtibay-portfolio.pages.dev"),
  title: {
    default: "Reggie | Strategy, data & digital culture",
    template: "%s | Reggie",
  },
  description: "Portfolio of Reginald Magtibay — digital strategy, marketing analytics and research.",
  authors: [{ name: "Reginald Magtibay" }],
  creator: "Reginald Magtibay",
  openGraph: {
    type: "website",
    siteName: "REGGIE.",
    title: "Reggie | Strategy, data & digital culture",
    description: "Digital strategy, marketing analytics and research by Reginald Magtibay.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reggie | Strategy, data & digital culture",
    description: "Digital strategy, marketing analytics and research by Reginald Magtibay.",
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
