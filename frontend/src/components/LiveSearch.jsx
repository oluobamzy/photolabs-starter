import React from 'react';
const LiveSearch = (props) => {
    return (
        <div className="live-search">
            <input type="text" placeholder="Search" onChange={(e) => { props.handleSearch(e.target.value); }} />
        </div>
    );
};
export default LiveSearch;