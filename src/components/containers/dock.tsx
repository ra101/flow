'use client'

import { Dock as DockPrimitive, DockIcon, } from "@/components/composites/dock";
import { Separator } from "@/components/primitives/separator";
import { SimpleTooltip } from "@/components/primitives/tooltip";
import { HomeBoard, ProductivityBoards, ActivityBoard } from "@/utils/constants";
import type { BoardType } from "@/utils/constants";
import { Button } from "../primitives/button";
import Link from "next/link";
import { useParams } from "next/navigation";


type DockToolButtonProps = {
    link: string;
    Icon: React.ComponentType;
    tooltip: string;
};


const DockToolButton = ({ link, Icon, tooltip }: DockToolButtonProps) => {
    const isActive = useParams<{ board: BoardType }>().board === link;
    return (
      <SimpleTooltip tip={tooltip}>
        <Button asChild variant="ghost" className="m-0 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground dark:data-[active=true]:bg-accent/50"
          data-active={isActive}>
          <Link href={link}>
              {Icon && <Icon />}
          </Link>
        </Button>
      </SimpleTooltip>
    );
};

const Dock = () => {
return (
  <DockPrimitive>

    <DockIcon key={HomeBoard.id}>
      <DockToolButton link={HomeBoard.id} Icon={HomeBoard.icon} tooltip={HomeBoard.tooltip} />
    </DockIcon>

    <Separator orientation="vertical" className="h-full" />

    {ProductivityBoards.map((board) => (
      <DockIcon key={board.id}>
        <DockToolButton link={board.id} Icon={board.icon} tooltip={board.tooltip} />
      </DockIcon>
    ))}

    <Separator orientation="vertical" className="h-full" />

    <DockIcon key={ActivityBoard.id}>
      <DockToolButton link={ActivityBoard.id} Icon={ActivityBoard.icon} tooltip={ActivityBoard.tooltip} />
    </DockIcon>

  </DockPrimitive>
  );
}

export default Dock;