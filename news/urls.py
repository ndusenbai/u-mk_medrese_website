from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('news/<slug:page>', views.news_main),
    path('news_out/<slug:page>', views.news_ou),
    path('stati/<slug:page>', views.stat ),
    path('person/', views.perso ),
    path('internationalCooperation/<slug:page>', views.internationalNews ),
    path('youthWork/<slug:page>', views.youthWor ),
    path('video/<slug:page>', views.vide ),
    path('studentLive/<slug:page>', views.studentLiv ),
    path('studentHouse/<slug:page>', views.studentHous ),
    path('studentBest/', views.studentBes ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)