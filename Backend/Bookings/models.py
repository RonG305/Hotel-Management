from django.db import models

# Create your models here.

class Booking(models.Model):
    GENDER = [
        ('male', 'male'),
        ('female', 'female')
    ]
    
    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    gender = models.CharField(max_length=100, choices=GENDER)
    phone_number = models.CharField(max_length=20)
    email_address = models.EmailField()
    address = models.CharField(max_length=100)
    arrival = models.DateField()
    depart = models.DateField()
    decription = models.TextField()
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
       
    class Meta:
        db_table = 'Booking'
        
