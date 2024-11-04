import SVGArrow from "@/svg/SVGArrow";
import Link from "next/link";

export default function Nav(props) {
  const { navRef } = props;
  return (
    <nav ref={navRef} {...props}>
      <nav>
        <ul>
          <li>
            <Link href="/about">소개</Link>
          </li>
          <li>
            <Link href="/courses">강좌</Link>
          </li>
          <li>
            <Link href="/degree">학위</Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
