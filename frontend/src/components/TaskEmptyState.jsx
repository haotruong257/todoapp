import { Circle } from "lucide-react";
import { Card } from "./ui/card";

const TaskEmptyState = ({ filter }) => {
  return (
    <Card
      className={"p-8 text-center border-0 bg-gradient-card shadow-custom-md"}
    >
      <div className="space-y-3">
        <Circle className="mx-auto size-12 text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">
            {filter === "active"
              ? "Not missions doing"
              : filter === "completed"
                ? "Not any missions completed"
                : "Not missions available"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {filter === "all"
              ? "Add first mission to start!"
              : `Switch to All to display mission ${filter === "active" ? "completed" : "doing"}`}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TaskEmptyState;
