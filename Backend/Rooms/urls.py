from django.urls import path
from Rooms.views import RoomList, RoomDetail

urlpatterns = [
    path('rooms/', RoomList.as_view()),
    path('rooms/<int:pk>/', RoomDetail.as_view())
]
