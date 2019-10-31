class About extends React.Component {
    render(){
        return (
            <div>
                <h1>About the author goes here</h1>
                <p>The author of this page is a student at Hackbright Academy</p>
            </div>
        );
    }
}

ReactDOM.render(<About />, document.getElementById('aboutContainer'));