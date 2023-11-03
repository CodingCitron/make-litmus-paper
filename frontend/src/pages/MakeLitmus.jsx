import useTabs from "@/hooks/useTabs";
import Input from "@components/Input";
import MultipleChoiceQuestion from "@components/MultipleChoiceQuestion";
import SubjectiveQuestion from "@components/SubjectiveQuestion";
import { useMemo } from "react";

const MakeLitmus = () => {
  const contents = useMemo(() => {
    return [
      {
        tab: "객관식",
        content: <MultipleChoiceQuestion />
      },
      {
        tab: "주관식",
        content: <SubjectiveQuestion />
      }
    ]
  }, [])

  const tabs = useTabs(0, contents)
  // 문항 표시

  // 과목 표시

  return (
    <div>
      <form>
        <fieldset className="flex gap-[8px]">
          <legend className="hidden">문제 속성 선택</legend>
          {contents.map((section, index) => (
            <div key={index} className="flex gap-[4px]">
              <label onClick={() => tabs.changeItem(index)}>
                {section.tab}
              </label>
              <input
                  type="radio" 
                  name="tab"
                  checked={tabs.curretItem === contents[index]}
                  onChange={() => tabs.changeItem(index)}
                  value={section.tab}
                />
            </div>
          ))}
        </fieldset>
      </form>
      <div>
          {tabs.curretItem.content}
      </div>
    </div>
  );
}
 
export default MakeLitmus;