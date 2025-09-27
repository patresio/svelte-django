from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def menu_data(request):
    """
    Fornece os dados de navegação do menu principal.
    """
    data = [
        {
            'name': 'Inicio',
            'href': '/'
        },
        {
            'name': 'Filmes',
            'href': '/films'
        },
        {
            'name': 'Sobre',
            'href': '/about'
        }
    ]
    return Response(data)

@api_view(['GET'])
def film_form_data(request):
    """
    Fornece a estrutura e configuração para os campos do formulário de filmes.
    """
    data = [
        {
            'type': 'text',
            'placeholder': 'Titulo',
            'value': '',
            'id': 'title',
            'label': 'Titulo',
            'required': True,
            'error': '',
            'minLength': 3
        },
        {
            'type': 'text',
            'placeholder': 'Diretor',
            'value': '',
            'id': 'director',
            'label': 'Diretor',
            'required': True,
            'error': '',
            'minLength': 7
        },
        {
            'type': 'text',
            'placeholder': 'Sinopse',
            'value': '',
            'id': 'sinopse',
            'label': 'Sinopse',
            'required': True,
            'error': '',
            'minLength': 10
        },
        {
            'type': 'text',
            'placeholder': 'Descrição',
            'value': '',
            'id': 'description',
            'label': 'Descrição',
            'required': True,
            'error': '',
            'minLength': 10
        },
        {
            'type': 'number',
            'placeholder': 'Duração',
            'value': '',
            'id': 'duration',
            'label': 'Duração',
            'required': True,
            'min': 0,
            'error': ''
        },
        {
            'type': 'number',
            'placeholder': 'Nota',
            'value': '',
            'id': 'rating',
            'label': 'Nota',
            'required': True,
            'min': 0,
            'max': 10,
            'step': 0.1,
            'error': ''
        }
    ]
    return Response(data)