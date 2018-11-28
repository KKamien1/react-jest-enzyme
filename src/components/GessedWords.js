import React from "react";
import PropTypes from "prop-types";

const GessedWords = props => {
  let contents;
  if (props.gessedWords.length === 0) {
    contents = (
      <span data-test="gess-instructions">Try to gess the secret word!</span>
    );
  } else {
    let rows = props.gessedWords.map((item, index) => (
      <tr key={index} data-test="gessed-word">
        <td>{item.gessedWord}</td>
        <td>{item.letterMatchCount}</td>
      </tr>
    ));

    contents = (
      <div data-test="gessed-words">
        <h3>Gessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-gessed-words">{contents}</div>;
};

GessedWords.propTypes = {
  gessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      gessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GessedWords;
