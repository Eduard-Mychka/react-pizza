import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Categories = ({ categoryNames }) => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className="categories">
      <ul>
        {categoryNames &&
          categoryNames.map((name, index) =>
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => setActiveItem(index)}
              key={uuidv4()}
            >
              {name}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default Categories
