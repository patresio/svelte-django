from rest_framework import viewsets

from apps.films.models import Film
from apps.films.serializers import FilmSerializer


class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer


# Antigo
# from rest_framework import generics

# from apps.films.models import Film
# from apps.films.serializers import FilmSerializer
# class FilmListAPIView(generics.ListAPIView):
#     queryset = Film.objects.all()
#     serializer_class = FilmSerializer

# class FilmDetailAPIView(generics.RetrieveAPIView):
#     queryset = Film.objects.all()
#     serializer_class = FilmSerializer
