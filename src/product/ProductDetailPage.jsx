import React from 'react';
import BasicTabs from './BasicTabs';

const ProductDetailPage = ({ productId }) => {
  // Fetch product details using productId

  return (
        <div>
            <section>
            <div className='product-status'>
                <div className="product-card">
                  <div>
                    <div className='prd-crd-lbl'>Registered Devices</div>
                    <div className='prd-crd-dt'>4</div>
                    <div>40 %</div>
                  </div>
                  <div className='actv-logo'>
                  <i class="fa-brands fa-connectdevelop"></i>
                  </div>
                </div>

                <div className="product-card">
                  <div>
                    <div className='prd-crd-lbl'>Unregistered Devices</div>
                    <div className='prd-crd-dt'>6</div>
                    <div>60 %</div>
                  </div>
                  <div className='dactv-logo'>
                  <i class="fa-brands fa-connectdevelop"></i>
                  </div>
                </div>

                <div className="product-card">
                  <div>
                    <div className='prd-crd-lbl'>Total Devices</div>
                    <div className='prd-crd-dt'>10</div>
                    <div>&nbsp;</div>
                  </div>
                  <div className='prd-logo'>
                   <i class="fa-solid fa-microchip"></i>
                  </div>
                </div>
             </div>

            </section>
            <section>
                <div className='basic-tab'>
                    <BasicTabs />
                </div>
            </section>
        </div>



    // <div>
    //   {/* Display product details */}
    //   <h1>Product Detail Page</h1>
    //   <p>Product ID: {productId}</p>
    //   {/* Add more product details as needed */}
    // </div>
  );
};

export default ProductDetailPage;