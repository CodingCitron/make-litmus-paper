const MakeLitmus = () => {
  return (
    <div>
      <form>
        <label>객관식</label>
        <input type="radio" name="problem-type"/>

        <label>주관식</label>
        <input type="radio" name="problem-type"/>
      </form>

      <div>
        제목 입력
      </div>
      <div>
        설명 입력
      </div>
      <div>
        보기 입력 추가
      </div>
      <div>
        답안 입력
      </div>
    </div>
  );
}
 
export default MakeLitmus;