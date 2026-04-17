export type MissionRowCardProps = {
  id: number;
  date: string;
  mission: string;
  rocket: string;
  destination: string;
  status?: "successful" | "aborted";
};

const statusBorder = {
  successful: "border-l-green-500",
  aborted: "border-l-red-400",
  pending: "border-l-orange-300/90",
};

export function MissionRowCard({
  id,
  date,
  mission,
  rocket,
  destination,
  status,
}: MissionRowCardProps) {
  return (
    <tr
      className={`h-12 bg-cyan-800/20 border-b border-b-cyan-900  border-l-3 
        ${status ? statusBorder[status] : statusBorder.pending}`}
    >
      <td align="center">{id}</td>
      <td align="center">{date}</td>
      <td align="center">{mission}</td>
      <td align="center">{rocket}</td>
      <td align="center">{destination}</td>
      <td align="center">
        {status === "aborted" ? (
          <div className="size-6 bg-red-400/90" />
        ) : status === "successful" ? (
          <div className="size-6 bg-green-500" />
        ) : (
          <button
            aria-label="Abort mission"
            className="px-2 border border-red-400/50 bg-red-500/10 font-semibold hover:border-red-400/80 
          hover:bg-red-500/15"
          >
            <span className="text-xs text-red-400">X</span>
          </button>
        )}
      </td>
    </tr>
  );
}
