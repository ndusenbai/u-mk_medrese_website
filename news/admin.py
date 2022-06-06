from django.contrib import admin
from .models import news, person,Ip, dayIp, news_out, stati,video, bailanys, youthWork, internationalCooperation, books, studentLive, studentHouse, studentBest, medreseTecher,feedback, mainFeedback
from django.contrib.admin import AdminSite

#AdminSite.site_header = "Medrese"
AdminSite.site_header = 'Medrese'
AdminSite.site_title = 'Medrese'
AdminSite.index_title = 'Medrese'

admin.site.register(news)
admin.site.register(person)
admin.site.register(news_out)
admin.site.register(stati)
admin.site.register(internationalCooperation)
admin.site.register(youthWork)
admin.site.register(video)
admin.site.register(books)
admin.site.register(studentLive)
admin.site.register(studentHouse)
admin.site.register(studentBest)
admin.site.register(medreseTecher)
admin.site.register(feedback)
admin.site.register(mainFeedback)
admin.site.register(bailanys)
#admin.site.register(Ip)
admin.site.register(dayIp)




