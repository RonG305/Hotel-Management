# Generated by Django 4.2.4 on 2023-08-12 16:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Bookings', '0007_alter_booking_room_type'),
    ]

    operations = [
        migrations.RenameField(
            model_name='booking',
            old_name='decription',
            new_name='description',
        ),
    ]
