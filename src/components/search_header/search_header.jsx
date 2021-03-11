import React, { useRef } from 'react';
import styles from '../search_header/search_header.module.css';

const SearchHeader = ({ search }) => {
    const inputRef = useRef();

    const handleSubmit = () => {
        const value = inputRef.current.value;
        search(value);
    };

    const onClick = () => {
        handleSubmit();
    };

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img
                    className={styles.img}
                    src="images/logo.png"
                    alt="search-logo"
                />
                <h1 className={styles.title}>YouTube</h1>
            </div>

            <div>
                <input
                    ref={inputRef}
                    className={styles.input}
                    type="text"
                    onKeyPress={onKeyPress}
                />
                <button onClick={onClick}>
                    <i className="fas fa-search"></i>
                </button>
            </div>

            <div className={styles.button}>
                <i className="fas fa-video"></i>
                <i className="fas fa-bell"></i>
            </div>
        </header>
    );
};

export default SearchHeader;
