'use client'

import { useState, useRef, useEffect } from 'react'

export default function CustomDropdown() {
  const [selected, setSelected] = useState('Section A')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const options = ['Section A', 'Section B']

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="absolute w-[150px] max-w-xs bg-base-300 rounded-xl p-[8px]" ref={dropdownRef}>
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center bg-base-300 text-base-content pr-1 pl-2 py-2 rounded-md cursor-pointer transition hover:bg-base-200">
        <span>{selected}</span>
        <span className={`transform transition-transform duration-300  ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className='fill-base-content' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="w-full bg-base-300 text-base-content overflow-hidden">
          {options.map((option) => (
            <li key={option} onClick={() => {setSelected(option), setIsOpen(false)}} className={`mt-2 pl-6 py-2 rounded-md hover:bg-base-200 transition cursor-pointer`}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
