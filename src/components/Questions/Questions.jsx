import {Title} from "../interface/Title";
import QuestionsForm from "./QuestionsForm";
import {QuestionsFlex} from "./QuestionsStyles";

const Questions = () => {
    return <QuestionsFlex>
        <Title>
            <span>QUESTIONS?</span>
            <br/>
            CONTACT THE Tint
        </Title>
        <QuestionsForm />
    </QuestionsFlex>
}
export default Questions