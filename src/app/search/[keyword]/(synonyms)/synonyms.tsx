import { getSynonyms } from "@/services/api";
import { ISynonymsBody } from "@/services/api/interfaces";
import styles from "./synonyms.module.css";

interface ISynonyms {
  keyword: string;
}

const Synonyms: any = async ({ keyword }: ISynonyms) => {
  const synonymsData: ISynonymsBody = await getSynonyms(keyword);

  return (
    <div className={styles.wrapper}>
      <h3>Synonyms:</h3>
      <br />
      <p>{synonymsData?.synonyms?.join(", ")}</p>
    </div>
  );
};

export default Synonyms;
