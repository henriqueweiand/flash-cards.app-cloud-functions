/* eslint-disable @typescript-eslint/naming-convention */

export interface IAxiosParams {
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

export type ResponseChatGPT = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    text: string;
    index: number;
    logprobs: null;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export type TranslationOptionsResponse = {
  right: string[];
  wrong: string[];
};
