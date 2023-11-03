import { useCallback, useRef, useState } from "react";

import Input from "@components/Input";
import ViewProblem from "@components/ViewProblem";

const MultipleChoiceQuestion = () => {
  const [options, setOptions] = useState([])
  const [answer, setAnswer] = useState(null)
  const nextId = useRef(0)

  const addOption = useCallback(() => {
    setOptions([...options, {
      id: nextId.current
    }])

    nextId.current++
  }, [options])

  return (
    <section>
      <h2 className="hidden">객관식</h2>
      <form>
        <Input
          label="문제 입력: "
          placeholder="문제를 입력하세요."
        />

        {/* 보기 만들기 */}
        {/* <ViewProblem 
        
        /> */}

        {/* 선택지 만들기 */}
        <button 
          type="button"
          onClick={addOption}
        >
          선택지 추가
        </button>
        <fieldset>
          <legend className="hidden">선택지</legend>
          {options.map((option, index) => (
            <div 
              key={option.id} 
              className="flex gap-[8px]"
            >
              <label>{index}</label>
              <input type="text" name="answer" placeholder="선택지를 입력하세요." />
              <button type="button">삭제</button>
            </div>
          ))}
        </fieldset>

        {/* 정답 입력 */}
        <fieldset className="flex gap-[4px]">
          <legend>정답 선택</legend>
          {options.map((option, index) => (
            <span 
              key={option.id}
              onClick={() => setAnswer(option.id)}
              className="flex gap-[2px]"
            >
              <label>{index}</label>
              <input 
                type="checkbox" 
                name="answer"
                onChange={() => setAnswer(option.id)}
                checked={option.id === answer}
                value={option.id} 
              />
            </span>
          ))}
        </fieldset>
      </form>
    </section>
  );
}
 
export default MultipleChoiceQuestion;