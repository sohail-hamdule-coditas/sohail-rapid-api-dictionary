import { BACKEND_URL } from "@/constants/constants";
import { Suspense } from "react";
import SearchBox from "../(searchBox)/searchBox";
import Definition from "./(definitions)/definitions";
import Examples from "./(examples)/examples";
import Synonyms from "./(synonyms)/synonyms";

interface IKeyword {
  params?: {
    keyword: string;
  };
}

export default function Keyword(props: IKeyword) {
  const searchKeyword = props?.params?.keyword;
  return (
    <>
      <p style={{ textAlign: "center" }}>
        Displaying results for:{" "}
        <strong>{decodeURI(props?.params?.keyword ?? "")}</strong>
      </p>
      <br />
      {searchKeyword && (
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-evenly",
          }}
        >
          <Suspense fallback={<p>Loading definitions...</p>}>
            <Definition keyword={searchKeyword} />
          </Suspense>

          <Suspense fallback={<p>Loading synonyms...</p>}>
            <Synonyms keyword={searchKeyword} />
          </Suspense>

          <Suspense fallback={<p>Loading examples...</p>}>
            <Examples keyword={searchKeyword} />
          </Suspense>
        </div>
      )}
    </>
  );
}
