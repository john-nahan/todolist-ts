interface TotalTaskProps {
  totalTask: number;
  completedTask: number;
}

const TotalTask = ({ totalTask, completedTask }: TotalTaskProps) => {
  return (
    <div>
      <p>
        Total tasks: {completedTask} / {totalTask}
      </p>
    </div>
  );
};

export default TotalTask;
