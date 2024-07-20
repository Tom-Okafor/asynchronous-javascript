(() => {
    "use strict";
    let oldValue = 7;

    function returnNewValueWithCallback(reassignOldValue) {
        setTimeout(() => {
            oldValue--;
            reassignOldValue(oldValue);
            console.log(oldValue);
        }, 3000);
    }

    function reassignOldValue() {
        const NEW_VALUE = 20;
        oldValue = NEW_VALUE;
    }

    returnNewValueWithCallback(reassignOldValue);
})();
