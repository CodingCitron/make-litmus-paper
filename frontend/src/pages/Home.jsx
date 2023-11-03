import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* 메인 이미지 */}
      {/* <img src="" alt="로고" /> */}
      <p>안녕하세요 여기는 시험지 만드는 사이트에요!</p>
      <Link to="/make-litmus">시험지 만들기</Link>
    </div>
  )
}
 
export default Home;