import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="py-20 content-center title">
        <h1 className="text-5xl text-center underline">BARROSO</h1>
        <h3 className="text-3xl text-center">Web Development & Design</h3>
      </div>
      <div className="py-20 content-center grid grid-cols-2 gap-4 portfolioContainer">
        <div className="portfolioColDiv">
          <h1 className="text-4xl sm:text-5xl text-right underline">Portfolio:</h1>
        </div>
        <div className="portfolioList">
          <p className="sm:text-xl m-auto text-left">
            <Link
              className="m-auto p-2 link"
              href={"https://food-order-ecru.vercel.app/"}
            >
              Food order app
            </Link>
          </p>
          <p className="sm:text-xl text-left">
            <Link
              className="m-auto p-2 link"
              href={"https://simple-posting-app.vercel.app/"}
            >
              Posting app
            </Link>
          </p>
          <p className="sm:text-xl text-left">
            <Link
              className="m-auto p-2 link"
              href={"https://mad-cafe.vercel.app/"}
            >
              Mock local cafe site
            </Link>
          </p>
          <p className="sm:text-xl text-left">
            <Link
              className="m-auto p-2 link"
              href={"https://cwa-sage.vercel.app/"}
            >
              Another mock cafe site
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
