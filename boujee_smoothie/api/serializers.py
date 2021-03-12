from rest_framework import serializers
from .models import User_Info, Dietary_Restrictions, Health_Options, Saved_Recipes

class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User_Info
        fields = "__all__" # to diaplay all atrributes of model

class Saved_Recipes_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Saved_Recipes
        fields = "__all__" # to diaplay all atrributes of model

class Health_Options_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Health_Options
        fields = "__all__" # to diaplay all atrributes of model

''' Might not use '''
class Dietary_Restrictions_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Dietary_Restrictions
        fields = "__all__" # to diaplay all atrributes of model             