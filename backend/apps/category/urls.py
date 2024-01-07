from django.urls import path
from .views import ListCategoriesView, PostListByCategoryView, CategoryDetailView

urlpatterns = [
    path("", ListCategoriesView.as_view()),
    path("<str:category_slug>", CategoryDetailView.as_view()),
    path("<str:category_slug>/posts", PostListByCategoryView.as_view())
]

