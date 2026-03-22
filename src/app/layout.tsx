import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Authentic Writing Coach',
  description: 'AI-powered writing coach that helps you produce authentic, well-sourced writing through a structured phase-based workflow.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
