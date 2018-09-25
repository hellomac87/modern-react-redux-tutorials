import React, { Component } from 'react';
// input 컴포넌트는 다른 컴포넌트들에게 몇가지 정보를 알려야 한다.
// 그렇기에 클래스 기반의 컴포넌트로 만들어야 한다.
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: ' ',
        }
    }
    
    render(){
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)} type="text" placeholder="text" />
            </div>
        );
    }

    onInputChange(term) {
        const { onSearchTermChange } = this.props;

        this.setState({ term: term });
        onSearchTermChange(term);
    }
}

export default SearchBar;