import Button from "../ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-xl">📞Contact</h1>
      <div className="flex flex-wrap gap-3 mt-5">
        <Link
          href="https://www.linkedin.com/in/pramudya-diagusta/"
          target="_blank"
        >
          <Button>linkedin</Button>
        </Link>
        <Link
          href="https://github.com"
          target="_blank">
        <Button>Github</Button>
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank">
        <Button>Instagram</Button>
        </Link>
        <Link
          href="https://mail.google.com"
          target="_blank">
        <Button>Email</Button>
        </Link>
      </div>
    </div>
  );
}