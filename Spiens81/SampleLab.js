this.Utils = function (strValue) {
    this.stringValue = strValue;
    this.cut = () => { console.log(window.navigator.clipboard) };
    this.copy = () => { };
    this.Paste = () => { };
    this.Slice = () => { console.log(this.stringValue.slice(0, 2)); };
    this.toLower = () => { console.log(this.stringValue.toLowerCase()); };
    this.toUpper = () => { console.log(this.stringValue.toUpperCase()); };
}

var objUtil = new this.Utils('Sapiens');
objUtil.cut();
objUtil.toLower();
objUtil.toUpper();
objUtil.Slice();