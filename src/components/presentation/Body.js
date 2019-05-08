import React from 'react';

const body = (props) => {
  const list = props.list.map((item, index) => {
    return (
      <li key={index} onClick={() => props.onClick(index)}>
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