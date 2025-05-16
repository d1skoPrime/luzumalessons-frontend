import { useEffect, useState } from 'react';
import type { QuizQuestion } from '../../../types/types';
import { QuizEasy } from '../../../types/types';

type ShuffledQuestion = QuizQuestion & {
  shuffledOptions: string[];
  correctIndexInShuffled: number;
};

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quizeasy = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<
    ShuffledQuestion[]
  >([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const shuffled = QuizEasy.map((q: any) => {
      const options = shuffleArray(q.options);
      const correctIndexInShuffled = options.indexOf(
        q.options[q.correctAnswerIndex],
      );
      return { ...q, shuffledOptions: options, correctIndexInShuffled };
    });
    setShuffledQuestions(shuffled);
  }, []);

  const handleAnswer = (index: number) => {
    if (selected !== null) return;

    setSelected(index);
    if (index === shuffledQuestions[current].correctIndexInShuffled) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current + 1 < shuffledQuestions.length) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  if (!shuffledQuestions.length) return null;

  const question = shuffledQuestions[current];
  const percent = Math.round((score / shuffledQuestions.length) * 100);

  return (
    <div className="min-h-screen bg-[#1D1E24] text-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-[#2A2B31] rounded-2xl shadow-2xl p-6">
        {!finished ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Question {current + 1} of {shuffledQuestions.length}
            </h2>
            <p className="text-lg mb-6">{question.question}</p>
            <div className="space-y-3">
              {question.shuffledOptions.map((option: any, i: any) => {
                const isCorrect = i === question.correctIndexInShuffled;
                const isSelected = i === selected;

                let style =
                  'bg-[#1D1E24] border-gray-600 hover:bg-gray-700 cursor-pointer';
                if (selected !== null) {
                  if (isSelected && isCorrect)
                    style = 'bg-green-600 border-green-500 scale-105';
                  else if (isSelected && !isCorrect)
                    style = 'bg-red-600 border-red-500 scale-105';
                  else if (isCorrect) style = 'bg-green-600 border-green-500';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`w-full text-left px-4 py-2 rounded-xl border transform transition-all duration-500 ${style}`}
                    disabled={selected !== null}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-teal-400">
              Quiz Finished!
            </h2>
            <h2 className="text-white font-bold">
              Quiz Level: <span className="text-green-400">Easy</span>
            </h2>
            <p className="text-xl mb-4">
              You scored <span className="font-bold">{score}</span> out of{' '}
              {shuffledQuestions.length}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-xl overflow-hidden h-6 mb-6">
              <div
                className="h-full bg-teal-500 transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="mb-6 text-lg">{percent}% correct</p>

            <button
              onClick={() => {
                setCurrent(0);
                setSelected(null);
                setScore(0);
                setFinished(false);

                // Reshuffle again
                const reshuffled = QuizEasy.map((q: any) => {
                  const options = shuffleArray(q.options);
                  const correctIndexInShuffled = options.indexOf(
                    q.options[q.correctAnswerIndex],
                  );
                  return {
                    ...q,
                    shuffledOptions: options,
                    correctIndexInShuffled,
                  };
                });
                setShuffledQuestions(reshuffled);
              }}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizeasy;
