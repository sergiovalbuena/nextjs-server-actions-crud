import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <div className="flex justify-between">
      Navbar
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
