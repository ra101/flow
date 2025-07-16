'use client'

import { Dock, DockIcon, } from "@/components/composites/dock";
import { Separator } from "@/components/primitives/separator";
import { KanbanIcon, ListTodoIcon, CalendarFoldIcon, NotebookIcon, StarIcon, HomeIcon } from "lucide-react";
import { Button } from "../primitives/button";
import Link from "next/link";
import { useParams } from "next/navigation";


type DockToolButtonProps = {
    link: string;
    Icon: React.ComponentType;
};


const DockToolButton = ({ link, Icon }: DockToolButtonProps) => {
    const isActive = useParams<{ board: string }>().board === link;
    return (
      <Button asChild variant="ghost" className="m-0 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground dark:data-[active=true]:bg-accent/50"
        data-active={isActive}>
        <Link href={link}>
            {Icon && <Icon />}
        </Link>
      </Button>
    );
};

const AppDock = () => {
return (
  <Dock>
    <DockIcon><DockToolButton link="home" Icon={HomeIcon}/></DockIcon>

    <Separator orientation="vertical" className="h-full" />

    <DockIcon><DockToolButton link="tasks" Icon={ListTodoIcon}/></DockIcon>
    <DockIcon><DockToolButton link="kanban" Icon={KanbanIcon}/></DockIcon>
    <DockIcon><DockToolButton link="notes" Icon={NotebookIcon}/></DockIcon>
    <DockIcon><DockToolButton link="calender" Icon={CalendarFoldIcon}/></DockIcon>

    <Separator orientation="vertical" className="h-full" />

    <DockIcon><DockToolButton link="activity" Icon={StarIcon}/></DockIcon>
  </Dock>
  );
}

export default AppDock;