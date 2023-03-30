export class QuizletSuggestion {
  private _accounts: string[] = ['-2191095942591596258'];

  getDefinition() {
    return {
      responses: [
        {
          data: {
            suggestions: {
              requestId: '27f37df1-2753-4497-a3b0-3799acbd0c97',
              parameters: {
                prefix: '',
                word: 'love',
                localTermId: '-1',
                wordLang: 'en',
                defLang: 'pt',
              },
              suggestions: [
                {
                  text: 'amor, amar',
                  id: 13777302071,
                },
                {
                  text: 'apaixonado',
                  id: 13777302072,
                },
                {
                  text: 'o amor',
                  id: 13777302073,
                },
                {
                  text: 'amar, adorar',
                  id: 13777302074,
                },
              ],
            },
          },
        },
      ],
    };
  }

  getWord() {
    return {
      responses: [
        {
          data: {
            suggestions: {
              requestId: '3ce9de6b-b2cd-4c55-b088-00a81f2420e8',
              parameters: {
                prefix: 'hear',
                localTermId: '-1',
                wordLang: 'en',
              },
              suggestions: [
                {
                  text: 'heart',
                  id: 19309032171,
                },
                {
                  text: 'hear',
                  id: 19309032172,
                },
                {
                  text: 'hearing',
                  id: 19309032173,
                },
              ],
            },
          },
        },
      ],
    };
  }
}
