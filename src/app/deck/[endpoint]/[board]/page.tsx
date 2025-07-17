'use client';

import Dock from "@/components/containers/dock";
import { BoardsIds } from "@/utils/constants";
import type { BoardType } from "@/utils/constants";
import { useParams , notFound } from "next/navigation";

const Deck = () => {
  const {endpoint, board} = useParams<{ endpoint: string, board: BoardType}>();
  if (!BoardsIds.includes(board)) return notFound();
  return (
    <div className="flex flex-col items-center justify-even h-screen text-3xl">
      <div className="flex">
        Deck: <span className="ml-2 font-bold">{endpoint}/{board}</span>
      </div>
      <div className="flex flex-col items-center justify-center">
          <Dock />
      </div>

    </div>
  );
}

export default Deck;