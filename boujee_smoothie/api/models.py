from django.db import models

# Create your models here.
# User -> User_Info
class User_Info(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

class Saved_Recipes(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    recipe_name = models.CharField(max_length = 50)
    image_url = models.CharField(max_length=250)
    recipe_url = models.CharField(max_length=250)
    source = models.CharField(max_length=100)

class Preferences(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    option = models.CharField(max_length=50)
    score = models.IntegerField()

class Dietary_Restrictions(models.Model):
    email = models.CharField(max_length=50, primary_key=True)
    restriction = models.IntegerField()