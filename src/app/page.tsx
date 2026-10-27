import { Ecosystem } from "./components/sections/Ecosystem";
import { Hero } from "./components/sections/Hero";
import { Leaders } from "./components/sections/Leaders";
import { Latest } from "./components/sections/Latest";
import { Product } from "./components/sections/Product";

export default function Home() {
  return (
    <>
      <Hero />
      <Leaders />
      <Latest />
      <Product />
      <Ecosystem />
    </>
  );
}
