# Generated by Django 3.2.23 on 2024-01-05 02:52

import apps.blog.models
import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.CharField(max_length=100, unique=True)),
                ('img', models.ImageField(upload_to=apps.blog.models.blog_img_directory)),
                ('description', models.TextField()),
                ('content', ckeditor.fields.RichTextField()),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='draft', max_length=20)),
                ('date_created', models.DateTimeField(default=django.utils.timezone.now)),
                ('time_read', models.IntegerField()),
                ('views', models.IntegerField(blank=True, default=0)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posts', to='category.category')),
            ],
            options={
                'ordering': ('-date_created',),
            },
        ),
        migrations.CreateModel(
            name='ViewCount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip_address', models.CharField(max_length=100)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='post_view_count', to='blog.post')),
            ],
        ),
    ]
