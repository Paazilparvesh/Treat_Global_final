import React from 'react';
import { IoLocationSharp, IoSearchOutline } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { FaBuilding } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import './filterSearch.css'
import SelectForm from '../forms/select';
import Button from '../buttons';

const iconMap = {
    location: <IoLocationSharp className='Icon' />,
    hospital: <FaBuilding className='Icon' />,
    treatment: <TiPlus className='Icon' />,
    doctor: <BsPersonFill className='Icon' />,
};

const FilterSearch = ({ filters, onFilterChange, handleSearch }) => {
  return (
    <div className='filterWrapper'>
      <div className='filterSection'>
        <div className='filters'>
          <div className='filterRow'>
            {Object.keys(filters).map((key, index) => (
              <React.Fragment key={key}>
                <div className='filter'>
                  <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                  <div className='filterIcon'>
                    {iconMap[key] || <TiPlus className='Icon' />}
                    <SelectForm
                      options={filters[key]} 
                      onChange={(value) => onFilterChange(key, value)} 
                    />
                  </div>
                </div>
                {index !== Object.keys(filters).length - 1 && <div className='verticalLine'></div>}
              </React.Fragment>
            ))}
          </div>

          <div className='buttonFilter'>
            <div className='filterButton'>
              <IoSearchOutline className='searchIcon' />
              <Button label="Search" className='filterBtn' onClick={handleSearch} />
            </div>
            <div className='filterButton'>
              <Button label="Chat Support" className='filterBtn' onClick={handleSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSearch
