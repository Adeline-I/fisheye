"use client";

import ChevronIcon from "@/components/icons/ChevronIcon/ChevronIcon";
import { SORT_OPTIONS, type SortOption } from "@/lib/sort-medias";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./SortMenu.module.css";

type SortMenuProps = {
  sortBy: SortOption;
  onSort: (option: SortOption) => void;
};

const SORT_LABELS: Record<SortOption, string> = {
  popularity: "Popularité",
  date: "Date",
  title: "Titre",
};

const SortMenu = ({ sortBy, onSort }: SortMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const labelId = `${id}-label`;
  const buttonId = `${id}-button`;
  const orderedOptions = [
    sortBy,
    ...SORT_OPTIONS.filter((option) => option !== sortBy),
  ];

  useEffect(() => {
    if (isOpen) listRef.current?.focus();
  }, [isOpen]);

  const selectOption = (option: SortOption) => {
    onSort(option);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className={styles.sort}>
      <span id={labelId} className={styles.label}>
        Trier par
      </span>
      <div className={styles.menu}>
        <button
          ref={buttonRef}
          id={buttonId}
          type="button"
          className={`button ${styles.trigger}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={`${labelId} ${buttonId}`}
          onClick={() => setIsOpen(true)}
        >
          {SORT_LABELS[sortBy]}
          <ChevronIcon direction="down" />
        </button>
        {isOpen && (
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            aria-labelledby={labelId}
            className={styles.list}
            onBlur={() => setIsOpen(false)}
          >
            {orderedOptions.map((option, index) => (
              <li
                key={`sort-${option}`}
                id={`${id}-${option}`}
                role="option"
                aria-selected={option === sortBy}
                className={styles.option}
                onClick={() => selectOption(option)}
              >
                {SORT_LABELS[option]}
                {index === 0 && <ChevronIcon direction="up" />}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortMenu;
