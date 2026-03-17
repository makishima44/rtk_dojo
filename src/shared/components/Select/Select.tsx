"use client";

import { useEffect, useRef, useState } from "react";
import s from "./Select.module.css";

type SelectOptions = {
  label: string;
  value: string | number;
};

type Props = {
  options: SelectOptions[];
};

export const Select = ({ options }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SelectOptions | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: SelectOptions) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={s.root}>
      <button className={s.title} onClick={handleOpenSelect}>
        {selectedOption === null ? "select an option" : selectedOption?.label}
      </button>
      {isOpen && (
        <ul className={s.dropdown}>
          {options.map((option) => {
            return (
              <li className={s.option} onClick={() => handleSelect(option)} key={option.value}>
                {option.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
