'use client';
import type { Editor, JSONContent } from '@/components/composites/editor';
import {
  EditorBubbleMenu,
  EditorClearFormatting,
  EditorFormatBold,
  EditorFormatCode,
  EditorFormatItalic,
  EditorFormatStrike,
  EditorFormatSubscript,
  EditorFormatSuperscript,
  EditorFormatUnderline,
  EditorLinkSelector,
  EditorNodeBulletList,
  EditorNodeCode,
  EditorNodeHeading1,
  EditorNodeHeading2,
  EditorNodeHeading3,
  EditorNodeOrderedList,
  EditorNodeQuote,
  EditorNodeTaskList,
  EditorNodeText,
  EditorProvider,
  EditorSelector,
  EditorTableColumnAfter,
  EditorTableColumnBefore,
  EditorTableColumnDelete,
  EditorTableColumnMenu,
  EditorTableDelete,
  EditorTableFix,
  EditorTableGlobalMenu,
  EditorTableHeaderColumnToggle,
  EditorTableHeaderRowToggle,
  EditorTableMenu,
  EditorTableMergeCells,
  EditorTableRowAfter,
  EditorTableRowBefore,
  EditorTableRowDelete,
  EditorTableRowMenu,
  EditorTableSplitCell,
  EditorCharacterCount as NoteBookPageCharacterCount,
} from '@/components/composites/editor';
import { useState } from 'react';
import {
  SidebarContent,
  SidebarGroupLabel,
  Sidebar as SidebarPrimitive,
  SidebarProvider,
  SidebarTrigger2
} from '@/components/composites/sidebar';
import { Separator } from '../primitives/separator';

const NoteBookEditor = () => (
  <>
    <EditorBubbleMenu>
      <EditorSelector title="Text">
        <EditorNodeText />
        <EditorNodeHeading1 />
        <EditorNodeHeading2 />
        <EditorNodeHeading3 />
        <EditorNodeBulletList />
        <EditorNodeOrderedList />
        <EditorNodeTaskList />
        <EditorNodeQuote />
        <EditorNodeCode />
      </EditorSelector>
      <EditorSelector title="Format">
        <EditorFormatBold />
        <EditorFormatItalic />
        <EditorFormatUnderline />
        <EditorFormatStrike />
        <EditorFormatCode />
        <EditorFormatSuperscript />
        <EditorFormatSubscript />
      </EditorSelector>
      <EditorLinkSelector />
      <EditorClearFormatting />
    </EditorBubbleMenu>
    <EditorTableMenu>
      <EditorTableColumnMenu>
        <EditorTableColumnBefore />
        <EditorTableColumnAfter />
        <EditorTableColumnDelete />
      </EditorTableColumnMenu>
      <EditorTableRowMenu>
        <EditorTableRowBefore />
        <EditorTableRowAfter />
        <EditorTableRowDelete />
      </EditorTableRowMenu>
      <EditorTableGlobalMenu>
        <EditorTableHeaderColumnToggle />
        <EditorTableHeaderRowToggle />
        <EditorTableDelete />
        <EditorTableMergeCells />
        <EditorTableSplitCell />
        <EditorTableFix />
      </EditorTableGlobalMenu>
    </EditorTableMenu>
  </>
)

const NoteBookHeader = () => {
  const cleanInput = (event: React.FormEvent<HTMLDivElement>) => {
      const element = event.currentTarget;
      element.querySelectorAll('*').forEach(node => node.remove());
  }
  return (
    <div
        contentEditable="true"
        className="
          before:hidden empty:before:block
          before:content-[attr(data-placeholder)]
          before:absolute
          before:text-gray-400 before:pointer-events-none
          overflow-y-auto bg-background p-4 z-50
          max-w-7/8 break-all"
        data-placeholder="Untitled Page..."
        onInput={cleanInput}
      >
      </div>
  )
}

const NoteBookPage = ({EditorComponents}: {EditorComponents: React.ComponentType}) => {
  const [content, setContent] = useState<JSONContent>({
    type: 'doc', content: [],
  });
  const handleUpdate = ({ editor }: { editor: Editor }) => {
    const json = editor.getJSON();
    setContent(json);
  };
  console.log(content)
  return (
    <div className='w-full'>
      <NoteBookHeader />
      <Separator className='data-[orientation=horizontal]:w-4/5 mx-auto'/>
      <EditorProvider
        className="h-full text-base w-full overflow-auto border-none bg-background p-4 z-50 max-w-7/8 break-all"
        content={content}
        onUpdate={handleUpdate}
        placeholder="Start typing..."
      >
        <EditorComponents />
        <NoteBookPageCharacterCount.ReadTime />
      </EditorProvider>
    </div>
  );
};

const NoteBook = () => (
  <SidebarProvider className="h-full w-full overflow-hidden"
        style={{ "--sidebar-width-icon": "0" }}>
    <SidebarPrimitive className="border-none" collapsible="icon">
      <SidebarContent className='bg-background text-foreground'>
        <SidebarGroupLabel>
          Untitled Page
        </SidebarGroupLabel>
      </SidebarContent>
    <SidebarTrigger2 variant="ghost"
    className="absolute top-1/2 right-0 opacity-65 translate-y-[-50%] translate-x-[65%] z-200 bg-background rounded-full border-1" />
    </SidebarPrimitive>
    <Separator orientation='vertical' />
    <NoteBookPage EditorComponents={NoteBookEditor} />
  </SidebarProvider>
);

export default NoteBook;
