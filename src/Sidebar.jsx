import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

export default function Sidebar({ isOpen, handleClose }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={handleClose}
        className="visible relative z-50 md:invisible md:-z-10"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="scale-0"
          enterTo="scale-100"
          leave="ease-in duration-300"
          leaveFrom="scale-100"
          leaveTo="scale-0"
        >
          <div className="fixed inset-0 grid place-items-center py-4">
            <Dialog.Panel className="relative h-full w-11/12 max-w-2xl rounded bg-white py-12 px-8 shadow-lg shadow-black/20">
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 text-3xl text-slate-500"
              >
                <FaTimes />
              </button>
              <div className="flex flex-col gap-8">
                {sublinks.map((item) => {
                  const { links, page } = item;
                  return (
                    <article key={page} className="flex flex-col gap-6">
                      <h4 className="font-bold capitalize tracking-wider">
                        {page}
                      </h4>
                      <div className="grid gap-y-1 sm:grid-cols-2">
                        {links.map((link, index) => {
                          const { url, icon, label } = link;
                          return (
                            <a
                              key={index}
                              href={url}
                              className="flex items-center gap-4"
                            >
                              <span className="text-slate-500">{icon}</span>
                              <span className="capitalize">{label}</span>
                            </a>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
