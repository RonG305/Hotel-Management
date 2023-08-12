from django.urls import path
from Bookings.views import BookingList, BookingDetail, PaymentList, PaymentDetail

urlpatterns = [
    path('booking/', BookingList.as_view()),
    path('booking/<int:pk>/', BookingDetail.as_view()),
    path('payment/', PaymentList.as_view()),
    path('payment/<int:pk>/', PaymentDetail.as_view())
]
