const Greeting = ({user}) => {
    const {name, age} = user
    return(
      <>
        <h3>Hello How Are You {name}, Your age is {age}</h3>
      </>
    )
  }

  export default Greeting