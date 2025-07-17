'use client'

import {
    Sidebar as SidebarPrimitive,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarSeparator,
    useSidebar,
} from "@/components/composites/sidebar";
import type { BoardType } from "@/utils/constants";
import { Button } from "@/components/primitives/button";
import { LocalStorageDeck, InMemoryDeck } from "@/utils/constants";
import { CircleFadingPlusIcon } from "lucide-react";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { useParams } from "next/navigation";


const sidebarComponentCss = "group-data-[collapsible=icon]:opacity-0 transition-[opacity] delay-150 duration-200 ease-linear"

type SideBarDeckButtonProps = {
    text: string;
    endpoint: string;
    board?: BoardType;
    Icon?: React.ComponentType | null;
};

const SideBarDeckButton = ({ text, endpoint, board = "home", Icon = null }: SideBarDeckButtonProps) => {
    const { state } = useSidebar()
    const isActive = useParams<{ endpoint: string }>().endpoint === endpoint;
    return (
        <Button asChild variant="ghost" className="p-0 pl-2 rounded-2xl justify-start font-normal group-data-[collapsible=icon]:justify-end data-[active=true]:bg-accent data-[active=true]:text-accent-foreground dark:data-[active=true]:bg-accent/50"
        data-active={isActive}>
            <Link href={`/deck/${endpoint}/${board}`}>
                {Icon && <span className="m-0"><Icon /></span>}
                <span className={sidebarComponentCss}>{state === "expanded" && text}</span>
            </Link>
        </Button>
    );
};




const Sidebar = () => {
    const { state } = useSidebar()
    return (
    <SidebarPrimitive>
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
                <SideBarDeckButton
                    Icon={LocalStorageDeck.icon}
                    text={LocalStorageDeck.name}
                    endpoint={LocalStorageDeck.id} />
                <SideBarDeckButton
                    Icon={InMemoryDeck.icon}
                    text={InMemoryDeck.name}
                    endpoint={InMemoryDeck.id} />
                <SideBarDeckButton
                    Icon={CircleFadingPlusIcon}
                    text="New Cloud Deck"
                    endpoint="untitled-flowdeck" />
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
                <SideBarDeckButton text="F l o w" endpoint="endpoint" board="kanban"/>
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
                <Link target="_blank" href="https://ra101.dev">
                    <span className={cn(sidebarComponentCss, "opacity-65")}>{state === "expanded" && "Made with"}</span>
                    <span className="animate-pulse mr-1 ml-1 scale-110">❤️</span>
                    <span className={cn(sidebarComponentCss, "opacity-65")}>{state === "expanded" && "by〈 RA 〉"}</span>
                </Link>
            </SidebarGroupLabel>
        </SidebarFooter>
    </SidebarPrimitive>
    );
}

export default Sidebar;
