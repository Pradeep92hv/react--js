const Header = (props) => {
    
    return (
      <header >
        <h1 > {props.title_name}</h1>
      </header>
    )
  }
  Header.defaultProps={
    title_name : "Default name"
  }
  export default Header
  