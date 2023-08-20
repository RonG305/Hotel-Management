from django.db import models

# Create your models here.


class Room(models.Model):
    ROOM_TYPE = [
        ('delux', 'delux'),
        ('super delux', 'super delux'),
        ('Single', 'Single'),
        ('Double', 'Double')

    ]
    STATUS = [
        ('booked', 'booked'),
        ('open', 'open'),
        ('inactive', 'inactive')
    ]

    MEAL = [
        ('breakfast', 'breakfast'),
        ('lunch', 'lunch'),
        ('dinner', 'dinner'),
        ('two', 'two'),
        ('all', 'all')
    ]

    AIR_CONDITION = [
        ('AC', 'AC'),
        ('No AC', 'No AC')
    ]
    room_number = models.CharField(max_length=20)
    room_type = models.CharField(max_length=100)
    meal = models.CharField(max_length=250, choices=MEAL)
    bed_capacity = models.IntegerField()
    air_condition = models.CharField(max_length=100, choices=AIR_CONDITION)
    rent = models.IntegerField()
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=250, default='open')
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.room_number

    class Meta:
        db_table = 'Room'
