import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export const Modal = ({ title, textButton, openModal, closeModal, children }) => {
    return (
        <Transition appear show={openModal} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                <div className="min-h-screen px-4 text-center">

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black/75" />
                    </Transition.Child>

                    <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-[#1a1a1b] border border-[#3a3a3c] shadow-2xl rounded-2xl text-white">
                            <Dialog.Title as="h3" className="text-lg font-bold tracking-widest uppercase text-white">
                                {title}
                            </Dialog.Title>

                            <div className="mt-4">
                                {children}
                            </div>

                            <div className="mt-6 flex justify-center">
                                <button
                                    type="button"
                                    className="px-8 py-2 text-sm font-bold uppercase tracking-widest text-white bg-[#e91e63] rounded-full hover:bg-[#c2185b] active:bg-[#ad1457] transition-colors duration-150 focus:outline-none"
                                    onClick={closeModal}
                                >
                                    {textButton}
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
