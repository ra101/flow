'use client';

import AppDock from "@/components/containers/app-dock";
import { useParams , notFound } from "next/navigation";

const Deck = () => {
  const {endpoint, board} = useParams<{ endpoint: string, board: string}>();
  if (!endpoint) return notFound();
  return (
    <div className="flex flex-col items-center justify-even h-screen text-3xl">
      <div className="flex">
      Deck: <span className="ml-2 font-bold">{endpoint}/{board}</span>

      </div>
      
      <div className="flex flex-col items-center justify-center">
              <AppDock></AppDock>
      </div>

    </div>
  );
}

export default Deck;