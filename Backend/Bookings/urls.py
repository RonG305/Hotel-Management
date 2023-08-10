from django.urls import path
from Bookings.views import BookingList, PaymentList

urlpatterns = [
    path('booking/', BookingList.as_view()),
    path('payment/', PaymentList.as_view())
]
