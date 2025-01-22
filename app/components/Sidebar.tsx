"use client";
import { FC, ReactElement, useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LuArrowLeftFromLine } from "react-icons/lu";
import Link from "next/link";
import { createContext, useContext } from "react";
import { FaSquare } from "react-icons/fa6";

const SidebarContext = createContext<ContextProps>({
  setSidebarOpen: () => {},
});

interface ContextProps {
  setSidebarOpen: (open: boolean) => void;
  pathname?: string;
}
interface LinkItemProps {
  href: string;
  name: string;
  subMatch?: boolean;
  icon?: ReactElement<any>;
}
interface CProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

const Sidebar: FC<CProps> & { LinkItem: FC<LinkItemProps>; Divider: FC } = ({
  sidebarOpen,
  setSidebarOpen,
  children,
}) => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLElement>(null);
  const handleSidebarClose = useCallback(
    (e: MouseEvent) => {
      !sidebarRef.current!.contains(e.target as Node) && setSidebarOpen(false);
    },
    [setSidebarOpen]
  );

  useEffect(() => {
    if (sidebarOpen && window.innerWidth >= 768) {
      document.addEventListener("click", handleSidebarClose);

      return () => document.removeEventListener("click", handleSidebarClose);
    }
  }, [sidebarOpen, handleSidebarClose]);
  return (
    <aside
      ref={sidebarRef}
      className={clsx(
        "fixed z-40 top-0 left-0 lg:max-w-[280px] lg:p-4 lg:min-h-[calc(100vh-56px)] lg:bottom-0 lg:top-auto  transition-all text-slate-600 overflow-x-hidden max-w-0 min-h-screen  border border-slate-100 shadow w-full bg-white",
        {
          "max-w-xs p-4": sidebarOpen,
        }
      )}
    >
      <button
        onClick={() => setSidebarOpen(false)}
        type="button"
        className="ml-auto block hover:bg-slate-100 p-4 lg:hidden"
        title="close sidebar"
      >
        <LuArrowLeftFromLine className="text-xl" />
      </button>
      <ul className="space-y-2">
        <SidebarContext.Provider value={{ setSidebarOpen, pathname }}>
          {children}
        </SidebarContext.Provider>
      </ul>
    </aside>
  );
};
const LinkItem: FC<LinkItemProps> = ({ href, name, subMatch, icon }) => {
  const { setSidebarOpen, pathname } = useContext(SidebarContext);

  return (
    <li>
      <Link
        onClick={() => setSidebarOpen(false)}
        href={href}
        className={clsx("text-lg p-2 hover:bg-slate-100 w-full flex items-center gap-2", {
          "bg-slate-100": subMatch ? pathname?.startsWith(href) : pathname === href,
        })}
      >
        {icon ? icon : <FaSquare />} <span>{name}</span>
      </Link>
    </li>
  );
};
const Divider: FC = () => {
  return <hr className="!mt-8" />;
};

Sidebar.LinkItem = LinkItem;
Sidebar.Divider = Divider;
export default Sidebar;
