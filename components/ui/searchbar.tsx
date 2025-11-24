"use client";

import * as React from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  className = ""
}: SearchBarProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-full bg-background/70 dark:bg-zinc-800 px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-ring ${className}`}
    >
      <svg
        className="h-5 w-5 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"
        />
      </svg>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full bg-transparent outline-none placeholder:text-muted-foreground text-sm"
        aria-label="Search"
      />

      <div className="ml-2 hidden sm:flex items-center">
        <kbd className="inline-flex items-center rounded-md border border-input px-2 py-0.5 text-xs text-muted-foreground">
          ⌘/
        </kbd>
      </div>
    </div>
  );
}
