# Generated by Django 4.2.4 on 2023-08-11 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Rooms', '0002_alter_room_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='status',
            field=models.CharField(max_length=250),
        ),
    ]
