module.exports = {

	"Validate google search with results" : function (browser) {
		browser
         .url('https://www.google.com')
         .setValue('input[name="q"]', 'hello world')
         .setValue('input[name="q"]', browser.Keys.ENTER)
         .waitForElementVisible('#result-stats', 4000)
         .end();
	}


};
