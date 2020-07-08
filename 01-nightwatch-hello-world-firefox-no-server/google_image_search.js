module.exports = {

	"google search by image" : function (browser) {
		browser
         .url('https://www.google.com.pe/imghp?hl=en&tab=ri&ogbl')
         .click('.LM8x9c')
				 .click('.iOGqzf.H4qWMc.aXIg1b')
				 .setValue('input[name="encoded_image"]', require('path').resolve('/tmp/waifu.jpeg'))
				 .waitForElementVisible('.invisible', 4000000)
         .end();
	}
};
