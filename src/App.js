import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList'
class App extends Component {

  constructor(){
    super();
    this.state={
      searchResults:[],
      searchField:'',
      apikey: '',
      sortBasis:'',
    }
  }
  
  onChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  makeData = (data) => {
    if(this.state.sortBasis === 'name'){
      this.sortByName(data); 
    } else if(this.state.sortBasis === 'date'){
      this.sortByDate(data);
    }else{
      this.setState(()=>{
        return {searchResults:data}
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    var data=[];
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=${this.state.apikey}&part=snippet&maxResults=5&q=${this.state.searchField}`)
    .then(res=>res.json())
    .then(res=>{data=res.items;this.makeData(data)})
  }  

  onFilterChange=(e) => {
    e.preventDefault();
    let sortValue = e.target.value
    if(sortValue==='name' ){
      this.sortByName();
      this.setState({
        sortBasis: sortValue
      })
    }else if(sortValue==='date' ){
      this.sortByDate();
      this.setState({
        sortBasis: sortValue
      })
    }
  }

  sortByDate =(data) => {
    this.setState((prevState)=>{
      data=data===undefined?prevState.searchResults:data;
      return {
          searchResults:data.sort(function(a,b){
          return (a.snippet.publishedAt)>(b.snippet.publishedAt) ? -1 : (a.snippet.publishedAt)<(b.snippet.publishedAt) ? 1 : 0
        })
      }
    })
  }

  sortByName = (data) => {
    this.setState((prevState)=>{
      data=data===undefined?prevState.searchResults:data;
      return {
          searchResults:data.sort(function(a,b){
          return (a.snippet.title)>(b.snippet.title) ? -1 : (a.snippet.title)<(b.snippet.title) ? 1 : 0
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Youtube Search </h1>
        <SearchBox onChange={this.onChange} onSubmit={this.onSubmit} onFilterChange={this.onFilterChange} />
        <CardList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
