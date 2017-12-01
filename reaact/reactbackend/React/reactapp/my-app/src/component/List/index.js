import React from 'react';
import PropTypes from 'prop-types';
import
const staticStyle = {
  padding:"20px"
};

const style = {
  complete: {
    color: 'green',
    backgroundColor: 'yellow'
  },
  incomplete: {
    color: 'red'
  }
};

const List = (props) => {
  return (<ul>
    {
      props.items.map((item, index) => (<li>
        {item.todo}
        <button
          style={{...staticStyle, ...style[
            item.complete
              ? 'complete'
              : 'incomplete'
          ]}}
          onClick={() => props.onComplete(index)}>
          { item.complete ? 'Done' : 'todo' }
        </button>
      </li>))
    }
  </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    complete: PropTypes.bool,
    toDo: PropTypes.string
  })).isRequired
};

export default List;
