import React from 'react';

const body = (props) => {
  const list = props.values.map((item, index) => {
    return (
      <li key={index} onClick={() => props.remove(index)}>
        {item}
      </li>
    );
  });

  return (
    <ul>
      {list}
    </ul>
  );
}

export default body;