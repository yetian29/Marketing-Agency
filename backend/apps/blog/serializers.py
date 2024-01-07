from rest_framework import serializers
from .models import Post
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    class Meta:
        model = Post
        fields = "__all__"

