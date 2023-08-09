from django.db import models

# Create your models here.

class Room(models.Model):
    STATUS = [
        ('booked', 'booked'),
        ('open', 'open')
    ]
    room_number = models.CharField(max_length=20)
    room_type = models.CharField(max_length=100)
    meal = models.CharField(max_length=250)
    bed_capacity = models.IntegerField()
    rent = models.IntegerField()
    status = models.CharField(max_length=250, choices=STATUS)
    
    def __str__(self):
        return self.room_number
    
    class Meta:
        db_table = 'Room'
    