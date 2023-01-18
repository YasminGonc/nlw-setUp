import { Habit } from './components/Habit'
import './styles/global.css'

export function App() {
  return (
    <div>
      <h1>NLW</h1>
      <Habit completed={3}/>
    </div>
  )
}
