import { type InputHTMLAttributes, useState } from "react";
import "./input.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  search: string;
  setSearch: (search: string) => void;
  popular?: string[];
  onSelected: (term: string) => void;
}

export const Input = ({
  search,
  setSearch,
  popular,
  onSelected,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        className="input-field"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {isFocused && popular && (
        <div className="bottom-sheet">
          <div className="bottom-sheet-header">
            <span>Часто ищут:</span>
            <button className="close-btn" onClick={() => setIsFocused(false)}>
              ✕
            </button>
          </div>
          <div className="bottom-sheet-content">
            {popular?.map((term) => (
              <button
                key={term}
                className="bottom-sheet-item"
                onMouseDown={() => {
                  setSearch(term);
                  onSelected(term);
                  setIsFocused(false);
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
