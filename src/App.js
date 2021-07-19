import logo from './logo.svg';
import './App.css';
// const {
//   Wrapper,
//   Header,
//   Image,
//   Content,
//   Link
// } = require("./AppComponents");

// function App() {
//   return (
//     <Wrapper>
//       <Header>
//         <Image logo={logo} />
//         <Content />
//         <Link title="Learn React" />
//       </Header>
//     </Wrapper>
//   );
// }
import {useState, useRef, useCallback} from 'react'
import useBookSearch from './useBookSearch'

export default function App() {

  const [query,setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const {
    loading,
    error,
    books,
    hasMore,
}=useBookSearch(query, pageNumber)

  const observer = useRef();
  const lastBookElementRef = useCallback(node => {
    if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore){
        console.log("Visible")
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if(node) observer.current.observe(node)
  },[loading, hasMore])

  function handleSearch(e){
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <>
    <input type="test" value={query} onChange={handleSearch}/>
    {books.map((book, index) => {

      if(books.length === index + 1){
        //anade la referencia solo al ultimo elemento de la lista
        return <div ref={lastBookElementRef} key={book}>{book}</div>
      }else{
        return <div key={book}>{book}</div>
      }

    })}
    <div>{loading && 'Loading...'}</div>
    <div>{error && 'Error'}</div>

    </>
  )
}
