from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.IntegerField()
    fist_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

class UserPreferences(models.model):
    pass
