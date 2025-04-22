interface TotalTaskProps {
  totalTask: number;
}

const TotalTask = ({ totalTask }: TotalTaskProps) => {
  return (
    <div>
      <p>Total tasks: {totalTask}</p>
    </div>
  );
};

export default TotalTask;
