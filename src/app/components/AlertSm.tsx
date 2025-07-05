'use client';

import { useRef } from 'react';
import { signIn } from "next-auth/react";

export default function AlertSm() {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    openModal()


    return (
        <div>
            <button onClick={openModal} className="btn mt-4 mr-4 w-[40px] text-error-content bg-error absolute right-0"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current mt-[3px]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></button>
            <div className="grid place-content-center h-screen">
                <div className="card card-dash bg-base-100 w-80 bg-base-200">
                    <div className="flex flex-row items-center card-body"> 
                        <svg className="fill-base-content" xmlns="http://www.w3.org/2000/svg" height="82px" viewBox="0 -960 960 960" width="82px"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                        <div className="ml-[10px] w-full">
                            <h2 className="card-title">ReCommunity</h2>
                            <button onClick={() => signIn("google")} className="w-full mt-[5px] px-2 py-1 border border-gray-600 rounded-md bg-base-100 text-base-content text-left font-mono tracking-widest hover:border-gray-500">••••••••</button>
                            <p className='text-[10px] mt-[5px] text-error'>Error! Please try again.</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <dialog ref={dialogRef} id="my_modal_2" className="modal">
                <div className="modal-box">
                <div className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current mt-[3px]" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <h3 className="ml-[10px] font-bold text-lg">Error!</h3>
                </div>
                <p className="py-4">You need to login with your university email. Please try again.</p>
                <div className="mt-auto flex justify-end">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                <button aria-label="Close"></button>
                </form>
            </dialog>
        </div>
    );
}