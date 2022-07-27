
import './styled/App.css';

// import modules
import axios from 'axios';

// import Component
import TodoUl from './component/TodoUl';
import Header from './component/Header';
import { useEffect, useState } from 'react';


// 예상 구조도
// 부모 컴포넌트 - (axios 와 useState() 진행) (props로 axios 전달)
// header 컴포넌트 - (axios 날짜 데이터와 persist를 이용한 localStorage 연결)
// ul 컴포넌트 - (persist를 이용하여 localStorage에서 값을 가져옴. 해당 값을 map 하여 하위 컴포넌트로 보여줌)
// list 컴포넌트 - (props로 받은 값을 가공하여 보여줌)
// useState로 관리할 수 있지만 todoList인 만큼 새로고침해도 내가 했던 내용이 보여야한다 생각하여 persist 진행
function App() {

  const [date, setDate] = useState(false);

  useEffect(()=>{
    axios.get("https://worldtimeapi.org/api/timezone/Asia/Seoul")
    .then((res)=>{
      return res.data
    })
    .then((res)=>{
      setDate(res)
    })
  }, [])


  return (
    <section className='todoList'>
{      date
      ? <>
          <header className='dateHeader'>
            <Header date={date} />
          </header>
          <main className='listContent'>
            <TodoUl date={date} />
          </main>
        </>
      : <div></div>}
    </section>
  );
}

export default App;
