import NavBar from './components/navigation/NavBar';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <div>
            <NavBar/>
            <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
