from django.urls import path
from accounts.views import UserRegistrationView, UserLoginView


urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('userlogin/', UserLoginView.as_view(), name='userlogin')
]
