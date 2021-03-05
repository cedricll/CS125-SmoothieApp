from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer

from .models import User
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    ''' For dev. To see URL patterns '''
    api_urls = {
        "Create" : "/user-create/",
        "Update" : "/user-update/<str:pk>/",
        "Delete" : "/user-delete/<str:pk>/",
    }
    return Response(api_urls)

@api_view(['GET'])
def userList(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def userDetail(request, pk):
    user = User.objects.get(user_id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.date)

@api_view(['POST'])
def userCreate(request):
    serializer = UserSerializer(date=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.date)

@api_view(['POST'])
def userUpdate(request, pk):
    user = User.objects.get(user_id=pk)
    serializer = UserSerializer(instance=user, date=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.date)