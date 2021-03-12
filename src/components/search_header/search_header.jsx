import React, { useRef } from 'react';
import styles from '../search_header/search_header.module.css';

const SearchHeader = ({ search }) => {
    const inputRef = useRef();

    const handleSubmit = () => {
        const value = inputRef.current.value;
        search(value);
        inputRef.current.value = '';
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
                    src="/images/logo.png"
                    alt="search-logo"
                />
                <h1 className={styles.title}>YouTube</h1>
            </div>

            <div className={styles.inputSet}>
                <input
                    ref={inputRef}
                    className={styles.input}
                    type="search"
                    onKeyPress={onKeyPress}
                />
                <button
                    className={styles.button}
                    type="submit"
                    onClick={onClick}
                >
                    <img
                        className={styles.buttonImg}
                        src="/images/search.png"
                        alt="search-button"
                    />
                </button>
            </div>

            <div className={styles.buttonSet}>
                <i className={`fas fa-video ${styles.setImg}`}></i>
                <i className={`fas fa-bell ${styles.setImg}`}></i>
            </div>
        </header>
    );
};

export default SearchHeader;
