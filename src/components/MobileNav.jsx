'use client';
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from 'react-icons/ci'
import { navbar } from "./constant";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const path = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link  href='/'>
            <h1 className='text-4xl font-semibold'>
              Raj<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
          <nav className='flex flex-col justify-center items-center gap-8'>
            {
              navbar?.map((item, index) => {
                return (
                  <Link href={item?.path} key={index} className={`${path === item?.path &&
                    "text-accent border-b-2 border-accent"} font-medium hover:text-accent transition-all`}
                  >{item?.name}</Link>
                )
              })
            }
          </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav