from django.db import models
from Rooms.models import Room
# Create your models here.


class Booking(models.Model):
    STATUS = [
        ('inside', 'inside'),
        ('checked', 'checked')
    ]

    GENDER = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('other', 'other')
    ]

    PAYMENT = [
        ('paid', 'paid'),
        ('pending', 'pending')
    ]

    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    gender = models.CharField(max_length=100, choices=GENDER)
    phone_number = models.CharField(max_length=20)
    room_number = models.ForeignKey(Room, on_delete=models.CASCADE)
    room_type = models.CharField(max_length=100)
    email_address = models.EmailField()
    address = models.CharField(max_length=100)
    checkin = models.DateField()
    checkout = models.DateField()
    payment = models.CharField(max_length=200, choices=PAYMENT)
    status = models.CharField(max_length=100, choices=STATUS)
    decription = models.TextField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        db_table = 'Booking'


class PaymentMethod(models.Model):
    payment_name = models.CharField(max_length=200)
    email = models.EmailField()
    currency_setting = models.CharField(max_length=200)
    status = models.CharField(max_length=200)

    def __str__(self):
        return self.payment_name

    class Meta:
        db_table = 'PaymentMethod'
