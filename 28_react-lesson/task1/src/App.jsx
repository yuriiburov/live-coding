import React from 'react';
import Pagination from './Pagination';
import UsersList from './UsersList';

class App extends React.Component {
  state = { pageNumber: 1 };

  users = [
    { id: 1, name: 'Bob', age: 21 },
    { id: 2, name: 'Sam', age: 45 },
    { id: 3, name: 'Con', age: 22 },
    { id: 4, name: 'Man', age: 55 },
    { id: 5, name: 'Boy', age: 55 },
    { id: 6, name: 'Her', age: 31 },
    { id: 7, name: 'Grey', age: 21 },
    { id: 8, name: 'Boy', age: 55 },
    { id: 9, name: 'Her', age: 31 },
    { id: 10, name: 'Grey', age: 21 },
  ];

  prevBtnHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  nextBtnHandler = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    const { pageNumber } = this.state;
    const itemsPerPage = 3;
    // page 1 = 0, page2 = 3, page3 = 6
    const startIndex = (pageNumber - 1) * itemsPerPage;
    // page1 = 3, page2 = 6, page3 = 9
    const endIndex = startIndex + itemsPerPage;

    const userToRender = this.users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          pageNumber={this.state.pageNumber}
          prev={this.prevBtnHandler}
          next={this.nextBtnHandler}
          usersCount={this.users.length}
          itemsPerPage={itemsPerPage}
        />
        <UsersList users={userToRender} />
      </div>
    );
  }
}

// REACT APPROACH
// 0. make a layout
// 1. split on components
// 2. static version in react
// 3. declare state and props
// 4. write logic

export default App;
