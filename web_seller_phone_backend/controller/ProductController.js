import { update } from '../services/Product/UpdateProductService.js';
import { getAllProductService } from '../services/Product/GetAllProductService.js';
import { getProduct } from '../services/Product/GetProductByIDService.js';
import { deleteProduct } from '../services/Product/DeleteProductService.js';
import { create } from '../services/Product/CreateProductService.js';
import { searchProductByName } from '../services/Product/SearchProductService.js';
import { filterProducts } from '../services/Product/ProductFilterService.js';

const getAllProducts = async (req, res) => {
    // Your implementation for getting all products
    try {
        const response = await getAllProductService();
        res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }
};

const getProductById = async (req, res) => {
    // Your implementation for getting product by ID
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(400).json({
                status: 'error',
                message: 'The productId is required'
            });
        }
        const response = await getProduct(productId); 
        if (response.status === 'error') {
            return res.status(404).json({
                status: 'error',
                message: 'Product not found'
            });
        }
        return res.status(200).json({
            status: 'success',
            product: response.data 
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
        });
    }   
};

const createProduct = async (req, res) => {
    const { nameProduct, price, stock_quantity, descrip_product, url_picture,brand } = req.body;
        if (!nameProduct || !price || !stock_quantity || !descrip_product || !url_picture|| !brand) {
            return res.status(400).json({ error: 'Invalid data' });
        }
        try {
            const productData = { nameProduct, price, stock_quantity, descrip_product, url_picture, brand };
            const newProduct = await create(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};


const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const data = req.body;
    if (!productId || isNaN(parseInt(productId))) {
        return res.status(400).json({
            status: 'ERR',
            message: 'Invalid product ID',
        });
    }
    try {
        const response = await update(productId, data);
        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
        });
    }
};

const deleteProductById = async (req, res) => {  
    // Your implementation for deleting a product by ID
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
        return res.status(400).json({
            status: 'ERR',
            message: 'The productId is required',
        });
    }
    try {
        const response = await deleteProduct(productId, data); // Gọi service để xóa sản phẩm
        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'ERR',
            message: 'Internal Server Error',
        });
    }
};

const searchProduct = async (req, res) => {
    const productName = req.query.name;
    
    if (!productName) {
        return res.status(400).json({
            status: 'error',
            message: 'Product name parameter is required for search',
        });
    }

    try {
        const products = await searchProductByName(productName);

        if (products.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'No products found matching the search criteria',
            });
        }
    
        //Lọc sản phẩm dựa trên các tham số trong query
        const { brand, minPrice, maxPrice } = req.query;
        if (brand || minPrice || maxPrice) {
            const filters = { brand, minPrice, maxPrice };
            const filteredProducts = await applyFilters(products, filters);

            if (filteredProducts.length === 0) {
                return res.status(404).json({
                    status: 'error',
                    message: 'No products found matching the filter criteria',
                });
            }

            return res.status(200).json({
                status: 'success',
                products: filteredProducts,
            });
        }

        return res.status(200).json({
            status: 'success',
            products,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }

};

const filterProduct = async (req, res) => {
    const { brand, minPrice, maxPrice } = req.query;

    try {
        const filters = { brand, minPrice, maxPrice };
        const filteredProducts = await filterProducts(filters);

        if (filteredProducts.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'No products found matching the filter criteria',
            });
        }

        return res.status(200).json({
            status: 'success',
            products: filteredProducts,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal Server Error',
        });
    }
};

// Hàm áp dụng bộ lọc vào danh sách sản phẩm
const applyFilters = async (products, filters) => {
    const { brand, minPrice, maxPrice } = filters;

    let filteredProducts = [...products];

    if (brand) {
        filteredProducts = filteredProducts.filter(product => product.brand.toLowerCase().includes(brand.toLowerCase()));
    }

    if (minPrice && maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    } else if (minPrice) {
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
    } else if (maxPrice) {
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
    }

    return filteredProducts;
};


export { getAllProducts, getProductById, createProduct, updateProduct, deleteProductById, searchProduct, filterProduct };
