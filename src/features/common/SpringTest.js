import React, { useState } from 'react';
import { useTransition, a } from '@react-spring/web';
import {List} from './';
// import PropTypes from 'prop-types';

export default function SpringTest(props) {
  const [items, setItems] = useState(null);

  const transitions = useTransition(items, {
    key: item => item.key,
    from: { height: 0, opacity: 1 },
    leave: { height: 0, opacity: 0 },
    enter: { height: 60, opacity: 1 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <div className="common-spring-test">
      <List
        onData={setItems}
        renderedItems={transitions((style, item) => {
          console.log('item', item);
          return (
            <a.li style={style} className={item.isDone ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  // onChange={() => handleDone(item.key)}
                  checked={item.isDone}
                />
                <label>{item.data.text}</label>
                {/* <button className="destroy" onClick={() => handleDestroy(item.key)} /> */}
              </div>
            </a.li>
          );
        })}
      />
    </div>
  );
}

SpringTest.propTypes = {};
SpringTest.defaultProps = {};
