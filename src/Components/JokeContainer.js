import React, { Component } from 'react';
import Setup from './Setup';
import Punchline from './Punchline';
import Button from './Button';

class JokeContainer extends Component {
    state = {
        setup: "",
        punchline: "",
        showPunchline: false
      };

      showPunchline = () => {
        this.setState({
          showPunchline: true
        })
      };
    
      componentDidMount() {
        this.fetchJoke();
      }
    
        fetchJoke = () => {
        const api = `https://official-joke-api.appspot.com/random_joke`;
    
        fetch(api)
          .then(res => res.json())
          .then(data => {
            this.setState({
              setup: data.setup,
              punchline: data.punchline,
              showPunchline: false
            });
          });
      };
    
    render() {
        return (
            <div>
                <Setup setup={this.state.setup} fetchJoke={this.fetchJoke}/>
                <Punchline punchline={this.state.punchline} showPunchline={this.state.showPunchline} show={this.showPunchline} />
                <Button onClick={() => this.state.showPunchline ? this.fetchJoke() : this.showPunchline()}>
                  {this.state.showPunchline ? 'Another' : 'Tell me'}
                </Button>
            </div>
        );
    }
}

export default JokeContainer;