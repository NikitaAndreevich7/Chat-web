import React from 'react'

interface typeState {
  users: Array<object>
}

function HomeHoc<T>(Child: React.ComponentType<T>) {
  return class extends React.Component<T, typeState> {
    state: typeState = {
      users: [
        {
          name: 'Nikita',
          surname: 'Tikokn',
          online: false,
        },
        {
          name: 'Piter',
          surname: 'Petrov',
          online: true,
        },
        {
          name: 'Aren',
          surname: 'Kirilov',
          online: false,
        },
      ],
    }

    render() {
      return <Child {...this.props} {...this.state} />
    }
  }
}

export default HomeHoc
