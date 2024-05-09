import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1>Navbar</h1>
      </Link>
      <div className="flex gap-x-2 items-center ">
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          New Task
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
