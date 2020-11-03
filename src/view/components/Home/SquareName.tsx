import React from 'react';
import './SquareName.scss';

const SquareName : React.FunctionComponent = props => {
  return (
    <div className={`square-name`}>
        <div className={`square-name-text`}>
            Kim Anh
        </div>
    </div>
  )
}
export default SquareName;
