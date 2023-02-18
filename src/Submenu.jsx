import React, { createRef, useEffect, useRef, useState } from "react";
import { Tab } from "@headlessui/react";
import sublinks from "./data";

function classNames(...classList) {
  return classList.filter(Boolean).join(" ");
}

export default function Submenu() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const tabsRef = useRef(sublinks.map(() => createRef()));
  const arrowRef = useRef();
  const parentRef = useRef();
  const childsRef = useRef(sublinks.map(() => createRef()));

  useEffect(() => {
    const tabRef = tabsRef.current[selectedIndex];
    if (tabRef?.current) {
      const { left, right } = tabRef.current.getBoundingClientRect();
      arrowRef.current.style.left = (left + right) / 2 + "px";
    }

    const childRef = childsRef.current[selectedIndex];
    if (childRef?.current) {
      const { width, height } = childRef.current.getBoundingClientRect();
      parentRef.current.style.width = width + "px";
      parentRef.current.style.height = height + "px";
    }

    if (!isOpen) {
      arrowRef.current.style.left = "50%";
      parentRef.current.style.width = "0px";
      parentRef.current.style.height = "0px";
    }
  }, [selectedIndex, isOpen]);

  const openTab = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter") {
      openTab(index);
    }
  };

  const handleMouseEnter = (e, index) => {
    e.target.focus();
    openTab(index);
  };

  const closeTab = () => {
    setSelectedIndex(-1);
    setIsOpen(false);
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      closeTab();
    }
  };

  return (
    <Tab.Group
      as="div"
      selectedIndex={selectedIndex}
      onBlur={handleBlur}
      onMouseLeave={closeTab}
      className="hidden h-full md:block"
    >
      <Tab.List as="ul" className="flex h-full">
        {sublinks.map((item, index) => (
          <li key={item.page} className="relative flex h-full">
            <Tab
              ref={tabsRef.current[index]}
              className={classNames(
                "py-2.5 px-5 font-bold capitalize tracking-wider text-white outline-0",
                "hover:text-white/75 ui-selected:text-white/75"
              )}
              onFocus={() => openTab(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onMouseEnter={(e) => handleMouseEnter(e, index)}
            >
              {item.page}
            </Tab>
          </li>
        ))}
      </Tab.List>
      <div
        ref={arrowRef}
        className={classNames(
          "absolute bottom-0 translate-y-1/2 -translate-x-1/2 -rotate-45 rounded-tr-[3px] border-4 border-t-white border-r-white border-b-transparent border-l-transparent transition-all duration-300",
          !isOpen && "opacity-0"
        )}
      ></div>
      <Tab.Panels
        ref={parentRef}
        onBlur={handleBlur}
        className={classNames(
          "absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-lg bg-white shadow-lg shadow-black/20 transition-all duration-300",
          !isOpen && "opacity-0"
        )}
      >
        {sublinks.map((item, index) => {
          const { links, page } = item;
          return (
            <Tab.Panel
              key={page}
              ref={childsRef.current[index]}
              className={classNames(
                "absolute flex flex-col gap-4 rounded-lg p-8 transition-all duration-300",
                index < selectedIndex &&
                  "invisible -translate-x-[150px] opacity-0",
                index > selectedIndex &&
                  "invisible translate-x-[150px] opacity-0"
              )}
              static
            >
              <h4 className="font-bold capitalize tracking-wider">{page}</h4>
              <div
                className={classNames(
                  "grid gap-y-1 gap-x-8",
                  links.length > 2
                    ? "grid-cols-[repeat(3,1fr)]"
                    : "grid-cols-[repeat(2,1fr)]"
                )}
              >
                {links.map((link, index) => {
                  const { url, icon, label } = link;
                  return (
                    <a
                      key={index}
                      href={url}
                      className="flex w-40 items-center gap-4"
                    >
                      <span className="text-slate-500">{icon}</span>
                      <span className="capitalize">{label}</span>
                    </a>
                  );
                })}
              </div>
            </Tab.Panel>
          );
        })}
      </Tab.Panels>
    </Tab.Group>
  );
}
