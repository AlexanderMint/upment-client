import React from 'react'
import PropTypes from 'prop-types'
import purecss from 'purecss'
import { graphql } from 'react-apollo'
import query from './destroyRefreshToken.graphql'

class RefreshTokens extends React.Component {
  componentWillMount() {
    this.tokens = this.props.data.currentUser.refreshTokens
  }

  componentWillReceiveProps(nextProps) {
    this.tokens = nextProps.data.currentUser.refreshTokens
  }

  onRefreshClicked = () => {
    this.props.data.refetch()
  }

  destroyToken = (id) => {
    this.props.mutate({
      variables: { id }
    })
      .then(() => {
        this.props.data.refetch()
      }).catch((error) => {
        alert('there was an error sending the query', error)
      })
  }

  render() {
    return (
      <div>
        <h3>Sessions:</h3>
        <table className={purecss['pure-table']}>
          <thead>
            <tr>
              <th>#</th>
              <th>Browser</th>
              <th>Device</th>
              <th>OS</th>
              <th>User Agent</th>
              <th>Token</th>
              <th>Created at</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.tokens.map(({ id, browserName, deviceName, osName, userAgent, token, createdAt }) => (
              <tr className={purecss['pure-table-odd']} key={id}>
                <td>{id}</td>
                <td>{browserName}</td>
                <td>{deviceName}</td>
                <td>{osName}</td>
                <td>{userAgent}</td>
                <td>{token}</td>
                <td>({createdAt})</td>
                <td>
                  <button
                    className={purecss['pure-button']}
                    onClick={() => this.destroyToken(id)}
                  > Destroy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p><button className={purecss['pure-button']} onClick={this.onRefreshClicked}>Refresh</button></p>
      </div>
    )
  }
}

RefreshTokens.propTypes = {
  mutate: PropTypes.func.isRequired,
  data: PropTypes.shape({
    refetch: PropTypes.func.isRequired,
    currentUser: PropTypes.shape({
      refreshTokens: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.integer,
          browserName: PropTypes.string,
          deviceName: PropTypes.string,
          osName: PropTypes.string,
          userAgent: PropTypes.string,
          token: PropTypes.string,
          createdAt: PropTypes.string
        })
      )
    })
  }).isRequired
}

export default graphql(query)(RefreshTokens)
