from django.db import models
from apps.category.models import Category
from django.utils import timezone
from ckeditor.fields import RichTextField

# Create your models here.


def blog_img_directory(instance, filename):
    return "blog/{0}/{1}".format(instance.title, filename)

class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status="published")

    options = (
        ("draft", "Draft"),
        ("published", "Published")
    )
    
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="posts")
    title = models.CharField(max_length=100)
    slug = models.CharField(max_length=100, unique=True)
    img = models.ImageField(upload_to=blog_img_directory)
    description = models.TextField()
    content = RichTextField() 
    status = models.CharField(max_length=20, choices=options, default="draft")
    date_created = models.DateTimeField(default=timezone.now)
    time_read = models.IntegerField()
    objects = models.Manager() # default manager
    postobjects = PostObjects() # custom manager



    class Meta:
        ordering = ("-date_created",)
    
    def __str__(self):
        return self.title
    
 