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
    path('preferences-update/<str:i>/', views.preferencesUpdate, name="preferencs-update"),
    path('preferences-detail-add/<str:e>/<str:w>/', views.preferencesDetail_add, name="preferences-detail-unique"),
    path('preferences-detail-sub/<str:e>/<str:w>/', views.preferencesDetail_sub, name="preferences-detail-sub"),
    path('preferences-detail-email/<str:e>/', views.preferencesDetail_email, name="preferences-detail-email"),
    path('preferences-delete/<str:i>/', views.preferencesDelete, name="preferences-delete"),

    #SCORING
    path('calculate-score/<str:line>/', views.calculateScore, name="calculate-score")
]
