"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ISearchBox {
  params?: {
    keyword?: string;
  };
}

export default function SearchBox(props: ISearchBox) {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(decodeURI(window.location.pathname.split("/").at(-1) ?? ""));
  }, []);

  const handleSearch = () => {
    router.push(`/search/${searchValue}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: "4px",
        marginTop: "2rem",
      }}
    >
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
