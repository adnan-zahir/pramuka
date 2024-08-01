"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useEffect, useState } from "react";

interface SelectInputProps {
  array: { [key: string]: any }[];
  keyName: string;
  value: string;
  defaultSelectedKeys: string[];
  label: string;
  paramName: string;
}

export function SelectInput({
  array,
  keyName,
  value,
  defaultSelectedKeys,
  label,
  paramName,
}: SelectInputProps) {
  const [selected, setSelected] = useState<string>(defaultSelectedKeys[0]);

  const handleSelect = (value: string | Set<string>) => {
    const newValue = typeof value === "string" ? value : Array.from(value)[0];
    setSelected(newValue);
  };

  useEffect(() => {
    setSelected(defaultSelectedKeys[0]);
  }, []);

  return (
    <>
      <Select label={label} selectedKeys={[selected]} onSelectionChange={handleSelect}>
        {array.map((item) => (
          <SelectItem key={item[keyName]}>{item[value]}</SelectItem>
        ))}
      </Select>
      <select name={paramName} className="hidden" value={selected} onChange={() => ""} aria-readonly="true">
        {array.map((item) => (
          <option key={item[keyName]} value={item[keyName]}>{item[value]}</option>
        ))}
      </select>
    </>
  );
}

