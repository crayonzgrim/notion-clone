'use client';

import { SignOutButton, useUser } from '@clerk/clerk-react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';
import { ChevronsLeftRight } from 'lucide-react';

export default function UserItem() {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.fullName}&apos;s Jotion
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80 bg-white rounded-md"
        align="start"
        alignOffset={11}
        // forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-primary p-1">
              <Avatar>
                <AvatarImage
                  src={user?.imageUrl}
                  className="h-5 w-5 rounded-lg"
                />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1 text-muted-foreground">
                {user?.fullName}&apos;s Notion
              </p>
            </div>
          </div>
        </div>
        {/* <DropdownMenuSeparator /> */}
        <hr />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground text-sm p-2"
        >
          <SignOutButton>
            <p>Log out</p>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
