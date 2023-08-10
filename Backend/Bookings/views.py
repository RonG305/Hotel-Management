from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from Bookings.models import Booking, PaymentMethod
from .serializers import BookingSerializer, PaymentMethodSerializer

# Create your views here.


class BookingList(APIView):
    def get(self, request):
        booking = Booking.objects.all()
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
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
