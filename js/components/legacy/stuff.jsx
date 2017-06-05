define([
	"react",
	"jsx!components/navbar"
], function(React, Navbar){
	return React.createClass({
		getInitialState(){
			return {tag: ''};
		},

		handleChange(event) {
    		this.setState({tag: event.target.value});
  		},

  		handleSubmit(event) {
  			event.preventDefault();
  			
  			var self = this;
  			axios.get('/hello')
  			.then(function(response){
  				console.log(response)
  				self.setState({tag: response.data.tag})
  			})
  			.catch(function(err){
  				console.log(err)
  			});

    		// $.ajax({
    		//   type: 'GET',
		    //   url: '/hello',
		    //   dataType: 'json',
		    //   cache: false,
		    //   success: function(json) {
		    //   	console.log(json);
		    //     this.setState({tag: json.tag});
		    //   }.bind(this),
		    //   error: function(xhr, status, err) {
		    //     console.error(this.props.url, status, err.toString());
		    //   }.bind(this)
		    // });
  		},

		render(){
			return(
				<div id="stuff"> <Navbar />
				<form onSubmit={this.handleSubmit}>
				  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
				    <input class="mdl-textfield__input" type="text" id="tag" value={this.state.tag} onChange={this.handleChange}/>
				    <label class="mdl-textfield__label" for="tag">Tag</label>
				  </div>
				</form>
			     </div>
				);
		}
	})
}
)
