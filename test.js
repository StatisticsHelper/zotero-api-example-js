/** **********************************************
 *     ------------------------------------- 
 *     |  JS Example API call from Zotero  |
 *     -------------------------------------
 * 
 *  This is just a test file that I created to
 *  figure out how to call the Zotero API.
 * 
 *  The code instructions are in the documentation
 *  for zotero-api-client and can be found here:
 *  https://github.com/tnajdek/zotero-api-client
 *
 *  *********************************************/

const { default: api } = require('zotero-api-client');

async function callAPI() { 
    const response = await api().library('user', 475425).collections('9KH9TNSJ').items().get();
    console.log(response.getResponseType());
    const items = response.getData();
    console.log(items.map(i => i.title));
};
callAPI();