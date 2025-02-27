"use client";
import { ChevronDown } from 'lucide-react'
import React from 'react'
import user from "@/image/user.jpeg";
import Image from 'next/image';
import { Button } from './button';
import { Avatar } from './avatar';
import { useUserPayloadQuery } from '@/graphql/generated';

const ProfileSidebar = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ ...props }, ref) => {
    const { data } = useUserPayloadQuery();

    return (
      <Button ref={ref} variant="secondary" className="w-full justify-start" {...props}>
        <Avatar className="mr-2 h-8 w-8">
          <Image src={user} alt="user" />
        </Avatar>
        <span className="truncate">{data?.me.username || "User"}</span>
        <ChevronDown className="ml-auto h-4 w-4" />
      </Button>
    );
  }
);
ProfileSidebar.displayName = "ProfileSidebar"; // Tambahkan ini untuk debugging di DevTools React

export default ProfileSidebar;
