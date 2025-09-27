import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Image from "next/image";
import Link from "next/link";
import { Button } from './ui/button';
import {  LayoutDashboard } from 'lucide-react';


const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 
    supports-[backdrop-filter]:bg-background/60 '>
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href='/'>
              <Image
              src="/logo.png" 
              alt="sangrah logo"  width={200} height={60}
              className='h-12 py-1 w-auto object-contain'
              /> 
            </Link>

            <div>
             <SignedIn>
                <Link href={'/dashboard'}>
                <Button>
                   <LayoutDashboard className='h-4 w-4' />
                   <span className='hidden md:block'>
                    Industry Inshights
                   </span>
                     
                </Button>
                </Link>
             </SignedIn>

             <DropdownMenu>
              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
               </DropdownMenu>            
            </div>
        </nav>


         <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
    </header>
  )
}

export default Header