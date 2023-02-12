export interface IDefinitionBody {
  word: string,
  definitions: Array<{
    definition: string;
    partOfSpeech: string;
  }>
}

export interface ISynonymsBody {
  word: string,
  synonyms: Array<string>;
}

export interface IExamplesBody {
  word: string,
  examples: Array<string>;
}