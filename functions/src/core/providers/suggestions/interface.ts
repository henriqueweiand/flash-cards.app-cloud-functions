export interface WordSuggestionsResponse {
  responses: {
    data: {
      suggestions: {
        requestId: string;
        parameters: {
          prefix: string;
          word: string;
          localTermId: string;
          wordLang: string;
          defLang: string;
        };
        suggestions: {
          text: string;
          id: number;
        }[];
      };
    };
  }[];
}

export interface PrefixSuggestionsResponse {
  responses: {
    data: {
      suggestions: {
        requestId: string;
        parameters: {
          prefix: string;
          localTermId: string;
          wordLang: string;
        };
        suggestions: {
          text: string;
          id: number;
        }[];
      };
    };
  }[];
}

export interface IAxiosParams {
  wordLang: string;
  defLang: string;
  prefix: string;
  word?: string;
}
