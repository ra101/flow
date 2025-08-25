
import { KanbanIcon, ListTodoIcon, CalendarFoldIcon, NotebookIcon, StarIcon, HomeIcon, DraftingCompassIcon, SaveIcon, SquareDashedMousePointerIcon, MessageCircleMoreIcon, BookmarkCheckIcon } from "lucide-react";


// Predefined Decks
const LocalStorageDeck = {
    id: "local", name: "In-Browser Deck",
    icon: SaveIcon
} as const;

const InMemoryDeck = {
    id: "temp", name: "Temporary Deck",
    icon: SquareDashedMousePointerIcon
} as const;

const ExampleDeck = {
    id: "example", name: "Example Deck",
    icon: BookmarkCheckIcon
} as const;

// Boards
const HomeBoard = {
    id: "home", tooltip: "Home",
    icon: HomeIcon
} as const;

const TaskBoard = {
    id: "tasks", tooltip: "Tasks",
    icon: ListTodoIcon
} as const

const KanbanBoard = {
    id: "kanban", tooltip: "Kanban Board",
    icon: KanbanIcon
} as const;


const NotebookBoard = {
    id: "notebook", tooltip: "Notebook",
    icon: NotebookIcon
} as const;

const DrawingBoard = {
    id: "excalidraw", tooltip: "Excalidraw",
    icon: DraftingCompassIcon
} as const;

const AIChatBoard = {
    id: "chat", tooltip: "AI Chat",
    icon: MessageCircleMoreIcon
} as const;

const CalendarBoard = {
    id: "calendar", tooltip: "Calendar",
    icon: CalendarFoldIcon
} as const;

const ActivityBoard = {
    id: "activity", tooltip: "Activity Graph",
    icon: StarIcon
} as const;



// Groupings
const ProductivityBoards = [
    TaskBoard, KanbanBoard, NotebookBoard,
    AIChatBoard, DrawingBoard, CalendarBoard
] as const;

const BoardsIds = [
    HomeBoard.id,
    ...ProductivityBoards.map(board => board.id),
    ActivityBoard.id
] as const;

const AllBoards = {
    HomeBoard,
    TaskBoard,
    KanbanBoard,
    NotebookBoard,
    DrawingBoard,
    AIChatBoard,
    CalendarBoard,
    ActivityBoard
}

type BoardType = typeof BoardsIds[number];

export {
    LocalStorageDeck,
    InMemoryDeck,
    ExampleDeck,
    AllBoards,
    HomeBoard,
    ActivityBoard,
    ProductivityBoards,
    BoardsIds,
};
export type { BoardType };
