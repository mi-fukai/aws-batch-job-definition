import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { useDelayedEffect } from "@/lib/customHooks";

interface TypeProps {
  props: {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
  };
}

export const AutoCompleteTextField: React.VFC<TypeProps> = ({
  props,
}: TypeProps) => {
  const { searchText, setSearchText } = props;
  const defaultAutoCompleteKeyWords: string[] = [
    "hoge",
    "hogehoge",
    "hogehogehoge",
    "hogehogehogehoge",
  ];

  const [autoCompleteKeyWords, setAutoCompleteKeyWords] = useState(
    defaultAutoCompleteKeyWords
  );
  const updateSearchText = (event, newValue: string) => {
    setSearchText(newValue);
  };
  const updateAutoCompleteKeyWords = async (): Promise<void> => {
    // {result:[{text:"AutoCompleteKeyWord"}],...}
    if (searchText) {
      const autoCompleteKeyWords: string[] = (
        await (
          await fetch(
            `${process.env.NEXT_PUBLIC_HOST}/api/suggest/${searchText}`
          )
        ).json()
      ).result.map((item) => item.text);
      setAutoCompleteKeyWords(autoCompleteKeyWords);
    } else {
      setAutoCompleteKeyWords(defaultAutoCompleteKeyWords);
    }
  };

  useDelayedEffect(() => {
    updateAutoCompleteKeyWords();
  }, [searchText]);

  return (
    <Autocomplete
      value={searchText}
      onInputChange={updateSearchText}
      options={autoCompleteKeyWords}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} id="standard-basic" label="きーわーど" />
      )}
    ></Autocomplete>
  );
};
