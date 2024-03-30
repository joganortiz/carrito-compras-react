import ByReducer from "./page/byReducer";
import ByUse from "./page/byUse";
import { useApp } from "./hook/useApp";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const {isReducer, handleChange} = useApp();

  console.log("re render")

  return (
    <>
      <div className="p-2">
        <button onClick={() => {handleChange()}} className="btn btn-dark ">
          {isReducer ? "By UseHook" : "By Reducer"}
        </button>
      </div>

      <ToastContainer />

      {
        isReducer ?
          <ByReducer />
        :
          <ByUse />
      }
    </>
  )
}

export default App
