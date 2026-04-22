import { Card } from "./ui";

const statusColor = {
  success: "from-green-500 via-green-500 to-green-400",
  aborted: "from-red-500 via-red-500 to-red-400",
};

type MissionStatusBarProps = {
  title: string;
  status: "success" | "aborted";
  missions: number;
  totalMissions: number;
};

export function MissionStatusBar({
  title,
  status,
  missions,
  totalMissions,
}: MissionStatusBarProps) {
  const calculatedPercentage =
    totalMissions === 0 ? 0 : Math.round((missions / totalMissions) * 100);

  return (
    <Card
      className="p-4 gap-2 text-xs font-body text-cyan-muted"
      cornerBorders={false}
    >
      <span className="  uppercase tracking-widest">{title}</span>

      {/* Status bar */}
      <div className="bg-bg-border h-1">
        <div
          className={` h-full bg-linear-to-r ${statusColor[status]} `}
          style={{ width: `${calculatedPercentage}%` }}
        />
      </div>

      <div className="flex justify-between">
        <span
          className={`text-xs 
            ${status === "success" ? "text-green-500" : "text-red-500"}
            `}
        >
          {calculatedPercentage}%
        </span>

        <div className="">
          {missions} / {totalMissions}
        </div>
      </div>
    </Card>
  );
}
