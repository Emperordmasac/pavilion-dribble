import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;

  return (
    <nav>
      <div className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
          <Link href="/">
            <Image src="/logo.svg" width={115} height={43} alt="Flexible" />
          </Link>
          <ul className="xl:flex hidden text-small gap-7">
            {NavLinks.map(({ href, key, text }) => (
              <Link key={key} href={href}>
                {text}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flexCenter gap-4 ">
          {session ? (
            <>
              UserPhoto
              <Link href="/create-project">Share Work</Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
