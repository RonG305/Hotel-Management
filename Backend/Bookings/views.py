from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from rest_framework import status
from Bookings.models import Booking, PaymentMethod
from Rooms.models import Room
from .serializers import BookingSerializer, PaymentMethodSerializer

# Create your views here.


class BookingList(APIView):
    def get(self, request):
        booking = Booking.objects.all().order_by('-created_at')
        booking_count = booking.count()
        serializer = BookingSerializer(booking, many=True)

        response_data = {
            'bookings': serializer.data,
            'booking_count': booking_count
        }
        return Response(response_data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            booking = serializer.save()

            room_id = booking.room_number.id

            try:
                room = Room.objects.get(id=room_id)
                room.status = 'booked'
                room.save()
            except Room.DoesNotExist:
                raise Http404('Room not found')

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookingDetail(APIView):
    def get_object(self, pk):
        try:
            return Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return Http404

    def get(self, request, pk):
        booking = self.get_object(pk)
        serializer = BookingSerializer(booking)
        return Response(serializer.data)

    def put(self, request, pk):
        booking = self.get_object(pk)
        serializer = BookingSerializer(booking, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        booking = self.get_object(pk)
        booking.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PaymentList(APIView):
    def get(self, request):
        payment = PaymentMethod.objects.all()
        serializer = PaymentMethodSerializer(payment, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PaymentMethodSerializer(data=serializer.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PaymentDetail(APIView):
    def get_object(self, pk):
        try:
            return PaymentMethod.objects.get(pk=pk)
        except PaymentMethod.DoesNotExist:
            return Http404

    def get(self, request, pk):
        payment = self.get_object(pk)
        serializer = PaymentMethodSerializer(payment)
        return Response(serializer.data)

    def put(self, request, pk):
        payment = self.get_object(pk)
        serializer = PaymentMethodSerializer(payment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        payment = self.get_object(pk)
        payment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
