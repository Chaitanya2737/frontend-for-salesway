import React from 'react';
import './style.css';
import { HiMiniArrowTrendingUp, HiMiniArrowTrendingDown } from 'react-icons/hi2';

const Section = ({ type, value }) => {
  let content = null;

  switch (type) {
    case 'bull':
      content = (
        <div className='box1'>
          +{value} <HiMiniArrowTrendingUp />
        </div>
      );
      break;
    case 'bear':
      content = (
        <div className='box2'>
          -{value} <HiMiniArrowTrendingDown />
        </div>
      );
      break;
    default:
      content = null;
  }

  return <span className="box">{content}</span>;
};

export default Section;
