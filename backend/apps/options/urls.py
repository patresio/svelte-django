from django.urls import path
from . import views

app_name = 'options'

urlpatterns = [
    path('menu/', views.menu_data, name='menu-data'),
    path('film-form/', views.film_form_data, name='film-form-data'),
]
