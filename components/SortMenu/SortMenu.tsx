"use client";

import ChevronIcon from "@/components/icons/ChevronIcon/ChevronIcon";
import { SORT_OPTIONS, type SortOption } from "@/lib/sort-medias";
import { type KeyboardEvent, useEffect, useId, useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const id = useId();
  const labelId = `${id}-label`;
  const buttonId = `${id}-button`;
  const orderedOptions = [
    sortBy,
    ...SORT_OPTIONS.filter((option) => option !== sortBy),
  ];
  const lastIndex = orderedOptions.length - 1;

  useEffect(() => {
    if (isOpen) listRef.current?.focus();
  }, [isOpen]);

  const openMenu = () => {
    setActiveIndex(0);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const selectOption = (option: SortOption) => {
    onSort(option);
    closeMenu();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case "ArrowDown":
        setActiveIndex((index) => Math.min(index + 1, lastIndex));
        break;
      case "ArrowUp":
        setActiveIndex((index) => Math.max(index - 1, 0));
        break;
      case "Enter":
      case " ":
        if (!event.repeat) selectOption(orderedOptions[activeIndex]);
        break;
      case "Escape":
        closeMenu();
        break;
      default:
        return;
    }
    event.preventDefault();
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
          onClick={openMenu}
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
            aria-activedescendant={`${id}-${orderedOptions[activeIndex]}`}
            className={styles.list}
            onKeyDown={handleKeyDown}
            onBlur={() => setIsOpen(false)}
          >
            {orderedOptions.map((option, index) => (
              <li
                key={`sort-${option}`}
                id={`${id}-${option}`}
                role="option"
                aria-selected={option === sortBy}
                className={`${styles.option} ${index === activeIndex ? styles.active : ""}`}
                onClick={() => selectOption(option)}
                onMouseEnter={() => setActiveIndex(index)}
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
