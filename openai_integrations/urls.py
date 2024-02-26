from django.urls import path
from .views import QueryAPIView

urlpatterns = [
    path('ai/', QueryAPIView.as_view(), name='query'),
]
