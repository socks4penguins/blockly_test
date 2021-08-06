//forked from: https://github.com/chenglou/react-motion/tree/master/demos/demo3-todomvc-list-transition
//kt
import React, { useState } from 'react';
import { useTransition, a } from '@react-spring/web';

// import ReactDOM from 'react-dom';
// import Header from './Header';
// import Footer from './Footer';
// import './styles.css';

export default function AnimList({ onData, renderedItems }) {
  const [state, setState] = useState({
    todos: [
      { key: 't1', data: { text: 'Board the plane', isDone: false } },
      { key: 't2', data: { text: 'Sleep', isDone: false } },
      { key: 't3', data: { text: 'Try to finish conference slides', isDone: false } },
      { key: 't4', data: { text: 'Eat cheese and drink wine', isDone: false } },
      { key: 't5', data: { text: 'Go around in Uber', isDone: false } },
      { key: 't6', data: { text: 'Talk with conf attendees', isDone: false } },
      { key: 't7', data: { text: 'Show Demo 1', isDone: false } },
      { key: 't8', data: { text: 'Show Demo 2', isDone: false } },
    ],
    value: '',
    selected: 'all',
  });

  const getItems = () => {
    const { todos, value, selected } = state;
    return todos.filter(({ data: { isDone, text } }) => {
      return (
        text.toUpperCase().indexOf(value.toUpperCase()) >= 0 &&
        ((selected === 'completed' && isDone) ||
          (selected === 'active' && !isDone) ||
          selected === 'all')
      );
    });
  };

  const items = getItems();
 const transitions = useTransition(items, {
   key: item => item.key,
   from: { height: 0, opacity: 1 },
   leave: { height: 0, opacity: 0 },
   enter: { height: 60, opacity: 1 },
   config: { mass: 5, tension: 500, friction: 100 },
   trail: 25,
 });
  const handleSelect = selected => setState({ ...state, selected });
  const handleClearCompleted = () =>
    setState({ ...state, todos: state.todos.filter(({ data }) => !data.isDone) });
  const handleDestroy = date =>
    setState({ ...state, todos: state.todos.filter(({ key }) => key !== date) });
  const handleChange = ({ target: { value } }) => setState({ ...state, value });

  const handleSubmit = e =>
    e.preventDefault() ||
    setState({
      value: '',
      todos: [
        {
          key: 't' + Date.now(),
          data: { text: state.value, isDone: false },
        },
      ].concat(state.todos),
    });

  const handleDone = doneKey =>
    setState({
      ...state,
      todos: state.todos.map(todo => {
        const {
          key,
          data: { text, isDone },
        } = todo;
        return key === doneKey ? { key: key, data: { text: text, isDone: !isDone } } : todo;
      }),
    });

  const handleToggleAll = () =>
    setState({
      ...state,
      todos: state.todos.map(({ key, data: { text, isDone } }) => ({
        key: key,
        data: { text: text, isDone: !state.todos.every(({ data }) => data.isDone) },
      })),
    });

  console.log({ items });
  const { todos, value, selected } = state;
  const itemsLeft = todos.filter(({ data: { isDone } }) => !isDone).length;
  return (
    <section className="common-anim-list">
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus={true}
            className="new-todo"
            placeholder="What needs to be done?"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>{' '}
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={itemsLeft === 0}
          style={{ display: todos.length === 0 ? 'none' : 'inline' }}
          onChange={handleToggleAll}
        />
        <ul className="todo-list">
          {transitions((style, item) => {
            console.log('item', item);
            return (
              <a.li style={style} className={item.isDone ? 'completed' : ''}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    onChange={() => handleDone(item.key)}
                    checked={item.isDone}
                  />
                  <label>{item.data.text}</label>
                  <button className="destroy" onClick={() => handleDestroy(item.key)} />
                </div>
              </a.li>
            );
          })}
        </ul>
        <footer className="footer">
          <span className="todo-count">
            <strong>{itemsLeft}</strong> {itemsLeft === 1 ? 'item' : 'items'} left
          </span>
          <ul className="filters">
            <li>
              <a
                className={selected === 'all' ? 'selected' : ''}
                onClick={() => handleSelect('all')}
              >
                All
              </a>
            </li>
            <li>
              <a
                className={selected === 'active' ? 'selected' : ''}
                onClick={() => handleSelect('active')}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className={selected === 'completed' ? 'selected' : ''}
                onClick={() => handleSelect('completed')}
              >
                Completed
              </a>
            </li>
          </ul>
          <button className="clear-completed" onClick={handleClearCompleted}>
            Clear completed
          </button>
        </footer>
        {/* <Footer itemsLeft={itemsLeft} selected={selected} handleSelect={handleSelect} handleClearCompleted={handleClearCompleted} /> */}
      </section>
    </section>
  );
}
