import React from 'react';

import YoutubeSearch from './YoutubeSearch';
import YoutubeDisplay from './YoutubeDisplay';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      resultItems: []
    }

    this.onResult = this.onResult.bind(this);
  }

  render() {
    return (
      <div>
        <YoutubeSearch
          apiKey="AIzaSyDCJR_KeTTpAo7k058BfPQeyOm154f_YOM"
          onResult={this.onResult}
          />
        <YoutubeDisplay
          items={this.state.resultItems}
          />
    </div>
    )
  }

  onResult(resultItems) {
    this.setState({resultItems});
  }
}


export default App;
