'use client';

import Dock from "@/components/containers/dock";
import Kanban from "@/components/containers/kanban";
import { BoardsIds } from "@/utils/constants";
import type { BoardType } from "@/utils/constants";
import { useParams , notFound } from "next/navigation";

const Deck = () => {
  const {endpoint, board} = useParams<{ endpoint: string, board: BoardType}>();
  if (!BoardsIds.includes(board)) return notFound();
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-center flex-1 text-3xl bg-accent overflow-hidden">
        <Kanban />
      </div>
      <div className="flex items-center justify-center static">
          <Dock />
      </div>

    </div>
  );
}

export default Deck;