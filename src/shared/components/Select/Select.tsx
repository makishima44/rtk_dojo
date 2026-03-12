import { useState } from "react";
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

  const handleOpenSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: SelectOptions) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button className={s.title} onClick={handleOpenSelect}>
        {selectedOption === null ? "select an option" : selectedOption?.label}
      </button>
      {isOpen && (
        <ul>
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
