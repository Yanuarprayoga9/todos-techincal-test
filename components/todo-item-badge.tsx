import { Badge } from "@/components/ui/badge";

export function TodoBadge({ isCompleted }: { isCompleted: boolean }) {
  return (
    <Badge
      variant={isCompleted ? "default" : "destructive"}
      className={isCompleted ? "bg-green-600" : ""}
    >
      {isCompleted ? "completed" : "uncomplete"}
    </Badge>
  );
}
