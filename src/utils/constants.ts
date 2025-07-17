
import { KanbanIcon, ListTodoIcon, CalendarFoldIcon, NotebookIcon, StarIcon, HomeIcon, DraftingCompassIcon, SaveIcon, SquareDashedMousePointerIcon } from "lucide-react";


const LocalStorageDeck = { id: "local", name: "In-Browser Deck", icon: SaveIcon } as const;
const InMemoryDeck = { id: "temp", name: "Temporary Deck", icon: SquareDashedMousePointerIcon } as const;


const HomeBoard = { id: "home", tooltip: "Home", icon: HomeIcon } as const;
const ProductivityBoards = [
    { id: "tasks", tooltip: "Tasks", icon: ListTodoIcon },
    { id: "kanban", tooltip: "Kanban Board", icon: KanbanIcon },
    { id: "notes", tooltip: "Notebook", icon: NotebookIcon },
    { id: "draw", tooltip: "Excalidraw", icon: DraftingCompassIcon },
    { id: "calendar", tooltip: "Calendar", icon: CalendarFoldIcon },
] as const;
const ActivityBoard = { id: "activity", tooltip: "Activity Graph", icon: StarIcon } as const;

const BoardsIds = [HomeBoard.id, ...ProductivityBoards.map(board => board.id), ActivityBoard.id] as const;

type BoardType = typeof BoardsIds[number];

export {
    LocalStorageDeck,
    InMemoryDeck,
    HomeBoard,
    ProductivityBoards,
    ActivityBoard,
    BoardsIds,
};
export type { BoardType };
