var React = require("react");
var ReactDom = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var SchoolStore = require("./stores/SchoolStore");
var _schools = SchoolStore.getSchools();
SchoolStore.onChange(function(schools){
	_schools = schools;
	render();
});

function render() {
	ReactDom.render(<SchoolsList schools={_schools} />, document.getElementById("container"));
}
render();
