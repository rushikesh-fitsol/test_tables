import prisma from "../db/db";


export const getquestions = async (req: any, res: any) => {
  const questions = await prisma.question.findMany();
  res.json(questions);
}

export const getquestion = async (req: any, res: any) => {
  const question = await prisma.question.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  });
  res.json(question);
}

export const getanswer = async (req: any, res: any) => {
  const qid = req.body.questionId;
  const clientId = req.body.clientId;
  const answer = await prisma.answer.findUnique({
    where: {
      clientId_questionId: {
        clientId: clientId,
        questionId: qid
      }
    }
  });
  res.json(answer);
}


export const getanswers = async (req: any, res: any) => {
  const clientId = req.params.clientId;
  const answers = await prisma.answer.findMany({
    where: {
      clientId: clientId
    }
  });
  res.json(answers);
}

// get all the answers for the questions, marked by client, that belongs to a particular form
export const generateform = async (req: any, res: any) => {
  const clientId: number = req.body.clientId;
  const formId: number = req.body.formId;
  const formWithDetails = await prisma.form.findUnique({
    where: { id: formId },
    select: {
      id: true,
      name: true,
      description: true,
      sections: {
        select: {
          id: true,
          name: true,
          description: true,
          QuestionSection: {
            select: {
              question: {
                select: {
                  id: true,
                  name: true,
                  description: true,
                  answerSchema: true,
                  Answer: {
                    where: {
                      clientId: clientId,
                    },
                    select: {
                      id: true,
                      value: true,
                      createdAt: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  res.json(formWithDetails);
}


export const saveanswer = async (req: any, res: any) => {
  const clientId = req.body.clientId;
  const questionId = req.body.questionId;
  const value = req.body.value;
  const answer = await prisma.answer.upsert({
    where: {
      clientId_questionId: {
        clientId: clientId,
        questionId: questionId
      }
    },
    update: {
      value: value
    },
    create: {
      clientId: clientId,
      questionId: questionId,
      value: value
    }
  });
  res.json(answer);
}
