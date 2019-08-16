from django.views.generic import TemplateView


class IndexView(TemplateView):
    template_name = "custom_page/custom_page_index.html"

    def get(self, request, *args, **kwargs):
        return super(IndexView, self).get(request, *args, **kwargs)


class FirstView(TemplateView):
    template_name = "custom_page/custom_page_first.html"

    def get(self, request, *args, **kwargs):
        return super(FirstView, self).get(request, *args, **kwargs)


# you could make abstraction for all tables on your site
class TableView(TemplateView):
    template_name = "custom_page/custom_page_table.html"

    def get(self, request, *args, **kwargs):
        return super(TableView, self).get(request, *args, **kwargs)
