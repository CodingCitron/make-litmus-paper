import Input from "../components/Input";

const MakeLitmus = () => {
  // 문항 표시
  // 과목 표시


  return (
    <div>
      <form>
        <label>객관식</label>
        <input type="radio" name="problem-type"/>

        <label>주관식</label>
        <input type="radio" name="problem-type"/>
      </form>

      <Input 
        label="문제 입력: "
        placeholder="문제를 입력하세요."
      />
      
      {/* 보기 만들기 */}
      <div>
        보기 입력 추가
      </div>

      {/* 선택지 만들기 */}
      <div>
        선택지 만들기
      </div>

      {/* 정답 입력 */}
      <div>
        답안 입력
      </div>
    </div>
  );
}
 
export default MakeLitmus;