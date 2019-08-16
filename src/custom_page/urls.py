from django.urls import path
from .views import IndexView, FirstView, TableView

urlpatterns = [
    path('', IndexView.as_view(), name="index"),
    path('first/', FirstView.as_view(), name="first"),
    path('table/', TableView.as_view(), name="table")
]
