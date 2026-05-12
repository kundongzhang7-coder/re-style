import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'ReStyle - 重塑时尚 AI',
  description: 'AI 驱动的可持续时尚平台',
  icons: { icon: '/logo.png' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}