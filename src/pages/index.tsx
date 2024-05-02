import Image from "next/image";
import NavigationBar from "./components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <main>
        {/* Your page content here */}
      </main>
    </div>
  );
}

