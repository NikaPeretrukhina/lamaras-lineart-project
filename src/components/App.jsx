import Footer from "./Footer";
import Navigation from "./Navigation";


// import { gql, useQuery } from '@apollo/client';

// const GET_PAGE = gql`
//   query getPage($id: ID!) {
//     page(id: $id) {
//       title
//       content
//     }
//   }
// `

function App() {
  // TODO: Insert FOOTER here, Nika: I'm talking to you.
  // TODO: Stop watching Instagram Reels
  return (
    <div className="app-container">
      <Navigation />
      <Footer />
    </div>
  )

  // console.log(page)

  // const { loading, error, data } = useQuery(GET_PAGE, { 
  //   variables: { id: page.id } 
  // });

  // if (loading) return 'Loading...';
  // if (error) return `Error! ${error.message}`;

  // console.log(data)

  // return <div dangerouslySetInnerHTML={{__html: data.page.content}}></div>

  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App

