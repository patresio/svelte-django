from rest_framework import routers

from apps.films.views import FilmViewSet

router = routers.DefaultRouter()
router.register('films', FilmViewSet, basename='films')

urlpatterns = router.urls


# Antigo
# from django.urls import path

# from apps.films.views import FilmDetailAPIView, FilmListAPIView

# app_name = 'films'

# urlpatterns = [
#     path('films/', FilmListAPIView.as_view(), name='list'),
#     path('films/<int:pk>/', FilmDetailAPIView.as_view(), name='detail'),
# ]
