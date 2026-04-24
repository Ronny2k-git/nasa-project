import type { ReactNode } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: ReactNode;
};

export function Portal({ children }: PortalProps) {
  return ReactDOM.createPortal(children, document.body);
}
