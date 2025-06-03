import React, { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom'; 
import './products.css'; 

import Header from "../Components/header";
import { getAllFood, createProdcut, updateProduct, deleteProduct } from '../../../services/adminService';

function Products() { 
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
        isAvailable: true
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await getAllFood();
            setProducts(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProduct) {
                await updateProduct(editingProduct.id, formData);
            } else {
                await createProdcut(formData);
            }
            setIsModalOpen(false);
            setEditingProduct(null);
            setFormData({
                name: '',
                description: '',
                price: '',
                quantity: '',
                isAvailable: true
            });
            fetchProducts();
        } catch (err) {
            setError('Failed to save product');
            console.error(err);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            isAvailable: product.isAvailable
        });
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await deleteProduct(id);
                fetchProducts();
            } catch (err) {
                setError('Failed to delete product');
                console.error(err);
            }
        }
    };

    return (
        <div className="admin-container">
            <Header />
            <div className="dashboard-content">
                <div className="products-header">
                    <h2>Product Management</h2>
                    <button 
                        className="add-product-btn"
                        onClick={() => {
                            setEditingProduct(null);
                            setFormData({
                                name: '',
                                description: '',
                                price: '',
                                quantity: '',
                                isAvailable: true
                            });
                            setIsModalOpen(true);
                        }}
                    >
                        Add New Product
                    </button>
                </div>

                {error && <div className="error-message">{error}</div>}
                
                {loading ? (
                    <div className="loading">Loading...</div>
                ) : (
                    <div className="product-admin-container">
                        <div className="label">
                            <h3>Name</h3>
                            <h3>Description</h3>
                            <h3>Price</h3>
                            <h3>Quantity</h3>
                            <h3>Actions</h3>
                        </div>
                        {products.map(product => (
                            <div key={product.id} className="panel">
                                <div className="panel-name">{product.name}</div>
                                <div className="panel-description">{product.description}</div>
                                <div className="panel-price">${product.price}</div>
                                <div className="panel-quantity">{product.quantity}</div>
                                <div className="panel-actions">
                                    <button 
                                        className="edit-btn"
                                        onClick={() => handleEdit(product)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        className="delete-btn"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <h3>{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="isAvailable"
                                            checked={formData.isAvailable}
                                            onChange={handleInputChange}
                                        />
                                        Available
                                    </label>
                                </div>
                                <div className="modal-actions">
                                    <button type="submit" className="save-btn">
                                        {editingProduct ? 'Update' : 'Create'}
                                    </button>
                                    <button 
                                        type="button" 
                                        className="cancel-btn"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Products;
