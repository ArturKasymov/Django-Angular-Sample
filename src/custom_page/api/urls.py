from django.urls import path
from .views import TableView

urlpatterns = [
    path('table/', TableView.as_view(), name='table')
]

