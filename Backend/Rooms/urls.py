from django.urls import path
from Rooms.views import RoomList

urlpatterns = [
    path('rooms/', RoomList.as_view())
]
