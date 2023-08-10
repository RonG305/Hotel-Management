# Generated by Django 4.2.4 on 2023-08-10 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Bookings', '0004_booking_payment_alter_booking_checkin_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PaymentMethod',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('payment_name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('currency_setting', models.CharField(max_length=200)),
                ('status', models.CharField(max_length=200)),
            ],
            options={
                'db_table': 'PaymentMethod',
            },
        ),
    ]
