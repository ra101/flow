'use client';
import { faker } from '@faker-js/faker';
import {
    KanbanBoard as KanbanBoardComposite,
    KanbanCard,
    KanbanCards,
    KanbanHeader,
    KanbanProvider,
    KanbanFocusButton,
} from '@/components/composites/kanban';
import { useState } from 'react';
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const columns = [
    { id: faker.string.uuid(), tag: "kanban-backlog-column", name: 'Backlog', color: '#999999' },
    { id: faker.string.uuid(), tag: "kanban-prioritized-column", name: 'Prioritized', color: '#ff6666' },
    { id: faker.string.uuid(), tag: "kanban-in-progress-column", name: 'In Progress', color: '#6666ff' },
    { id: faker.string.uuid(), tag: "kanban-done-column", name: 'Done', color: '#66ff66' },
    { id: faker.string.uuid(), tag: "kanban-archive-column", name: 'Archive', color: '#996666' },
];

const exampleFeatures = Array.from({ length: 20 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: capitalize(faker.company.buzzPhrase() + faker.company.buzzPhrase()),
    startAt: faker.date.past({ years: 0.5, refDate: new Date() }),
    endAt: faker.date.future({ years: 0.5, refDate: new Date() }),
    column: faker.helpers.arrayElement(columns).id,
  }));
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});
const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
});
const Kanban = () => {
  const [features, setFeatures] = useState(exampleFeatures);
  return (
    <>
    <KanbanProvider
      columns={columns}
      data={features}
      onDataChange={setFeatures}
      className='ml-2 mr-2'
    >
      {(column) => (
        <KanbanBoardComposite id={column.id} key={column.id} tag={column.tag}>
          <KanbanHeader>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: column.color }}
              />
              <span>{column.name}</span>
            </div>
          </KanbanHeader>
          <KanbanCards id={column.id}>
            {(feature: (typeof features)[number]) => (
              <KanbanCard
                column={column.id}
                id={feature.id}
                key={feature.id}
                name={feature.name}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="m-0 flex-1 font-medium text-sm">
                      {feature.name}
                    </p>
                  </div>
                </div>
                <p className="m-0 text-muted-foreground text-xs">
                  {shortDateFormatter.format(feature.startAt)} -{' '}
                  {dateFormatter.format(feature.endAt)}
                </p>
              </KanbanCard>
            )}
          </KanbanCards>
        </KanbanBoardComposite>
      )}
    </KanbanProvider>
    <KanbanFocusButton />
    </>
  );
};
export default Kanban;
