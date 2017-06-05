require([
    "react",
    "react-dom",
    "jsx!components/stuff"
], function(React, ReactDOM, Stuff) {
    var app = React.createElement(Stuff);
	  ReactDOM.render(app, document.getElementById('root'));
}, function(error) {

});
