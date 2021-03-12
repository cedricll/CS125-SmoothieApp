from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import User_Serializer, Saved_Recipes_Serializer, Preferences_Serializer

from .models import User_Info, Preferences, Saved_Recipes
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

''' USER_INFO '''

@api_view(['GET'])
def userList(request):
    users = User_Info.objects.all()
    serializer = User_Serializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def userDetail(request, pk):
    user = User_Info.objects.get(email=pk)
    serializer = User_Serializer(user, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def userCreate(request):
    serializer = User_Serializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def userUpdate(request, pk):
    user = User_Info.objects.get(email=pk)
    serializer = User_Serializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def userDelete(request, pk):
	user = User_Info.objects.get(id=pk)
	user.delete()

	return Response('Item succsesfully delete!')

''' SAVED_RECIPES '''

@api_view(['GET'])
def recipeDetail(request, pk):
    recipe = Saved_Recipes.objects.get(email=pk)
    serializer = Saved_Recipes(recipe, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def recipeCreate(request):
    serializer = Saved_Recipes(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def recipeUpdate(request, pk):
    user = Saved_Recipes.objects.get(email=pk)
    serializer = Saved_Recipes_Serializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

''' PREFERENCES '''

# @api_view(['GET'])
# def recipeDetail(request, pk):
#     recipe = Saved_Recipes.objects.get(email=pk)
#     serializer = Saved_Recipes(recipe, many=False)
#     return Response(serializer.data)

# @api_view(['POST'])
# def recipeCreate(request):
#     serializer = Saved_Recipes(data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

# @api_view(['POST'])
# def recipeUpdate(request, pk):
#     user = Saved_Recipes.objects.get(email=pk)
#     serializer = Saved_Recipes_Serializer(instance=user, data=request.data)

#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)





