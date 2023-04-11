# flash-cards.app-cloud-functions

## How to use
please inform IDToken Authorization bearer for all requests
- https://us-central1-flash-cards-app-hw.cloudfunctions.net/app/suggestions/word
```js
{
	"fromLanguage": "Portuguese",
	"targetLanguage": "English",
	"word": "dirigir"
}
```

## How to tun
1. Access `functions`;
2. Copy .env-local to .env and fill the variables;
3. Install dependencies;
4. Running local `npm run serve` (when you do some change it is not refreshing, so you have to delete the folder lib and run again);
5. To deploy, run `firebase deploy`l