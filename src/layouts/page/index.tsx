import './style.css'

const PageLayout = ({title, children} : {title:string, children:React.ReactNode}) =>{
  return (
    <div className="wrapper">
      <header className="container header">
        <div className="nav">
          <ul>
            <li><a href="/">Bober</a></li>
            <li><a href="/firstpage">Bober</a></li>
            <li><a href="/secondpage">Bober</a></li>
            <li><a href="/thirdpage">Bober</a></li>
          </ul>
        </div>
      </header>
      <main className="container content">
        <h1>{title}</h1>
        {children}
      </main>
      <footer className="container footer">
        Bober 2025
      </footer>
    </div>
  )
}

export default PageLayout