interface ItemProps {
  id: string;
  isDone: boolean;
  title: string;
  description: string;
  onClick: (id: string) => void;
  onToggleDone: (id: string) => void;
}

const TodoItem = ({
  id,
  isDone,
  title,
  description,
  onClick,
  onToggleDone,
}: ItemProps) => {
  return (
    <div className="border-b-1 border-gray-100 py-3 flex gap-3 items-center">
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => onToggleDone(id)}
      />
      <p>{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
      <button
        onClick={() => onClick(id)}
        className="w-[20px] h-[20px] rounded-xl hover:bg-red-300 bg-red-500 text-white text-sm flex justify-center items-center ml-auto"
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
