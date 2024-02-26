from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

from .oai_queries import get_completion
from .models import QuestionAnswer
from .serializers import QuestionAnswerSerializer


class QueryAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        prompt = request.data.get('prompt')
        previous_qas = QuestionAnswer.objects.filter(user=request.user)
        response = get_completion(prompt, previous_qas)

        new_qa = QuestionAnswer(user=request.user, question=prompt, answer=response)
        new_qa.save()

        return Response({'response': response})

    def get(self, request):
        previous_qas = QuestionAnswer.objects.filter(user=request.user)
        serializer = QuestionAnswerSerializer(previous_qas, many=True)
        return Response({'previous_qas': serializer.data})
