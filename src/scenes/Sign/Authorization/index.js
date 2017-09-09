import React from 'react'

export default () => (
  <div>
    <h1>Sign in</h1>
    <form>
      <input name="first_name" placeholder="First name" type="text" /><br />
      <input name="last_name" placeholder="Last name" type="text" /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
)
