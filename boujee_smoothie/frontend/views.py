from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    ''' render index template, and react will render 
        things inside of this
    '''
    return render(request, "frontend/index.html") 