import React from 'react';
import 'BussinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Compoment {
  render() {
    return (
      <div className="BusinessList">
 <Business />
 <Business />
 <Business />
 <Business />
 <Business />
 <Business />

</div>
    )
  }
}

export default BusinessList;