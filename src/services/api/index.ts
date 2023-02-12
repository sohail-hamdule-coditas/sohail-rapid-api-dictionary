import fetchWrapper from "../fetchWrapper"

export const getDefinition = async (word: string) => {
  const response = await fetchWrapper(`/words/${word}/definitions`, {
    method: 'GET'
  })
  return response?.json();
}

export const getSynonyms = async (word: string) => {
  const response = await fetchWrapper(`/words/${word}/synonyms`, {
    method: 'GET'
  })
  return response?.json();
}

export const getExamples = async (word: string) => {
  const response = await fetchWrapper(`/words/${word}/examples`, {
    method: 'GET'
  })
  return response?.json();
}