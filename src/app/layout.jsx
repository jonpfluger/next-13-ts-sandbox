// import '@styles/globals.css'

export const metadata = {
  title: "Test",
  description: "Test"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Test</h1>
        </header>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout