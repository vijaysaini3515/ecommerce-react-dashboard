import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../UploadBox';

import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Button from '@mui/material/Button';

const AddProduct = () => {

  const [productCategory, setProductCategory] = React.useState('');
  const [productSubCategory, setProductSubCategory] = React.useState('');
  const [productFeatured, setProductFeatured] = React.useState('');
  const [productRams, setProductRams] = React.useState('');
  const [productWeight, setProductWeight] = React.useState('');
  const [productSize, setProductSize] = React.useState('');

  const handleChangeProductCategory = (event) => {
    setProductCategory(event.target.value);
  };

  const handleChangeProductSubCategory = (event) => {
    setProductSubCategory(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };

  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };





  return (
   <section className='p-2 overflow-hidden'>
    <div className='cart bg-[#f1f1f1] shadow-sm w-full p-5 '>
      <h1 className='text-[22px] font-[700] text-gray-800'>Upload Product</h1>

    </div>
      <div className='cart bg-[#f1f1f1] shadow-sm w-full p-5 mt-2 '>
        <form className='form py-3 p-5'>
          <div className="scroll pr-4 max-h-[60vh] overflow-y-scroll">

            <div className='grid grid-cols-1 mb-3'>
              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Name</h3>
                <input type="text" className='bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>
            </div>

            <div className='grid grid-cols-1 mb-3'>
              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Description</h3>
                <textarea type="text" className='bg-white w-full h-[140px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>
            </div>

            <div className='grid grid-cols-4 mb-3 gap-5'>
              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Category</h3>
                <Select
                  size='small'
                  value={productCategory}
                  onChange={handleChangeProductCategory}
                  className='w-full bg-white'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=""><em>None</em> </MenuItem>
                  <MenuItem value={10}>Beauty</MenuItem>
                  <MenuItem value={20}>Fashion</MenuItem>
                  <MenuItem value={30}>Wellness</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product sub-Category</h3>
                <Select
                  size='small'
                  value={productSubCategory}
                  onChange={handleChangeProductSubCategory}
                  className='w-full bg-white'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=""><em>None</em> </MenuItem>
                  <MenuItem value={10}>Kids</MenuItem>
                  <MenuItem value={20}>Man</MenuItem>
                  <MenuItem value={30}>Woman</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Price</h3>
                <input type="number" className='bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product old Price</h3>
                <input type="number" className='bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>
            </div>

            <div className='grid grid-cols-4 mb-3 gap-5'>
              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Is Featured..?</h3>
                <Select
                  size='small'
                  value={productFeatured}
                  onChange={handleChangeProductFeatured}
                  className='w-full bg-white'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value={10}>True</MenuItem>
                  <MenuItem value={20}>False</MenuItem>
                </Select>
              </div>



              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Stock</h3>
                <input type="number" className='bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Brand</h3>
                <input type="text" className='bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Discount</h3>
                <input type="number" className='bg-white w-full h-[40px] text-sm rounded-sm p-2  border border-[rgba(0,0,0,0.1)] focus:border-[rgba(0,0,0,0.4)] focus:outline-none' />
              </div>


            </div>

            <div className='grid grid-cols-4 mb-3 gap-5'>
              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product RAMS</h3>
                <Select
                  size='small'
                  value={productRams}
                  onChange={handleChangeProductRams}
                  className='w-full bg-white'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value={'4GB'}>4GB</MenuItem>
                  <MenuItem value={'6GB'}>6GB</MenuItem>
                  <MenuItem value={'8GB'}>8GB</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Weight</h3>
                <Select
                  size='small'
                  value={productWeight}
                  onChange={handleChangeProductWeight}
                  className='w-full bg-white'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=""><em>None</em> </MenuItem>
                  <MenuItem value={10}>2KG</MenuItem>
                  <MenuItem value={20}>4KG</MenuItem>
                  <MenuItem value={30}>8KG</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Product Size</h3>
                <Select
                  size='small'
                  value={productSize}
                  onChange={handleChangeProductSize}
                  className='w-full bg-white'
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=""><em>None</em> </MenuItem>
                  <MenuItem value={'S'}>S</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                </Select>
              </div>

              <div className="col">
                <h3 className='mb-1 text-[14px] font-[500]'>Rating</h3>
                <Rating size='' name="half-rating" defaultValue={2.5} precision={0.5} />
              </div>
            </div>

            <div className="col w-full p-5 px-0">
              <h3 className='font-[700] text-[18px] mb-2'>Media & images</h3>


              <div className='grid grid-cols-7 gap-3 '>
                <div className="uploadBoxWrapper relative">
                  <span className='absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700'><IoClose className='text-[#FFF] fon-[700]' /></span>
                  <div className='uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 '>
                    <LazyLoadImage
                      className='w-full h-full object-cover'
                      alt='image'
                      src={'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp'}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>

                <div className="uploadBoxWrapper relative">
                  <span className='absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700'><IoClose className='text-[#FFF] fon-[700]' /></span>
                  <div className='uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 '>
                    <LazyLoadImage
                      className='w-full h-full object-cover'
                      alt='image'
                      src={'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp'}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>

                <div className="uploadBoxWrapper relative">
                  <span className='absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700'><IoClose className='text-[#FFF] fon-[700]' /></span>
                  <div className='uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 '>
                    <LazyLoadImage
                      className='w-full h-full object-cover'
                      alt='image'
                      src={'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp'}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>

                <div className="uploadBoxWrapper relative">
                  <span className='absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700'><IoClose className='text-[#FFF] fon-[700]' /></span>
                  <div className='uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 '>
                    <LazyLoadImage
                      className='w-full h-full object-cover'
                      alt='image'
                      src={'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp'}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>

                <div className="uploadBoxWrapper relative">
                  <span className='absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700'><IoClose className='text-[#FFF] fon-[700]' /></span>
                  <div className='uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 '>
                    <LazyLoadImage
                      className='w-full h-full object-cover'
                      alt='image'
                      src={'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp'}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>

                <div className="uploadBoxWrapper relative">
                  <span className='absolute -top-[5px] -right-[5px] z-50 h-[20px] w-[20px] rounded-full overflow-hidden flex items-center justify-center cursor-pointer bg-red-700'><IoClose className='text-[#FFF] fon-[700]' /></span>
                  <div className='uploadBox  p-0 h-[150px] w-[100%] rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] bg-gray-100 hover:bg-gray-200 '>
                    <LazyLoadImage
                      className='w-full h-full object-cover'
                      alt='image'
                      src={'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/10.webp'}
                      effect="blur"
                      wrapperProps={{
                        style: { transitionDelay: "1s" },
                      }}
                    />
                  </div>
                </div>

                <UploadBox multiple={true} />
              </div>

            </div>
            
          </div>
          <hr className="border border-[rgba(0,0,0,0.2)]" />
            <br />
            <Button className='btn-blue btn-lg !capitalize w-full flex items-center gap-2'> <FaCloudUploadAlt className='w-[25px] text-white' /> Publish & view</Button>
        </form>
      </div>
   </section>
  )
}

export default AddProduct;
//<hr className="border border-[rgba(0,0,0,0.2)]" />
