from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('user-list/', views.userList, name="user-list"),

    # USER URLS
    path('user-create/', views.userCreate, name="user-create"),
    path('user-update/', views.userUpdate, name="user-update"),
    path('user-delete/<str:pk>/', views.userDelete, name="user-delete"),
    path('user-detail/<str:pk>/', views.userDetail, name="user-detail"),
    
    # SAVED RECIPES
    path('recipe-create/', views.recipeCreate, name="recipe-create"),
    path('recipe-update/', views.recipeUpdate, name="recipe-update"),
    path('recipe-detail/<str:pk>/', views.recipeDetail, name="recipe-detail"),

    # PREFERENCES
    

    
]
