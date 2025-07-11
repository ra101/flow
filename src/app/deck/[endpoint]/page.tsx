import { notFound } from "next/navigation";

interface DeckPageProps {
  params: { endpoint: string };
}

export default function DeckPage({ params }: DeckPageProps) {
  const { endpoint } = params;
  if (!endpoint) return notFound();
  return (
    <div className="flex items-center justify-center h-screen text-3xl">
      Deck: <span className="ml-2 font-bold">{endpoint}</span>
    </div>
  );
}
