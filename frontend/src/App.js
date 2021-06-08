import image from './image.jpg'
const App = () => {

  return(
    <div>
      <img src={image} alt="daily" /> <br />
      <input
        name='toDo'
        maxlenght='140' 
      />
      <button>create TODO</button> <br />
      <li> todo 1 </li>
      <li> todo 2</li>
    </div>
  )
}

export default App