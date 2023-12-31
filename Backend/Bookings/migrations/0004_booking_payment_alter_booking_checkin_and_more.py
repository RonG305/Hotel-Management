# Generated by Django 4.2.4 on 2023-08-09 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bookings', '0003_booking_room_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='payment',
            field=models.CharField(choices=[('paid', 'paid'), ('pending', 'pending')], default='', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='booking',
            name='checkin',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='booking',
            name='checkout',
            field=models.DateTimeField(),
        ),
    ]
