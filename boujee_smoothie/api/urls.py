from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    
    # USER URLS
    path('user-list/', views.userList, name="user-list"),

    path('user-create/', views.userCreate, name="user-create"),
    path('user-update/', views.userUpdate, name="user-update"),
    path('user-delete/<str:pk>/', views.userDelete, name="user-delete"),
    path('user-detail/<str:pk>/', views.userDetail, name="user-detail"),
    
    # SAVED RECIPES
    path('recipe-list/', views.recipeList, name="recipe-list"),

    path('recipe-create/', views.recipeCreate, name="recipe-create"),
    path('recipe-update/', views.recipeUpdate, name="recipe-update"),
    path('recipe-detail/<str:pk>/', views.recipeDetail, name="recipe-detail"),
    path('recipe-delete/<str:e>/<str:r>/', views.recipeDelete, name="recipe-delete"),

    # PREFERENCES
    path('preferences-list/', views.preferencesList, name="preferences-list"),

    path('preferences-create/', views.preferencesCreate, name="preferences-create"),
    path('preferences-update/<str:e>/', views.preferencesUpdate, name="preferencs-update"),
    # path('preferences-update/<str:e>/<str:w>/', views.preferencesUpdate, name="preferencs-update"),
    path('preferences-detail-unique/<str:e>/<str:w>/', views.preferencesDetail_unique, name="preferences-detail-unique"),
    path('preferences-detail-email/<str:e>', views.preferencesDetail_email, name="preferences-detail-unique") 
]
