export const Wrapper=({children})=>{
    console.log(children)
    return(
      <div className="App">
       {children}
      </div>
    )
  }
  
  export const Header=({children})=>{
    return(
      <header className="App-header">
        {children}
      </header>
    )
  }
  
  export const Link=({title})=>{
    return(
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >{title}</a>
    )
  }
  
  export const Content=()=>{
    return(
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    )
  }
  
  export const Image=({logo})=>{
    return(
      <img src={logo} className="App-logo" alt="logo" />
    )
  }