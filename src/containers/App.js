import React from 'react';
import CardList from '../components/CardList';
import Robots from '../Robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({Robots: users}));
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
    }
    render(){
        const {Robots, searchfield} = this.state;
        const filteredRobots = Robots.filter(Robots =>{
            return Robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !Robots.length 
            ? 
                <h1 style = {{fontFamily: 'sans-serif',
                fontWeight: 'normal'}}>Loading</h1>
            :
                <div className = 'tc'>
                <h1 style = {{fontFamily: 'sans-serif',
                  fontWeight: 'normal'}}>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList Robots = {filteredRobots}/>
                    </Scroll>
                </div>
    }
}

export default App;