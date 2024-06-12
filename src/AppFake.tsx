import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

export default function AppFake() {
  return (
    <div className='d-flex justify-content-center mt-4'>
      <div className='p-2 rounded  border border-1' style={{width :"60%"}}>
        <TodoList/>
      </div>
    </div>
  )
}
