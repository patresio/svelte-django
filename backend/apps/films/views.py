from rest_framework import viewsets
import os

from apps.films.models import Film
from apps.films.serializers import FilmSerializer


class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

    def perform_destroy(self, instance):
        if instance.image:
            if os.path.isfile(instance.image.path):
                os.remove(instance.image.path)
        instance.delete()
