import "./styles/global.css"
import Image from "next/image";
import NoUserNav from "./components/noUserNav";

export default function Home() {
  return (
    <div className="w-screen border-2 border-black">
      <header>
          <NoUserNav />
      </header>
      <main>
      <h1>Hello World</h1>
      </main>
    </div>
  );
}
