from django.urls import path
from .views import PostDetailView, Search, PostsByCategories

urlpatterns = [
    path("postslatest", PostsByCategories.as_view()),
    path("search", Search.as_view()),
    path("<str:post_slug>", PostDetailView.as_view()),
]

