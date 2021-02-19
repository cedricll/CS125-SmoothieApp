from django.contrib import admin
from django.urls import path, include
from .views import index # imports index function from views.py

urlpatterns = [
    path("", index)
] 