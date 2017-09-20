import React from 'react'

type Props = {
  loading: bool
};

export default (props: Props) => {
  if (props.loading) {
    return <div>Loading...</div>
  }
  return <div />
}
