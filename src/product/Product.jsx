import React, { useState } from 'react'
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreativeCommonsSampling } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//<FontAwesomeIcon icon={faMicrochip} /> micro chip <FontAwesomeIcon icon={faCodepen} />
import { faCodepen } from '@fortawesome/free-solid-svg-icons';
import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import Button from "@mui/material/Button";
import { UserPlus } from "lucide-react";


const Product = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('table'); // Default view is table


  // Sample product data
  const products = [
    { id: "managed", name: '8CH4D-SBA-SwitchBoard', status: 'Active', type: 'smartbuildauto' },
    { id: "managed", name: '6CH1D-SBA-SwitchBoard', status: 'Inactive', type: 'smartbuildauto' },
    { id: "managed", name: '10CH2F2-SBA-SwitchBoard', status: 'Active', type: 'smartbuildauto' },
    { id: "managed", name: '6CH2F1-SBA-SwitchBoard', status: 'Active', type: 'smartbuildauto' },
    { id: "managed", name: '4C2F', status: 'Inactive', type: 'smartbuildauto' },
    // Add more sample product data as needed
  ];

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddProduct = () => {
    // You can implement your search logic here
    //console.log('Search:', searchQuery);
  };

  return (

    <div className='products'>
      <div className="product-top">
        <div className="label-area">
          <i class="fa-brands fa-codepen fa-lg" style={{ marginRight: '10px' }}></i>
          <h2>Products</h2>
        </div>
        <div className="search-area">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
        </div>
        <div className="flex ml-12">
          <Button
            variant="contained"
            size="small"
            className="h-7 self-center  "
            style={{ marginRight: "20px" }}
            startIcon={<i class="fa-solid fa-plus fa-lg"></i>}
          >
            Add Product{" "}
          </Button>
        </div>
        {/* <button className="w-36 h-11" onClick={handleAddProduct}>
          <i class="fa-solid fa-plus fa-lg"></i>
          &nbsp;Add Product</button> */}
      </div>

      <div className='product-status'>
        <div className="product-card">
          <div>
            <div className='prd-crd-lbl'>Active devices</div>
            <div className='prd-crd-dt'>11</div>
            <div>55.65 %</div>
          </div>
          <div className='actv-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>

            </svg>
          </div>
        </div>

        <div className="product-card">
          <div>
            <div className='prd-crd-lbl'>Dectivated Devices</div>
            <div className='prd-crd-dt'>9</div>
            <div>45 %</div>
          </div>
          <div className='dactv-logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor"

              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          </div>
        </div>

        <div className="product-card">
          <div>
            <div className='prd-crd-lbl'>Total Products</div>
            <div className='prd-crd-dt'>13</div>
            <div>&nbsp;</div>
          </div>
          <div className='prd-logo'>
            <i class="fa-solid fa-boxes-stacked"></i>
          </div>
        </div>
      </div>

      <section>
        <div className='product-list'>
          <div className='prd-list-fltr'>
            <div className='ght'>
              <i className={`fas fa-grip ${view === 'grid' ? 'selected' : ''}`} onClick={() => handleViewChange('grid')}></i> {/* Grid view icon */}
              <i className={`fas fa-list ${view === 'table' ? 'selected' : ''}`} onClick={() => handleViewChange('table')}></i> {/* Table view icon */}
            </div>
          </div>
          {/* Conditionally render product-grid or ProductTable based on selected view */}
          {view === 'grid' ? (
            <div className='product-grid'>
              {/* Render product cards in grid format */}
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="product-details-table">
              <ProductTable products={products} />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Product
