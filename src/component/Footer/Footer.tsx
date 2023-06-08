import React, { useState } from 'react';

import { FilterByWords } from '../../types/enums';

type Props = {
  setFilterHandler: (param: FilterByWords) => void;
  clearCompletedTodos: () => void;
  todoCounter: number;
  isCompletedTodos: boolean;
};

export const Footer: React.FC<Props> = (
  {
    setFilterHandler, todoCounter, isCompletedTodos, clearCompletedTodos,
  },
) => {
  const [selectedFilter, setSelectedFilter] = useState(FilterByWords.All);

  const handleFilterClick = (filter: FilterByWords) => {
    setSelectedFilter(filter);
    setFilterHandler(filter);
  };

  const handelClearClick = (filter: FilterByWords) => {
    clearCompletedTodos();
    setSelectedFilter(filter);
  };

  return (
    <>
      <span className="todo-count">
        {`${todoCounter} items left`}
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={`filter__link ${selectedFilter === 'All' ? 'selected' : ''}`}
          onClick={() => handleFilterClick(FilterByWords.All)}
        >
          All
        </a>

        <a
          href="#/active"
          className={`filter__link ${selectedFilter === 'Active' ? 'selected' : ''}`}
          onClick={() => handleFilterClick(FilterByWords.Active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={`filter__link ${selectedFilter === 'Completed' ? 'selected' : ''}`}
          onClick={() => handleFilterClick(FilterByWords.Completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        style={{ visibility: isCompletedTodos ? 'visible' : 'hidden' }}
        onClick={() => handelClearClick(FilterByWords.Completed)}
      >
        Clear completed
      </button>
    </>
  );
};
