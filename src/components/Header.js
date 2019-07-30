import React from 'react';

class Header extends React.Component {

    render() {
        const getSearch = (e) => {
            e.preventDefault();
            console.log("search:", e.target.searcher.value);
            this.props.handleSearch(e.target.searcher.value.toLowerCase());
        }
        return (
            <div className="header container-fluid ">
                <h1 className="row justify-content-center">React Bookstore</h1>
                <form onSubmit={getSearch}>
                    <input className="searcher" name="searcher" placeholder="search"></input> 
                    <input type="submit"/> 
                </form>
            </div>
        )
    }
}

export default Header;