# Zotero interface example (JavaScript)

## Description
This is a repo for simple scripts I wrote using the Zotero API Client, which serve to teach a bit about the mechanics of the calls to this specific API using the JavaScript-based Zotero API Client.

This repo contains two files:
1.  ``test.js`` is a script that uses the Zotero API to access a public, test library and print out items in that library. I wrote it following the instructions in the documentation for [Zotero API Client](https://github.com/tnajdek/zotero-api-client). The script simply the "hello, world!" equivalent of the Zotero API Client.
2.  ``stats-helper.js`` is a script that calls the Zotero API to access the OU Statistics Helper [online Zotero library](https://www.zotero.org/groups/2547147/statistics_helper/library). It's written in an instructive fashion to showcase the details of an API call to Zotero. It prints out 1) the number of items in the library, 2) the Zotero API response, and 3) the items contained in that response. Moreover, it performs a (hard-coded) tag-based filtering of the items and prints out the items that contain the tag `0.1 Goal: inferential`.

## Usage
To run the scripts, you need to have installed 
* ``npm`` - to install and manage packages like the ``zotero-api-client``. This code runs with ``npm@8.19.2``. Instructions are [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
* ``zotero-api-client`` (instructions are in the documentation, linked above).
* Once you have the previous two, open your shell terminal and type ``node test.js`` to run ``test.js``, or ``node stats-helper.js`` to run ``stats-helper.js``.

## Issues
Writing ``stats-herlper.js`` showed me that there is a max number of items that can be called with the Zotero API Client, which is 25 items. This means that every time I request data from the library, it returns the same 25 top items (sorted by last-modified date).

## Next
Statistics Helper wouldn't be useful if a response is limited to 25 items. The next step is to figure out how to make the response include all the items in the library (currently: 1066). If that fails, I will move to using the Python-based client, ``PyZotero``.

