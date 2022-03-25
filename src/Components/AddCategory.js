import React, { useState } from 'react'
import propTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const hadleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>
                <input
                    type="text"
                    value={inputValue}
                    onChange={hadleInputChange}
                />
            </h2>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}