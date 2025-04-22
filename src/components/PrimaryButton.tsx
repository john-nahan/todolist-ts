import { ReactNode } from "react";
function PrimaryButton({ children }: { children: ReactNode | string }) {
  return (
    <button className="px-3 py-2 rounded bg-teal-500 text-white ">
      {children}
    </button>
  );
}

export default PrimaryButton;
