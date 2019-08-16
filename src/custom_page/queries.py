from .models import Pair


def qs_pairs():
    return Pair.objects.all()


def save_pair(key,value):
    pair = Pair(key=key, value=value)
    pair.save()
