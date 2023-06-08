import { useState } from 'react'

import "./FAQs.css"

import questions from "./questions.json"

const FAQs = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleAnswer = (questionId) => {
    if (expandedQuestion === questionId) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(questionId);
    }
  };

  return (
    <div>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>How can we help you?</p>
                <h1>Feel free to roam our FAQs section</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quest-section">
        <div className="container">
          <div className="row">
            <div className="title">
              <h3 className="head">Bạn cần chúng tôi giúp gì?</h3>
            </div>
          </div>

          <div className="row">
            <div className="question-list">
              {questions.map((question, index) => (
                <div className="question-item">
                  <div className="question-container" onClick={() => toggleAnswer(question.id)}>
                    <div className="question">
                      {question.question}
                      <div className={`plus-icon ${expandedQuestion === question.id ? 'minus' : ''}`}></div>
                    </div>
                    <p className={`answer ${expandedQuestion === question.id ? 'show' : ''
                      }`}>{question.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs