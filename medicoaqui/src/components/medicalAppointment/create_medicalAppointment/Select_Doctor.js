import React from 'react';

const SelectDoctor = ({data, onChange}) => (
  data &&
      <div >
          <select onChange={onChange} className="browser-default custom-select" label="Choose your speciality" icon="user">
              {data}
          </select>
      </div>
     
);

export default SelectDoctor;