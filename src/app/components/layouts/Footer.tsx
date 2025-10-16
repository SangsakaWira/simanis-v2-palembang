import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiYoutube, SiInstagram, SiFacebook, SiX } from "react-icons/si";
import Dropdown from "../parts/Dropdown";

export function Footer() {
  const socials = [
    {
      link: "/instagram",
      icon: <SiInstagram size={24} />,
    },
    {
      link: "/youtube",
      icon: <SiYoutube size={24} />,
    },
    {
      link: "/facebook",
      icon: <SiFacebook size={24} />,
    },
    {
      link: "/x",
      icon: <SiX size={24} />,
    },
  ];
  return (
    <footer className="bg-white pt-10 pb-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image
            src={"/images/logo-footer.webp"}
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <Image
            src={"/images/pemprov-dki.webp"}
            alt="Pemprov DKI"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 lg:gap-0 lg:grid-cols-3 mt-10">
          <ul className="space-y-3">
            <li>
              <Link href={"/kontak"} className="text-blue-500 font-semibold">
                Kontak
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className="text-blue-500 font-semibold">
                Blog
              </Link>
            </li>
            <li>
              <Link href={"/karir"} className="text-blue-500 font-semibold">
                Karir
              </Link>
            </li>
          </ul>

          <div className="space-y-8">
            <p className="text-blue-500 font-semibold">
              Temukan kami di sosial media
            </p>
            <div className="flex items-center gap-x-4">
              {socials.map((social, id) => (
                <Link
                  href={social.link}
                  key={id}
                  className="text-black transition duration-200 hover:text-blue-500"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-blue-500 font-semibold">Unduh JAKI</p>

            <div className="flex items-center gap-x-3">
              <Link href={"/"} target="_blank">
                <Image
                  src={"/images/google-play.webp"}
                  alt="Get Google Play"
                  width={150}
                  height={100}
                />
              </Link>
              <Link href={"/"} target="_blank">
                <Image
                  src={"/images/app-store.webp"}
                  alt="Get App Store"
                  width={150}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 lg:grid grid-cols-3 border-t border-t-black mt-5 py-5">
          <div className="col-span-1">
            <Dropdown
              label="Bahasa Indonesia"
              items={[
                { label: "Bahasa Indonesia", href: "/" },
                { label: "English", href: "/" },
              ]}
            />
          </div>
          <div className="col-span-2">
            <p className="text-slate-600 text-sm">
              Hak cipta © 2021 JSC. Seluruh hak cipta dilindungi undang-undang
              dan terdaftar pada Direktorat Jendral Kekayaan Intelektual
              Republik Indonesia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
