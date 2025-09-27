from rest_framework import viewsets
import os

from apps.films.models import Film
from apps.films.serializers import FilmSerializer


class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer

    def perform_update(self, serializer):
        old_instance = self.get_object()
        if 'image' in serializer.validated_data:
            if old_instance.image and old_instance.image != serializer.validated_data['image']:
                if old_instance.image.name != 'default.jpg' and old_instance.image.name.startswith('images/'):
                    if os.path.isfile(old_instance.image.path):
                        os.remove(old_instance.image.path)
        serializer.save()

    def perform_destroy(self, instance):
        if instance.image:
            if instance.image.name != 'default.jpg' and instance.image.name.startswith('images/'):
                if os.path.isfile(instance.image.path):
                    os.remove(instance.image.path)
        instance.delete()
