import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui";

export type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: () => void;
};

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  return (
    <div className="flex items-center gap-2 text-base">
      <Button
        className="uppercase rounded-lg"
        variant="ghost"
        iconLeft={<ChevronLeft className="size-4" />}
        disabled={page === 1}
      >
        Prev
      </Button>

      <Button className="uppercase" variant="ghost">
        {page}
      </Button>

      <Button
        className="uppercase rounded-4xl"
        variant="ghost"
        iconRight={<ChevronRight className="size-4" />}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </div>
  );
}
