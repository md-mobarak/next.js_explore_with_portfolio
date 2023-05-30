import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "./globals.css";

export const metadata = {
  title: "Explore Next App",
  description: "creating next app for Explore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
