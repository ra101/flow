'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarSeparator,
    useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {  SaveIcon, SquareDashedMousePointerIcon, CircleFadingPlusIcon } from "lucide-react";
import { cn } from "@/utils/tailwind";
import Link from "next/link";


const sidebarComponentCss = "group-data-[collapsible=icon]:opacity-0 transition-[opacity] delay-150 duration-200 ease-linear"

type SideBarDeckButtonProps = {
    state: string;
    text: string;
    link: string;
    Icon?: React.ComponentType<any> | null;
};

const SideBarDeckButton: React.FC<SideBarDeckButtonProps> = ({ state, text, link, Icon = null }) => {
    return (
        <Button asChild variant="ghost" className="p-0 rounded-2xl justify-start font-normal group-data-[collapsible=icon]:justify-end">
            <Link href={`/deck/${link}`}>
                {Icon && <span className="m-0"><Icon /></span>}
                <span className={sidebarComponentCss}>{state === "expanded" && text}</span>
            </Link>
        </Button>
    );
};




const AppSidebar = () => {
    const { state } = useSidebar()
    return (
    <Sidebar>
        <SidebarHeader className="hover:bg-secondary">
            <SidebarGroupLabel asChild className="opacity-100 font-medium">
                <Link href="/">
                    <span className="mr-1 ml-1 scale-125">🚀</span>
                    <span className={sidebarComponentCss}>
                        {state === "expanded" && "Focus List Organize Win "}
                    </span>
                </Link>
            </SidebarGroupLabel>
        </SidebarHeader>
        <SidebarContent className="overflow-x-hidden">
            <SidebarSeparator />
            <SidebarGroup>
                <SideBarDeckButton state={state} Icon={SaveIcon} text="Browser Deck" link="local" />
                <SideBarDeckButton state={state} Icon={SquareDashedMousePointerIcon} text="Tab Deck" link="tab" />
                <SideBarDeckButton state={state} Icon={CircleFadingPlusIcon} text="New Cloud Deck" link="untitled-flowdeck" />
            </SidebarGroup >
            <SidebarGroup className="p-0">
                <Button asChild variant="secondary" className="p-0 rounded-2xl hover:bg-primary/5">
                <Link href="/toolset">
                    <span className="m-0 scale-125">🛠️</span>
                    {state === "expanded" &&
                        <span className="group-data-[collapsible=icon]:opacity-0 transition-[opacity] delay-150 duration-200 opacity-65 ease-linear">
                            Toolset
                        </span>}
                </Link>
                </Button>
            </SidebarGroup >
            <SidebarGroupLabel className="pb-0 pr-5 mb-0 font-normal text-sm self-start opacity-65">
                <span className={sidebarComponentCss}>
                    {state === "expanded" && "Saved Decks:"}
                </span>
            </SidebarGroupLabel>
            <SidebarGroup className="overflow-auto mt-0 pt-0">
                <SideBarDeckButton state={state} text="F l o w" link="endpoint" />
            </SidebarGroup >
        </SidebarContent>
        <SidebarFooter>
            <SidebarGroup className="p-0">
                <Button variant="secondary" className="p-0 rounded-2xl hover:bg-primary/5">
                <span className="m-0 scale-125">📦</span>
                {state === "expanded" && <span className={cn(sidebarComponentCss, "opacity-65 ease-linear")}>Archive</span>}
                </Button>
            </SidebarGroup>
        </SidebarFooter>
        <SidebarSeparator className="p-0 m-0"/>
        <SidebarFooter className="hover:bg-secondary">
            <SidebarGroupLabel className="font-normal opacity-100">
                <span className={cn(sidebarComponentCss, "opacity-65")}>{state === "expanded" && "Made with"}</span>
                <span className="animate-pulse mr-1 ml-1 scale-110">❤️</span>
                <span className={cn(sidebarComponentCss, "opacity-65")}>{state === "expanded" && "by〈 RA 〉"}</span>
            </SidebarGroupLabel>
        </SidebarFooter>
    </Sidebar>
    );
}

export default AppSidebar;
