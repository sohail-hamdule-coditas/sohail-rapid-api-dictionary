import { getExamples } from "@/services/api";
import { IExamplesBody } from "@/services/api/interfaces";
import styles from "./examples.module.css";

interface IExamples {
  keyword: string;
}

const Examples: any = async ({ keyword }: IExamples) => {
  let exampleData: IExamplesBody = await getExamples(keyword);

  return (
    <div className={styles.wrapper}>
      <h3>Examples:</h3>
      <br />
      <ol>
        {exampleData?.examples?.map((example, index) => (
          <li key={`example-${index}`}>{example}</li>
        ))}
      </ol>
    </div>
  );
};

export default Examples;
