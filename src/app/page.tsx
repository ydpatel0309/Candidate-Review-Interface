import Footer from "@/components/Footer";
import Assignment from "@/components/Main/pages";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-3">
        <div className="flex pl-4 pt-3 gap-2">
          <Sidebar />
          <div className="pt-6">
            <Assignment />
          </div>
        </div>
        <Footer/>
    </main>
  );
}
