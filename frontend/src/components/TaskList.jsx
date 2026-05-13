import TaskCard from "./TaskCard";
import TaskEmptyState from "./TaskEmptyState";

const TaskList = () => {
  let filter = "all";
  const filteredTasks = [
    // {
    //   _id: "1",
    //   title: "flower1st",
    //   status: "active",
    //   completedAt: null,
    //   createdAt: new Date(),
    // },
    // {
    //   _id: "2",
    //   title: "flower1st2",
    //   status: "complete",
    //   completedAt: new Date(),
    //   createdAt: new Date(),
    // },
  ];
  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter} />;
  }
  return (
    <div>
      {filteredTasks.map((task, i) => {
        <TaskCard key={task._id ?? i} task={task} index={i} />;
      })}
    </div>
  );
};

export default TaskList;
