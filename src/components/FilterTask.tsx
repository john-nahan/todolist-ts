interface FilterProps {
  onFilter: () => void;
}

const FilterTask = ({ onFilter }: FilterProps) => {
  return (
    <div className="flex gap-2 justify-start">
      <input type="checkbox" onChange={() => onFilter()} />
      <p>Show Uncompleted Task Only</p>
    </div>
  );
};

export default FilterTask;
