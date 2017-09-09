import React from 'react'

export default () => (
  <div>
    <h1>Sign up</h1>
    <form>
      <input name="first_name" placeholder="First name" type="text" /><br />
      <input name="last_name" placeholder="Last name" type="text" /><br />
      <input name="email" placeholder="E-mail" type="text" /><br />
      <input type="submit" value="Submit" />
    </form>
  </div>
)
