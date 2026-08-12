import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Apparel Manufacturing Education | Fenalt Learn",
    template: "%s | Fenalt Learn",
  },
};

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
