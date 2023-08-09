from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RoomSerializer
from Rooms.models import Room

# Create your views here.


class RoomList(APIView):
    def get(self, request):
        rooms = Room.objects.all()
        room_count = rooms.count()
        serializer = RoomSerializer(rooms, many=True)

        response_data = {
            'rooms': serializer.data,
            'room_count': room_count,  # Include the room count in the response
        }
        return Response(response_data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
