import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import "./globals.css";
import { company } from "../constants/company";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: `${company.name} — Corporate Digital Presence`, template: `%s | ${company.name}` },
  description: "Outpro.India builds high-performance, scalable corporate websites for Indian businesses. React.js, Next.js, GA4, 90+ PageSpeed.",
  keywords: ["Web Development India","UI UX Design","Next.js","React.js","Corporate Website","Bengaluru","SEO","Cloud"],
  authors: [{ name: "Outpro.India" }],
  robots: "index, follow",
  openGraph: {
    title: "Outpro.India — Corporate Digital Presence",
    description: "India's growth-focused corporate digital partner.",
    siteName: "Outpro.India",
    locale: "en_IN",
    type: "website",
    url: company.website,
  },
  twitter: { card: "summary_large_image", title: "Outpro.India", description: "India's growth-focused corporate digital partner." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YOUR_GSC_CODE_HERE" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Organization",
          "name":"Outpro.India","url":"https://outpro.india",
          "description":"India's growth-focused corporate digital partner.",
          "address":{"@type":"PostalAddress","addressLocality":"Bengaluru","addressRegion":"Karnataka","addressCountry":"IN"},
          "contactPoint":{"@type":"ContactPoint","telephone":"+91-98765-43210","contactType":"customer service","email":"hello@outpro.india"},
          "sameAs":["https://linkedin.com/company/outpro-india","https://twitter.com/outproindia"]
        })}} />
      </head>
      <body className={geist.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* Tawk.to Live Chat — replace IDs below */}
        <script dangerouslySetInnerHTML={{ __html: `var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();` }} />
      </body>
    </html>
  );
}
