import { getDefinition } from "@/services/api";
import { IDefinitionBody } from "@/services/api/interfaces";
import React from "react";
import styles from "./definitions.module.css";

interface IDefinition {
  keyword: string;
}

const Definitions: any = async ({ keyword }: IDefinition) => {
  let definitionData: IDefinitionBody = await getDefinition(keyword);

  if (definitionData?.definitions?.length === 0) return <></>;

  return (
    <div className={styles.wrapper}>
      <h3>Definitions:</h3>
      <br />
      {definitionData?.definitions?.map((definitionData, index) => (
        <React.Fragment key={`def-wrapper-${index}`}>
          <p key={`def-${index}`}>
            <strong>Definition:</strong> {definitionData.definition}
          </p>
          <p key={`pos-${index}`}>
            <strong>Part of Speech:</strong> {definitionData.partOfSpeech}
          </p>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Definitions;
