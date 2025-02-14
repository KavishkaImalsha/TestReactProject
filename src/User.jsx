import Greeting from './Greeting'
const User = () => {
    const user = [
        {
          firstName : "Frank",
          age : 35
        },
        {
          firstName : "Dev",
          age : 25
        },
        {
            firstName : "Frank",
            age : 35
          },
          {
            firstName : "Dev",
            age : 25
          }
      ]

      return(<>
        {user.map((user) => {return <Greeting user = {user}/>})}
      </>)
}

export default User