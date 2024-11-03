"use client";

import OrderList from "@/public/Order List.svg";
import Product from "@/public/Product.svg";
import EaternalLogo from "@/public/eaternal-logo.svg";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

interface Item {
    title: string;
    url: string; 
    icon: string;
}

// Menu items.
const items: Item[] = [
  {
    title: "Transaction",
    url: "/transaction",
    icon: OrderList,
  },
  {
    title: "Product",
    url: "/product",
    icon: Product,
  },
];

export function AppSidebar() {
  const pathname = usePathname(); // Get the current pathname

  return (
    <Sidebar>
      <SidebarContent className="bg-gradient-to-t from-gradient-primary to-gradient-secondary text-white px-4">
        <SidebarGroup>
          <SidebarGroupLabel className="justify-center gap-2 h-fit my-2">
            <Link href={"/"}>
              <Image
                src={EaternalLogo}
                alt="eaternal logo"
                width={300}
                height={300}
              />
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-8">
            <SidebarMenu className="gap-4">
              {items.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.url}>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={20}
                          height={20}
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
