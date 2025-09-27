import os
from io import BytesIO
from django.db import models
from django.core.files.base import ContentFile
from PIL import Image


class Film(models.Model):
    image = models.ImageField(upload_to='images/', default='default.jpg')
    title = models.CharField(max_length=100)
    director = models.CharField(max_length=100)
    sinopse = models.TextField()
    description = models.TextField()
    duration = models.CharField(max_length=10)
    rating = models.DecimalField(max_digits=2, decimal_places=1)

    def save(self, *args, **kwargs):
        if self.image:
            img = Image.open(self.image)
            max_width = 800

            if img.width > max_width:
                new_height = int((max_width / img.width) * img.height)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

            # Convert to RGB to remove alpha channel (for JPEG compatibility)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')

            # Save optimized image to a memory buffer
            buffer = BytesIO()
            img.save(buffer, format='JPEG', quality=85)
            buffer.seek(0)

            # Change filename to .jpg
            image_name, _ = os.path.splitext(self.image.name)
            self.image.name = f'{image_name}.jpg'

            # Save buffer to image field
            self.image.file = ContentFile(buffer.read(), name=self.image.name)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Filme'
        verbose_name_plural = 'Filmes'
        ordering = ['id']
