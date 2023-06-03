import React from 'react';

type TOption = {
  value: number;
  name: string;
};

interface IMySelect {
  options: TOption[];
  onChange: (value: number) => void;
  defaultValue: string;
  value: number;
}

export default function MySelect({ options, defaultValue, value, onChange }: IMySelect) {
  return (
    <select value={value} onChange={(event) => onChange(Number(event.target.value))}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
