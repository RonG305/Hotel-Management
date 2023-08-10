from django.db import models
from Rooms.models import Room

# Create your models here.


class Customer(models.Model):
    STATUS = [
        ('inside', 'inside'),
        ('checked', 'checked')
    ]

    GENDER = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('other', 'other')
    ]
    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    gender = models.CharField(max_length=250, choices=GENDER)
    email_address = models.EmailField()
    phone_number = models.CharField(max_length=20)
    room_number = models.OneToOneField(Room, on_delete=models.CASCADE)
    checkin = models.DateTimeField()
    checkout = models.DateTimeField()
    status = models.CharField(max_length=100, choices=STATUS)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        db_table = 'Customer'
