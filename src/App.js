import axios from "axios";
import React from "react";
import Data from "./Data";

/* Source consulted: 
https://www.youtube.com/watch?v=eUr4YoJm2Sw 
https://rapidapi.com/Gramzivi/api/covid-19-data/
https://developer.mozilla.org/en-US/docs/Web/CSS/border
*/

const apikey = process.env.apikey

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countryData: [] };
    }

componentDidMount() {
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {name: 'Singapore'},
        headers: {
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key': apikey
        }
      };
      
      axios.request(options).then((response) => { this.setState({countryData : response.data})
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      }
      );
    }

    data() {
        return this.state.countryData.map((data, i) => {
            return <Data obj={data} key={i} />;
        });
    }

    render(){
        return(
            <>
            {this.data()}
            <p align="center">API from https://rapidapi.com/Gramzivi/api/covid-19-data/</p>
            <p>Note: This API is down as of March 2022</p>
            
            </>
        )
    }
}
export default App;