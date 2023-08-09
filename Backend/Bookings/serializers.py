from rest_framework import serializers
from Bookings.models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
