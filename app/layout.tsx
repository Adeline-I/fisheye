import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FishEye",
    template: "%s | FishEye",
  },
  description:
    "Découvrez les photographes freelances de FishEye et contactez-les pour vos événements ou vos tirages.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html lang="fr" className={dmSans.variable}>
    <body>{children}</body>
  </html>
);

export default RootLayout;
