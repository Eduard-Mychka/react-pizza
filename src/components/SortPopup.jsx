import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useRef } from "react";

const SortPopup = ({ sortNames }) => {
  const [visiblePopup, setVisiblePopup] = useState(false)
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const sortRef = useRef()
  const activeLabel = sortNames[activeItemIndex]

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }

  const onSelectItem = (index) => {
    setActiveItemIndex(index)
    setVisiblePopup(false)
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <i className={`${visiblePopup ? 'rotated' : ''} ${'fas fa-caret-up'}`} />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup &&
        <div className="sort__popup">
          <ul>
            {sortNames &&
              sortNames.map((name, index) =>
                <li
                  key={uuidv4()}
                  className={activeItemIndex === index ? 'active' : ''}
                  onClick={() => onSelectItem(index)}
                >
                  {name}
                </li>
              )
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default SortPopup;
