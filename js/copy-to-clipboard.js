/*jslint browser: true, this */
/*global window, document */

function CopyToClipboard() {
    'use strict';

    var body = document.querySelector('body'),
        firstChildOfBody = body.firstElementChild,
        errorMessageContainer = document.createElement('div'),
        errorMessage = '',
        errorMessageNode = document.createTextNode(errorMessage),
        copyToClipboardTrigger = document.getElementById('copy-to-clipboard-trigger'),
        contentToCopy = document.getElementById('content-to-copy'),
        clipboardExampleContainer = document.getElementById('clipboard-example-container'),
        errorsFound = false;

    errorMessageContainer .id = 'error';

    function checkCopyToClipboardTrigger() {
        if (null === copyToClipboardTrigger) {
            errorsFound = true;
            clipboardExampleContainer.classList.add('hide');
            errorMessageContainer.appendChild(errorMessageNode);
            body.insertBefore(errorMessageContainer, firstChildOfBody);
            errorMessageContainer.innerHTML += 'A reference to the element with the ID ' +
                    '<code>copy-to-clipboard-trigger</code> could not be made, ' +
                    'perhaps because the JS variable <code>copyToClipboardTrigger</code> ' +
                    'was not initialized.';
        } else {
            if (undefined === copyToClipboardTrigger) {
                errorsFound = true;
                clipboardExampleContainer.classList.add('hide');
                errorMessageContainer.appendChild(errorMessageNode);
                body.insertBefore(errorMessageContainer, firstChildOfBody);
                errorMessageContainer.innerHTML += 'A reference to the element with the ID ' +
                        '<code>copy-to-clipboard-trigger</code> could not be made, ' +
                        'perhaps because the ID is mis-spelled.';
            }
        }
    }

    function checkContentToCopy() {
        if (null === contentToCopy) {
            errorsFound = true;
            clipboardExampleContainer.classList.add('hide');
            errorMessageContainer.appendChild(errorMessageNode);
            body.insertBefore(errorMessageContainer, firstChildOfBody);
            errorMessageContainer.innerHTML += 'A reference to the element with the ID ' +
                    '<code>content-to-copy</code> could not be made, ' +
                    'perhaps because the JS variable <code>contentToCopy</code> ' +
                    'was not initialized.';
        } else {
            if (undefined === contentToCopy) {
                errorsFound = true;
                clipboardExampleContainer.classList.add('hide');
                errorMessageContainer.appendChild(errorMessageNode);
                body.insertBefore(errorMessageContainer, firstChildOfBody);
                errorMessageContainer.innerHTML += 'A reference to the element with the ID ' +
                        '<code>content-to-copy</code> could not be made, ' +
                        'perhaps because the ID is mis-spelled.';
            }
        }
    }

    this.run = function () {
        checkCopyToClipboardTrigger();

        if (!errorsFound) {
            checkContentToCopy();
        }

        if (!errorsFound) {
            copyToClipboardTrigger.addEventListener('click', function (event) {

                // Prevent the default behavior attached to the <a>nchor element.
                event.preventDefault();

                // Copy the entire contents of the input box whose ID is `content-to-copy`.
                contentToCopy.select();

                // Copy the content that was just selected.
                document.execCommand('copy');
            });
        }
    };
}

var copyToClipboard = new CopyToClipboard();

copyToClipboard.run();
