import { Ecosystem } from "./components/sections/Ecosystem";
import { Hero } from "./components/sections/Hero";
import { Latest } from "./components/sections/Latest";
import { Product } from "./components/sections/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <Latest />
      <Product />
      <Ecosystem />
    </>
  );
}
