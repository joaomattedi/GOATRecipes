import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from '../Context/Context';
import shareIcon from '../images/shareIcon.svg';

function CardRecipe({
  src,
  name,
  date,
  index,
  category,
  tags,
  type,
  alcoholicOrNot,
  nationality,
  id,
}) {
  const { showCopied, shareButtonClick } = useContext(Context);
  const history = useHistory();
  const redirectToRecipePage = () => {
    history.push(`/${type}s/${id}`);
  };

  return (
    <div>
      <div
        role="button"
        onClick={ redirectToRecipePage }
        onKeyDown={ redirectToRecipePage }
        tabIndex={ 0 }
        data-testid={ `${index}-horizontal-image` }
        src={ src }
      >
        <img src={ src } alt={ name } />
      </div>

      {type === 'food' && (
        <h2 data-testid={ `${index}-horizontal-top-text` }>
          {`${nationality} - ${category}`}
        </h2>
      )}
      {type === 'drink' && (
        <h2 data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</h2>
      )}
      <div
        role="button"
        onClick={ redirectToRecipePage }
        onKeyDown={ redirectToRecipePage }
        tabIndex={ 0 }
        data-testid={ `${index}-horizontal-name` }
      >
        <h1>
          {name}
        </h1>
      </div>
      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        {date}
      </p>
      {showCopied && <p className="copied-message">Link copied!</p>}
      <button
        src={ shareIcon }
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
        onClick={ () => shareButtonClick({ url: `/${type}s/${id}` }) }
      >
        Share
      </button>
      {tags.map((tagName) => (
        <p
          data-testid={ `${index}-${tagName}-horizontal-tag` }
          key={ `${index}-${tagName}` }
        >
          {tagName}
        </p>
      ))}
    </div>
  );
}

CardRecipe.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CardRecipe;
