from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
from django.db.models import F
from django.db.models.query_utils import Q
from apps.category.models import Category
from apps.category.serializers import CategorySerializer
# Create your views here.



class PostsByCategories(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):

        categories = Category.objects.all()
        categories_with_posts = []
        if categories:
            for category in categories:
    
                posts = category.posts.all().order_by("-date_created")[:3]
                if posts:
                    posts = PostSerializer(posts, many=True).data
                    category_data = {"name": category.name, "slug": category.slug}
                    categories_with_posts.append({"category": category_data, "posts": posts})
            return Response({"categories_with_posts": categories_with_posts})
    

class PostDetailView(APIView):

    permission_classes = (permissions.AllowAny,)

    def get(self, request, post_slug, format=None):
        try:
            post = Post.postobjects.get(slug=post_slug)
        except ObjectDoesNotExist:
            return Response({"Error": "No post found"}, status=status.HTTP_404_NOT_FOUND)
        else:   
            post = PostSerializer(post)
            return Response({"Post": post.data}, status=status.HTTP_200_OK)


class Search(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self,request, format=None):
        search_term = request.query_params.get("SearchText")
        if not search_term is None:
            posts = Post.postobjects.filter(
                Q(title__icontains=search_term) |
                Q(slug__icontains=search_term) |
                Q(description__icontains=search_term) |
                Q(category__name__icontains=search_term)
            )
            if posts:
               
                posts = PostSerializer(posts, many=True).data
                return Response({"Filtered_Posts": posts}, status=status.HTTP_200_OK)
