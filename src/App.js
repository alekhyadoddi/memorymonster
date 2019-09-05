import React, { Component } from "react";
// import logo from './logo.svg';
import Card from "./components/Card";
import Monster from "./components/Monster";
import Score from "./components/Score";
import monsters from './data';
import "./App.css";

class App extends Component {
  
  // state = {
    
  //   picarray: [],
  //   score: 0,
  //   status: ""
  // };

  // constructor() {
  //   super();
   state = {
        selecteditems: [],
        allitems: [],
        score: 0,
monsters,
        message: ""
        
    }
// }

  
  clickrearrange = currentimage => {
    console.log(this.state);
    let selecteditems = this.state.selecteditems;
   
    if( selecteditems.indexOf(currentimage) > -1){
      console.log("image exists")
      this.setState({ selecteditems: [], score: 0, message:  "you lost" });
      return;
    }else{
      selecteditems.push(currentimage)

      if(selecteditems.length === 5){
         // console.log('e insidYou Win');
        this.setState({ selecteditems: [], score: 0, message:  "you won"});
        // console.log('You Win');
        // return;
      }

      this.setState({ monsters, selecteditems, score: selecteditems.length, message: "" });
console.log(this.state)
//got the logic for shuffling the two dimensional array from internet
      for (let i = monsters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [monsters[i], monsters[j]] = [monsters[j], monsters[i]];
        console.log(monsters[i],monsters[j])
      }
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="Title">
          <h1>Beat the monster!</h1>
        </header>
        <Score total={this.state.score}
               maxscore={5}
               message={this.state.message}
               />
        <Monster>
          {this.state.monsters.map(monster => (
            <Card
              clickrearrange={this.clickrearrange}
              id={monster.id}
              key={monster.id}
              image={monster.image}
            />
          ))}
        </Monster>
  <div>you cannot click the image more than once,max score 5</div>
    </div>
    );
  }
}

export default App;





