from django.urls import path, include

urlpatterns = [
    path('custom_page/', include(('custom_page.api.urls', 'custom_page'), namespace='custom_page')),
]
