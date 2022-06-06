from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='home'),
    path('news/<slug:page>', views.news_main),
    path('news_out/<slug:page>', views.news_ou),
    path('stati/<slug:page>', views.stat),
    path('person/<slug:page>', views.perso),
    path('internationalCooperation/<slug:page>', views.internationalNews),
    path('youthWork/<slug:page>', views.youthWor),
    path('video/<slug:page>', views.vide),
    path('studentLive/<slug:page>', views.studentLiv),
    path('studentHouse/<slug:page>', views.studentHous),
    path('studentBest/', views.studentBes),
    path('academy/', views.academ, name='academy'),
    path('student/', views.studen),
    path('talapker/', views.talapke),
    path('books/', views.book),
    path('library/', views.librar),
    path('media/', views.medi),
    path('aboutMedrese/', views.aboutMedres),
    path('history/', views.histor),
    path('contacts/', views.contact, name='contact'),
    path('talapkerMessange/', views.talapkerMessang),
    path('science/', views.scienc),
    path('usl/', views.us),
    path('kuj/', views.ku),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)