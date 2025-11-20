export const metadata = {
  title: 'My Storybook App',
  description: 'React Component Library with Next.js and Storybook',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}