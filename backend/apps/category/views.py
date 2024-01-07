from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from .models import Category
from apps.blog.serializers import PostSerializer
from .serializers import CategorySerializer
from django.db.models import F

# Create your views here.

class ListCategoriesView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Category.objects.all().exists():
            categories = Category.objects.all()
            result = []
            for category in categories:
                if not category.parent:
                    item = {
                            "id": category.id,
                            "name": category.name,
                            "slug": category.slug,
                            "views": category.views,
                            "sub_category": []
                           }

                    for cat in categories:
                        if cat.parent and cat.parent.id == category.id:
                            sub_item = {
                                "id": cat.id,
                                "name": cat.name,
                                "slug": cat.slug,
                                "views": cat.views,
                            }
                            item["sub_category"].append(sub_item)                  
                    result.append(item)
            return Response({"Categories": result}, status=status.HTTP_200_OK)

        return Response({"Error": "No categories found"}, status=status.HTTP_404_NOT_FOUND)


class CategoryDetailView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, category_slug, format=None):
        try:
            category = Category.objects.get(slug=category_slug)
        except ObjectDoesNotExist:
            return Response({"Error": "No category found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            category = CategorySerializer(category).data
            return Response({"Category": category}, status=status.HTTP_200_OK)


class PostListByCategoryView(APIView):

    permission_classes = (permissions.AllowAny,)

    def get(self, request, category_slug, format=None):
        try:
            category = Category.objects.get(slug=category_slug)
        except ObjectDoesNotExist:
            return Response({"Error": "No such category found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            posts = category.posts.order_by("-date_created").all()
            if posts.exists():
                result = PostSerializer(posts, many=True)   
                return Response({"posts": result.data}, status=status.HTTP_200_OK)
            return Response({"Error": "No posts found"}, status=status.HTTP_404_NOT_FOUND)


