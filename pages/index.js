import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="container py-20 content-center">
        <h1 className="text-5xl text-center underline ">Portfolio:</h1>
        <p className="text-xl m-auto my-10 text-center">
          <Link
            className="hover:underline hover:text-amber-500 m-auto"
            href={"https://food-order-9ysae0iae-thestallionmang.vercel.app/"}
          >
            Food order app
          </Link>
        </p>
        <p className="text-xl text-center my-10">
          <Link
            className="hover:underline hover:text-amber-500"
            href={"https://simple-posting-app.vercel.app/"}
          >
            Posting app
          </Link>
        </p>
        <p className="text-xl text-center my-10">
          <Link
            className="hover:underline hover:text-amber-500"
            href={"https://mad-cafe.vercel.app/"}
          >
            Mock local cafe site
          </Link>
        </p>
      </div>
    </Layout>
  );
}
