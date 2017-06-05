require([
    "react",
    "react-dom",
    "jsx!components/navbar",
], function(React, ReactDOM, RootComponent) {
    var app = React.createElement(RootComponent);
	ReactDOM.render(app, document.getElementById('root'));
}, function(error) {

});