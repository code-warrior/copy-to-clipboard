/*jslint browser: true */
/*global window, document */

var copyToClipboardTrigger = document.getElementById('copy-to-clipboard-trigger');

copyToClipboardTrigger.addEventListener('click', function (event) {
    'use strict';

    var contentToCopy = document.getElementById('content-to-copy');

    // Prevent the default behavior attached to <a>nchor elements.
    event.preventDefault();

    // Copy the entire contents of the input box with ID `content-to-copy`.
    contentToCopy.select();

    // Copy the content that was just selected.
    document.execCommand('copy');
});
