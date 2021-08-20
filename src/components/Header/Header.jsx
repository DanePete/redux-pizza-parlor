
import { useSelector } from 'react-redux';

function Header() {

  const total = useSelector(store => store.total);

  return (
    <>
      <header className='App-header'>
        <div className="header-container">
          <h1 className='App-title'>Prime Pizza</h1> &nbsp; &nbsp;
          <h1>Total: ${total}</h1>
        </div>
      </header>
    </>
  )
}

export default Header; 