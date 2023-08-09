from django.urls import path
from Bookings.views import BookingList

urlpatterns = [
    path('booking/', BookingList.as_view())
]
