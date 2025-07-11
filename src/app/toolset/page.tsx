import { notFound } from "next/navigation";


export default function DeckPage() {
  return (
    <div className="flex items-center justify-center h-screen text-3xl">
      Deck: <span className="ml-2 font-bold">Bento Tool Grid</span>
    </div>
  );
}
