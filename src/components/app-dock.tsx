import { Dock, DockIcon, } from "@/components/ui/dock";
import { Separator } from "@/components/ui/separator";
import { Home, KanbanIcon, ListTodoIcon, CalendarFoldIcon, TimerIcon, NotebookIcon, StarIcon } from "lucide-react";

const AppDock = () => {
  return (
<Dock className="bottom-0">
  <DockIcon>
    <Home />
  </DockIcon>
  <Separator orientation="vertical" className="h-full" />
  <DockIcon>
    <ListTodoIcon />
    </DockIcon>


  <DockIcon>
    <TimerIcon />
  </DockIcon>

  <DockIcon>
    <KanbanIcon />
  </DockIcon>


  <DockIcon>
    <NotebookIcon />
  </DockIcon>

  <DockIcon>
    <CalendarFoldIcon />
  </DockIcon>
  <Separator orientation="vertical" className="h-full" />

  <DockIcon>
    <StarIcon />
  </DockIcon>

</Dock>
  );
}

export default AppDock;