import { useState } from "react";

interface ItemProps {
  id: string;
  isDone: boolean;
  title: string;
  description: string;
  onDelete: (id: string) => void;
  onToggleDone: (id: string) => void;
  onUpdate: (id: string, title: string, description: string) => void;
}

const TodoItem = ({
  id,
  isDone,
  title,
  description,
  onDelete,
  onToggleDone,
  onUpdate,
}: ItemProps) => {
  const [open, setIsOpen] = useState(false);
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const handleSave = () => {
    onUpdate(id, titleInput, descriptionInput);
    setIsOpen(false);
  };
  return (
    <>
      <div className="border-b-1 border-gray-100 py-3 flex gap-3 items-center">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onToggleDone(id)}
        />
        <p>{title}</p>
        <p onClick={() => setIsOpen(true)} className="text-sm text-gray-400">
          {description}
        </p>
        <button
          onClick={() => onDelete(id)}
          className="w-[20px] h-[20px] rounded-xl hover:bg-red-300 bg-red-500 text-white text-sm flex justify-center items-center ml-auto"
        >
          x
        </button>
      </div>
      {/* EditTodoModal */}
      {open && (
        <div className="bg-black/50 flex justify-center items-center w-screen h-screen fixed top-0 left-0">
          <div className="w-5/10 bg-white rounded flex flex-col p-5">
            <h3 className="text-xl mb-5">Edit Todo</h3>
            <input
              type="text"
              placeholder="Title"
              className="outline-none w-full mb-5 border-b-2 border-emerald-200"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
            {/*title*/}
            <input
              type="text"
              placeholder="Description"
              className="outline-none w-full mb-5 border-b-2 border-emerald-200"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
            {/*description*/}
            <div className="flex gap-2 justify-end w-full mt-auto">
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded bg-red-500 text-white "
              >
                Cancel
              </button>
              <button onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoItem;
