import AppDock from "@/components/app-dock";
import { notFound } from "next/navigation";

interface DeckPageProps {
  params: { endpoint: string };
}

const Deck = async ({ params }: DeckPageProps) => {
  const { endpoint } = await params;
  if (!endpoint) return notFound();
  return (
    <div className="flex flex-col items-center justify-even h-screen text-3xl">
      <div className="flex">
      Deck: <span className="ml-2 font-bold">{endpoint}</span>

      </div>
      
      <div className="flex flex-col items-center justify-center">
              <AppDock></AppDock>
      </div>

    </div>
  );
}

export default Deck;