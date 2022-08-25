import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import mealIcon from '../../images/mealIcon.svg';
import drinkIcon from '../../images/drinkIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/foods">
        <img data-testid="food-bottom-btn" src={ mealIcon } alt=" Meal Icon" />
      </Link>
      <Link to="/drinks">
        <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="Drinks Icon" />
      </Link>
    </footer>
  );
}

export default Footer;
