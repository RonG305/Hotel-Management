# Generated by Django 4.2.4 on 2023-08-11 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Rooms', '0003_alter_room_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='status',
            field=models.CharField(default='open', max_length=250),
        ),
    ]
