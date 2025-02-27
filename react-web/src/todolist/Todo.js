import React, { useEffect, useState } from "react";

export default function Todo() {
  const [toDo, setToDo] = useState("") // 현재 입력 중인 할 일
  const [toDos, setToDos] = useState([]); // 할 일 목록(배열)
  const onChange = (e) => setToDo(e.target.value); // 입력값 업데이트
  const onSubmit = (e) => { // 할 일 목록 추가
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]); // 기존 배열을 유지하면서 새로운 toDo를 앞에 추가
    setToDo("");
  }

  useEffect(() => {
    console.log(toDos);
  }, [toDos])

  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>))}
        {/* map => 하나의 array에 있는 모든 item을 내가 원하는 무엇이든지 바꿔주는 역할,
        함수의 첫 번째 argument는 각 todo를 의미한다.
        이전의 array를 가져와서 원하는 방향으로 변형해줄 수도 있다.*/}
      </ul>
    </div>
  );
}


//https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year


// fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
//   .then((response) => response.json())
//   .then((json) => {
//     setMovies(json.data.movies);
//     setLoading(false);
//   });