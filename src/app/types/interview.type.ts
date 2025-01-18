export type InterviewType =   {
    uniqId: number;
    user: {
      userId: number;
      image: string;
      answer: string;
    }
    vacancyPlace: string;
    vacancyName: string[];
    question: string;
    saveFavorite: boolean;
    otherAnswers: {
      amount: number;
      otherAnswersElem:
        {
          otherUserId: number;
          userFace: string;
          text: string;
        }[]
    }
  };
