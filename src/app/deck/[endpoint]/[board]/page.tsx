'use client';

import Dock from "@/components/containers/dock";
import Wip from "@/components/boards/wip";
import Kanban from "@/components/boards/kanban";
import NoteBook from "@/components/boards/notebook";
import Gantt from "@/components/boards/calendar";
import { BoardsIds, AllBoards } from "@/utils/constants";
import type { BoardType } from "@/utils/constants";
import { useParams , notFound } from "next/navigation";


const boardContainerMap = {
    [AllBoards.HomeBoard.id]: Wip,
    [AllBoards.TaskBoard.id]: Wip,
    [AllBoards.KanbanBoard.id]: Kanban,
    [AllBoards.NotebookBoard.id]: NoteBook,
    // [AllBoards.DriveBoard.id]: DriveBoard,
    [AllBoards.DrawingBoard.id]: Wip,
    [AllBoards.AIChatBoard.id]: Wip,
    [AllBoards.CalendarBoard.id]: Gantt,
    [AllBoards.ActivityBoard.id]: Wip
} as const;


const Deck = () => {
  const {endpoint, board} = useParams<{ endpoint: string, board: BoardType}>();
  const BoardContainer = boardContainerMap[board];
  if (!BoardsIds.includes(board)) return notFound();
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex items-center justify-center flex-1 text-3xl overflow-hidden">
        <BoardContainer />
      </div>
      <div className="flex items-center justify-center static">
          <Dock />
      </div>

    </div>
  );
}

export default Deck;