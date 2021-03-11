import React, { useRef } from 'react';

const SearchHeader = ({ search }) => {
    const inputRef = useRef();

    const handleSubmit = () => {
        const value = inputRef.current.value;
        search(value);
    };

    const onClick = () => {
        handleSubmit();
    };

    const onSubmit = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <header>
            <div className="search-logo">
                <img src="images/logo.png" alt="search-logo" />
                <span className="search-title">YouTube</span>
            </div>
            <div>
                <input ref={inputRef} type="text" onKeyPress={onSubmit} />
                <button onClick={onClick}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div className="search-btn">
                <i className="fas fa-video"></i>
                <i className="fas fa-bell"></i>
            </div>
        </header>
    );
};

export default SearchHeader;
