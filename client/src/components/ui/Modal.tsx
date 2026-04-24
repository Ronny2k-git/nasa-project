import type { ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { Card } from "./Card";
import { Portal } from "./Portal";

export type ModalProps = ComponentPropsWithRef<"div"> & {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  trigger: ReactNode;
  children: ReactNode;
};

export function Modal({
  className,
  trigger,
  isOpen,
  onClose,
  children,
  ...props
}: ModalProps) {
  return (
    <>
      {trigger}

      {isOpen && (
        <Portal>
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
              onClick={onClose}
            />

            {/* Add FIXED later */}
            <Card
              role="dialog"
              aria-modal="true"
              className={twMerge(
                "gap-4 fixed z-50 p-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ",
                className,
              )}
              {...props}
            >
              <div className="flex w-full justify-end">
                <Button
                  className="size-8 text-lg "
                  variant={"primary"}
                  onClick={onClose}
                >
                  x
                </Button>
              </div>

              {children}
            </Card>
          </>
        </Portal>
      )}
    </>
  );
}
