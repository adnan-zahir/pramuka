"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler, useCallback, useEffect, useState } from "react";

export function SelectInput({
  array,
  keyName,
  value,
  defaultSelectedKeys,
  label,
  paramName,
}: {
  array: any[];
  keyName: string;
  value: string;
  defaultSelectedKeys: string[];
  label: string;
  paramName: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState<string>(defaultSelectedKeys[0]);
  const [propState, setPropState] = useState({
    array: array,
    key: keyName,
    value: value,
    label: label,
    paramName: paramName,
    defaultSelectedKeys: defaultSelectedKeys,
  });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const setSearchParam = (value: string) => {
    window.history.pushState(
      {},
      "",
      `${pathname}?${createQueryString(propState.paramName, value || "0")}`,
    );
    // router.push(
    //   `${pathname}?${createQueryString(propState.paramName, value || "0")}`,
    // );
  };

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    setPropState({
      array: array,
      key: keyName,
      value: value,
      label: label,
      paramName: paramName,
      defaultSelectedKeys: defaultSelectedKeys,
    });

    setSelected(defaultSelectedKeys[0]);
  }, []);

  useEffect(() => {
    if (propState.paramName) {
      setSearchParam(selected);
    }
  }, [selected]);

  return (
    <Select label={label} selectedKeys={[selected]} onChange={handleSelect}>
      {array.map((i: any) => (
        <SelectItem key={i[propState.key]}>{i[propState.value]}</SelectItem>
      ))}
    </Select>
  );
}
