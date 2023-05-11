# flash-cards.app-cloud-functions

Blog post: https://blog.henriquew.com/flash-cards-apps-with-chatgpt
Demo: https://www.youtube.com/watch?v=zztOW_yS5EU

## How to use
please inform IDToken Authorization bearer for all requests
- Endpoint
```js
{
	"fromLanguage": "Portuguese",
	"targetLanguage": "English",
	"word": "dirigir"
}
```

## How to run
1. Access `functions`;
2. Copy .env-local to .env and fill the variables;
3. Install dependencies;
4. Running local `npm run serve` (when you do some change it is not refreshing, so you have to delete the folder lib and run again);
5. To deploy, run `firebase deploy`