
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Rooms.urls')),
    path('api/', include('Bookings.urls')),
    path('api/', include('accounts.urls'))
]
