define([
	"react"
], function(React){
	return React.createClass({
		render(){
			return(
				<div className="nav-container">
						<nav className="nav-extended teal">
							<div className="nav-wrapper">
								<a href="./" className="brand-logo center">Tweet Tweet</a>
							</div>
							<div className="nav-content">
								<a href="./" className="nav-title">Home</a>
								<a href="./page" className="nav-title">Hashtag</a>							
							</div>
						</nav>
				</div>
			)
		}
	})
}
)
