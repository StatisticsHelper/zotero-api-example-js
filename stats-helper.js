/** **********************************************************
 *     --------------------------------------------------
 *     | JS API call to OU Stats Helper Zotero library  |
 *     --------------------------------------------------
 *                  AUTHOR: Ahmed Sharaf
 * 
 *  This is a test code I created to see how Zotero API calls
 *  work in the context of Statistics Helper resource library.
 * 
 *  I found out that, for whatever reason, the response is
 *  limited to 25 items only, which is quite a problem.
 * 
 *  **********************************************************/



// import the JS zotero-api-client library with common-js
const { default: api } = require('zotero-api-client');

// identify the Statistics Helper library by its type & id.
const library_id = 2547147;
const library_type = "group";

// wrap the API request inside an asynchronous function -- because it "await"s the response from Zotero.
async function callAPI() {

    const library = await api().library(library_type, library_id);  // this binds the Statistics Helper Zotero online library to the const "library".
    const response = await library.items().get();                   // this is a MultiReadResponse (see more in zotero-api-client documentation).
    let items = response.getData();                                 // extract items from the response to an array (these are all items in the Statistics Helper Zotero library).

    console.log("number of items in Stats Helper Zotero library is: ", response.getTotalResults())
    console.log("response: ", response);

    console.log("here are 25 items, limit of the response items:");
    console.log(items.map(item => item));

    // filter the items (out of the 25 items in response) that contain the tag '0.1 Goal: inferential'.
    items.forEach(item => item.tags.find(t => t.tag === '01. Goal: inferential') ? console.log("item is: ", item.title) : null);

};
callAPI();