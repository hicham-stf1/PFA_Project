import QuestNumeration from '../components/questions/QuestNumeration'
import Answers from '../components/questions/Answers.js'
import Header from '../components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../store/actions/questionAction'
import { addStrategicObjectives } from '../store/actions/strategicObjectivesAction'
import { addResponse } from '../store/actions/responseAction'
import useHttp from '../store/requests.js'
import { strategicHost } from '../store/requests.js'

const feed = () => {
  const culturalQueestions=[
    {
      question: 'question 1',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
    {
      question: 'question 2',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
    {
      question: 'question 3',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
    {
      question: 'question 4',
      responses: [
        {
          name: 'response 1',
          score: 21,
        },
        {
          name: 'response 2',
          score: 18,
        },
        {
          name: 'response 3',
          score: 25,
        },
      ],
      objective: 'objectif 1',
      percentage: 0.75,
    },
  ]
  const [culturalQuestions, setCulturalQuestions] = useState([])
  const [selectedResponse, setSelectedResponse] = useState('')
  const [counter, setCounter] = useState(0)

//   const dispatch = useDispatch()
  const router = useRouter()
  const counterHandler = () => {
    // if (counter === culturalQuestions.length - 1) {
    //   router.push('/objectivesresults')
    // }
    if (selectedResponse) {
    //   dispatch(
    //     addResponse({
    //       question: strategicQuestions[counter].question,
    //       response: {
    //         name: selectedResponse,
    //         score: strategicQuestions[counter].responses.filter(
    //           (response) => response.name === selectedResponse
    //         )[0].score,
    //       },
    //       objective: strategicQuestions[counter].objective,
    //       percentage: strategicQuestions[counter].percentage,
    //     })
    //   )
      setCounter(counter + 1)
    }
  }

  const answerHandler = (answer) => {
    setSelectedResponse(answer[0])
  }


  return (
    <div className="g-6 flex h-full flex-col items-center justify-center">
      <Header audit="Audit Stratégique" />
      <div className="mt-6 flex  justify-between ">
        <div className="flex-[0.3] ">
          <QuestNumeration counter={counter} size={culturalQueestions.length} />
        </div>
        <div className="flex-[0.64]">
          <Answers
            selectedAnswer={answerHandler}
            question={culturalQueestions[counter]}
            counter={counter}
          />
        </div>
      </div>
      <div className="ml-30 mt-3 flex space-x-2 pl-96">
        <Button text="Next" onClick={counterHandler} />
      </div>
    </div>
  )
}
export default feed
