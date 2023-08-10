from django.contrib import admin
from Bookings.models import Booking, PaymentMethod

# Register your models here.
admin.site.register(Booking)
admin.site.register(PaymentMethod)
