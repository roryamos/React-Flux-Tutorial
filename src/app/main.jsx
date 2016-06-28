var React = require("react");
var ReactDom = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var SchoolStore = require("./stores/SchoolStore");
var _schools = [];
var getSchoolsCallback = function(schools) {
	_schools = schools;
	render();
}
SchoolStore.onChange(getSchoolsCallback);

function render() {
	ReactDom.render(<SchoolsList schools={_schools} />, document.getElementById("container"));
}