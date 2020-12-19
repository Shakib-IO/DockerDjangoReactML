from django.shortcuts import render
from rest_auth.views import (LoginView , LogoutView , PasswordChangeView)
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

""" Django-Rest-Auth : https://django-rest-auth.readthedocs.io/en/latest/index.html """

# Create your views here.
class APILogoutView(LogoutView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class APILoginView(LoginView):
    pass

class APIPasswordUpdateView(PasswordChangeView):
    authentication_classes = [TokenAuthentication]