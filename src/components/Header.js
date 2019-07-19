import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="row">React Bookstore</h1>
                <input className="search" placeholder="search"></input><button>Submit</button>
            </div>
        )
    }
}

export default Header;