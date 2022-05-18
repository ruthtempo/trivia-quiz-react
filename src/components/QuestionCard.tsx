import React from "react";
//types
import { AnswerObject } from '../App';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => (
  <Container>
    <p className="number">
      Question: {questionNr}/{totalQuestions}
    </p>
    <Card bg="light" border="warning">
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: question }}></Card.Title>
        {answers.map((answer) => (
          <Card.Text key={answer}>
            <Button variant="warning" className="button" disabled={userAnswer ? true : false} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </Button>
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  </Container >
)


export default QuestionCard