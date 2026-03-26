import React, { useState } from 'react';
import { WhatsAppIcon } from 'react-share';

const Loja = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({});
    const categories = ['Electronics', 'Fashion', 'Home', 'Beauty']; // Example categories
    const products = [ /* Sample product data */ ];

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterChange = (filterName, value) => {
        setFilters({ ...filters, [filterName]: value });
    };

    return (
        <div>
            <h1>E-Commerce Store</h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
            />
            <div className="filters">
                {categories.map(category => (
                    <button key={category} onClick={() => handleFilterChange('category', category)}>{category}</button>
                ))}
            </div>
            <div className="product-list">
                {products
                    .filter(product => product.name.includes(searchTerm) && (!filters.category || product.category === filters.category))
                    .map(product => (
                        <div key={product.id} className="product-item">
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    ))}
            </div>
            <div className="whatsapp-integration">
                <a href="https://wa.me/yourwhatsapplink" target="_blank">
                    <WhatsAppIcon size={32} />
                    Chat with us on WhatsApp
                </a>
            </div>
        </div>
    );
};

export default Loja;