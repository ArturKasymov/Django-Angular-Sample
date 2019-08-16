from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..queries import qs_pairs, save_pair


class TableView(APIView):
    def get(self, request, *args, **kwargs):
        filters = self._get_query_params(request)
        data = self._get_filtered_data(filters)
        return Response({'data': data}, status=status.HTTP_200_OK)

    def post(self, request):
        key, value = self._get_post_data(request.data)
        save_pair(key, value)
        return Response()

    @staticmethod
    def _get_query_params(request):
        return None

    def _get_filtered_data(self, filters):
        if filters is None:
            return qs_pairs().values()
        else:
            # Handle using filters
            return None

    def _get_post_data(self, data):
        return data['key'], data['value']
