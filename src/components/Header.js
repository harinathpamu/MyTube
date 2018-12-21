import React from 'react'

class Header extends React.Component {

    state = { search_term: '' };

    onInputChangeHandler = (event) => {
        this.setState({ search_term: event.target.value });
        // console.log(event.target.value);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchTermSubmit(this.state.search_term);
    }

    render() {
        return (
            <nav className="navbar sticky-top navbar-light bg-light d-flex justify-content-center">
                <span className="navbar-brand" role="img" aria-label="emoji">MyTube ✌</span>
                <form className="w-50" onSubmit={this.onFormSubmit} >
                    <div className="ui search w-100">
                        <div className="ui icon input w-100">
                            <input value={this.state.search_term} onChange={this.onInputChangeHandler} style={{background:'rgb(40, 44, 52)'}} 
                            className="prompt text-white" type="text" placeholder="Search" />
                            <i className="search icon text-white"></i>
                        </div>
                    </div>
                </form>
            </nav>
        );
    }
}


export default Header;