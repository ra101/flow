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
import { LocalStorageDeck, InMemoryDeck, ExampleDeck } from "@/utils/constants";
import { CircleFadingPlusIcon } from "lucide-react";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";


const sidebarComponentCSS = "group-data-[collapsible=icon]:opacity-0 transition-[opacity] delay-150 duration-200 ease-linear"
const sidebarSecondaryButtonCSS = "p-0 rounded-2xl text-secondary-foreground/75 hover:bg-primary hover:text-primary-foreground data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"

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
        <Button asChild variant="ghost" className="p-0 pl-2 rounded-2xl justify-start font-normal group-data-[collapsible=icon]:justify-end data-[active=true]:bg-primary/10"
        data-active={isActive}>
            <Link href={`/deck/${endpoint}/${board}`}>
                <span className={Icon?"m-0":"m-2"}>{Icon  && <Icon />}</span>
                <span className={sidebarComponentCSS}>{state === "expanded" && text}</span>
            </Link>
        </Button>
    );
};


const ToolSetButton = () => {
    const endpoint = "/toolset";
    const { state } = useSidebar()
    const isActive = usePathname() === endpoint;
    return (
        <Button asChild variant="secondary" className={sidebarSecondaryButtonCSS} data-active={isActive}>
            <Link href={endpoint}>
                <span className="m-0 scale-125">🛠️</span>
                {state === "expanded" && <span className="group-data-[collapsible=icon]:opacity-0 transition-[opacity] delay-150 duration-200  ease-linear">
                Toolset
            </span>}
            </Link>
        </Button>
    )
}


const ArchiveButton = () => {
    const { state } = useSidebar()
    return (
        <Button variant="secondary" className="p-0 rounded-2xl text-secondary-foreground/75 hover:bg-primary hover:text-primary-foreground">
            <span className="m-0 scale-125">📦</span>
            {state === "expanded" && <span className={cn(sidebarComponentCSS, "group-data-[collapsible=icon]:opacity-0 transition-[opacity] delay-150 duration-200  ease-linear")}>Archive</span>}
        </Button>

    )
}


const Sidebar = () => {
    const { state } = useSidebar()
    return (
    <SidebarPrimitive>
        <SidebarHeader className="hover:bg-secondary">
            <SidebarGroupLabel asChild className="opacity-100 font-medium">
                <Link href="/">
                    <span className="mr-1 ml-1 scale-125">🚀</span>
                    <span className={sidebarComponentCSS}>
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
                <ToolSetButton />
            </SidebarGroup >
            <SidebarGroupLabel className="pb-0 pr-5 mb-0 font-normal text-sm self-start opacity-65">
                <span className={sidebarComponentCSS}>
                    {state === "expanded" && "Saved Decks:"}
                </span>
            </SidebarGroupLabel>
            <SidebarGroup className="overflow-auto mt-0 pt-0">
                <SideBarDeckButton
                    Icon={ExampleDeck.icon}
                    text={ExampleDeck.name}
                    endpoint={ExampleDeck.id} />
            </SidebarGroup >
        </SidebarContent>
        <SidebarFooter>
            <SidebarGroup className="p-0">
                <ArchiveButton />
            </SidebarGroup>
        </SidebarFooter>
        <SidebarSeparator className="p-0 m-0"/>
        <SidebarFooter className="hover:bg-secondary">
            <SidebarGroupLabel className="font-normal opacity-100">
                <Link target="_blank" href="https://ra101.dev">
                    <span className={cn(sidebarComponentCSS, "opacity-65")}>{state === "expanded" && "Made with"}</span>
                    <span className="animate-pulse mr-1 ml-1 scale-110">❤️</span>
                    <span className={cn(sidebarComponentCSS, "opacity-65")}>{state === "expanded" && "by〈 RA 〉"}</span>
                </Link>
            </SidebarGroupLabel>
        </SidebarFooter>
    </SidebarPrimitive>
    );
}

export default Sidebar;
