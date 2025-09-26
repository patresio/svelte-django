from rest_framework import serializers

from apps.films.models import Film


class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'
        read_only_fields = ('id',)
