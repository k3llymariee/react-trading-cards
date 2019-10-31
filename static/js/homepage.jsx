class Homepage extends React.Component {
	render(){
		return (
            <div>
                <h2>Hello {this.props.name}</h2>
                <p>This is a wonderful site for <a href="/cards">viewing trading cards</a>
                </p>
                <img src="/static/img/balloonicorn.jpg" />
            </div>
        );
	}
}

ReactDOM.render(<Homepage name="Brighticorn" />, document.getElementById('app'));