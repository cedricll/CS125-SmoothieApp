from rest_framework import serializers
from .models import User_Info, Saved_Recipes, Preferences

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User_Info
        fields = "__all__" # to diaplay all atrributes of model

class Saved_Recipes_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Saved_Recipes
        fields = "__all__" # to diaplay all atrributes of model

class Preferences_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Preferences
        fields = "__all__" # to diaplay all atrributes of model

''' IGNORE '''
# class Dietary_Restrictions_Serializer(serializers.ModelSerializer):
#     class Meta:
#         model = Dietary_Restrictions
#         fields = "__all__" # to diaplay all atrributes of model             