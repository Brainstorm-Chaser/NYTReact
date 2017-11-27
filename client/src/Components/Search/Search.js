import React from "react";
// import API from "../../Utils/API"
// import Results from "../Results/Results"

class Search extends React.Component {
  state = {
    topic : "",
    start : "",
    end : ""
  };

  // componentDidMount() {
  //   this.loadArticles();
  // }

  // loadArticles = () => {
  //   API.getArticles()
  //     .then(res => this.setState({ topic : res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
       <div className = "container">
        <div className = "row">
          <div className = "col-md-12">
            <div className = "jumbotron">
              <h1>New York Times React App</h1>
            </div>
            <form>                    
                <input type="topic" className="form-control" id="inputTopic" placeholder="Topic"></input>           
                <input type="start" className="form-control" id="inputStart" placeholder="Start Year"></input>             
                <input type="end" className="form-control" id="inputEnd" placeholder="End Year"></input>
            </form>
          </div>
         </div>
        </div>           
      </div>
    );
  }
}

export default Search;