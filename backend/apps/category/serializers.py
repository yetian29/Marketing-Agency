# serializers.py
from rest_framework import serializers
from .models import Category

class CategorySerializer(serializers.ModelSerializer):
    parent = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ("id", "name", "slug", "parent", "views")

    def get_parent(self, obj):
        if obj.parent:
            parent_data = {
                "id": obj.parent.id,
                "name": obj.parent.name,
                "slug": obj.parent.slug,
                "views": obj.parent.views,
                "parent": self.get_parent(obj.parent),  # Recursively get parent info
            }
            return parent_data
        return None

