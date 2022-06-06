from django.db.models import Q
from django.shortcuts import render
from news.models import news,person, dayIp, Ip, news_out, stati, bailanys, internationalCooperation, video, youthWork, books, studentLive, studentHouse, medreseTecher, feedback, mainFeedback
from datetime import datetime, timedelta

URL = 'http://u-mk.edu.kz/'


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR') # В REMOTE_ADDR значение айпи пользователя
    return ip

def count():

    nowDay = str(datetime.now())[:10]
    firstDay = str(datetime.now() - timedelta(days=1))[:10]

    count = Ip.objects.filter(date = firstDay).count()

    dayIpList = []
    dayIpInfo = dayIp.objects.all()

    for item in dayIpInfo:
        dayIpList.append(str(item.date))
	    
    if (str(firstDay) in dayIpList) == False:
        dayIp.objects.create(count = count, date=firstDay)
    else:
        dayDate = dayIp.objects.get(date=firstDay)
        dayDate.count = count
        dayDate.save()


def index(request):
    ip = get_client_ip(request)
    
    ipList = []
    ipInfo = Ip.objects.all()

    for item in ipInfo:
        ipList.append(str(item.ip))

    count()  
 
    if (str(ip) in ipList) == False:
        Ip.objects.create(ip=ip, date=str(datetime.now())[:10])
    else:
        dayDate = Ip.objects.get(ip=ip)
        dayDate.date = str(datetime.now())[:10]
        dayDate.save() 

    firstDay = str(datetime.now() - timedelta(days=1))[:10]
    countYesterday = dayIp.objects.get(date = firstDay).count
     

    med = 'media/'
    l = 'Жаңалықтар'
    new = news.objects.order_by('-field_name')[:3]
    photo = []
    name = []
    ne = []
    ind = []
    for item in new:
        ne.append(l)
        ind.append("news/" + str(item.id))
        x = med + str(item.photo)
        photo.append(x)
        name.append(item.title)

    new1 = news_out.objects.order_by('-field_name')[:4]
    
    photo1 = []
    name1 =[]
    ind1 = []
    year = []
    moth = []
    day = []
    for item in new1:
        name1.append(item.title)
        photo1.append('media/' + str(item.photo))
        ind1.append('news_out/' + str(item.id))
        outSotrData = str(item.field_name)
        year.append(outSotrData[0:4])
        moth.append(outSotrData[5:7])
        day.append(outSotrData[8:10])

    new2 = stati.objects.order_by('-field_name')[:3]
    photo2 = []
    name2 = []
    ind2 = []
    for item in new2:
        photo2.append('media/' + str(item.photo))
        name2.append(str(item.title))
        ind2.append('stati/'+ str(item.id))

    internationalNews = internationalCooperation.objects.order_by('-field_name')[:3]
    internationalNewsPhoto = []
    internationalNewsTitle = []
    internationalNewsId = []
    internationalNewsShortNews = []
    for item in internationalNews:
        internationalNewsPhoto.append('media/' + str(item.photo))
        internationalNewsTitle.append(str(item.title))
        internationalNewsId.append('internationalCooperation/' + str(item.id))
        shortNews = str(item.text)
        text = shortNews.split(' ', 15)
        del text[-1]
        text = ' '.join(text) + ' ...'
        internationalNewsShortNews.append(text)

    videoDB = video.objects.order_by('-field_name')[:4]
    videoTitle = []
    videoId = []
    videoPhoto = []
    for item in videoDB:
        videoId.append('video/' + str(item.id))
        videoTitle.append(str(item.title))
        videoPhoto.append('media/' + str(item.photo))

    youthWorkDB = youthWork.objects.order_by('-field_name')[:3]
    youthWorkId = []
    youthWorkTitle = []
    youthWorkPhoto = []
    youthWorkText = []
    for item in youthWorkDB:
        youthWorkId.append('youthWork/'  + str(item.id))
        youthWorkPhoto.append('media/' + str(item.photo))
        youthWorkTitle.append(str(item.title))
        shortText = str(item.text)
        text = shortText.split(' ', 20)
        del text[-1]
        text = ' '.join(text) + ' ...'
        youthWorkText.append(text)
    
    techerList = medreseTecher.objects.all()

    if request.method == 'POST':
        fullname = request.POST.get('name')
        email = request.POST.get('email')
        type = request.POST.get('subject')
        text = request.POST.get('message')

        s = feedback(fullName=fullname, email=email, type=type, text=text)
        s.save()

    return render(request, "firstapp/index.html", {'id': ind, 'x': name, 'y': photo, 'z':ne,
                                                   'id1': ind1, 'x1': name1, 'y1':photo1,'year':year,'moth':moth,'day':day,
                                                   'id2':ind2, 'x2': name2, 'y2':photo2,
                                                   'id3':internationalNewsId, 'x3':internationalNewsTitle, 'y3':internationalNewsPhoto, 'z3':internationalNewsShortNews,
                                                   'id4':videoId, 'x4':videoTitle, 'y4':videoPhoto,
                                                   'id5':youthWorkId, 'x5':youthWorkTitle, 'y5':youthWorkPhoto, 'z5':youthWorkText, 'teacher' : techerList, 'pop' : internationalNews,
                                                   'count':countYesterday})


#onlyNews
def news_main(request, page):
    page = int(page)

    newsId = news.objects.filter(id=page)

    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.text))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL
    ABOUD = 'news/'
    THEME = ["Жаңалықтар"]

    recommendatInfo = news.objects.filter(~Q(id = page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []
    
    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))


    data = {'photo': photo, 'title': titleSaveList[0], 'date' : dateSaveList[0], 'text' : textSaveList[0],
            'photoRecommend':photoRecommend, 'titleRecommend':titleRecommend, 'idRecommend':idRecommend, 'thema':THEME }
    return render(request, "news/onlyNews.html", data)


def news_ou(request, page):
    page = int(page)

    newsId = news_out.objects.filter(id=page)

    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.text))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL 
    ABOUD = 'news_out/'
    THEME = ["Шетел жаңалықтары"]

    recommendatInfo = news_out.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'text': textSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/onlyNews.html", data)


def stat(request, page):
    page = int(page)

    newsId = stati.objects.filter(id=page)
    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.text))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL 
    ABOUD = 'stati/'
    THEME = ["Мақалалар"]

    recommendatInfo = stati.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'text': textSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/onlyNews.html", data)


def internationalNews(request, page):
    page = int(page)

    newsId = internationalCooperation.objects.filter(id=page)
    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.text))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL 
    ABOUD = 'internationalCooperation/'
    THEME = ["Халықаралық және республикалық әріптестік"]

    recommendatInfo = internationalCooperation.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'text': textSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/onlyNews.html", data)


def youthWor(request, page):
    page = int(page)

    newsId = youthWork.objects.filter(id=page)
    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.text))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL 
    ABOUD = 'youthWork/'
    THEME = ["Жастармен жұмыс"]

    recommendatInfo = youthWork.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'text': textSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/onlyNews.html", data)


def vide(request, page):
    page = int(page)

    newsId = video.objects.filter(id=page)
    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    urlSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        urlSaveList.append(str(item.url)[-11:])
        dateSaveList.append(str(item.field_name)[:10])
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL 
    ABOUD = 'video/'
    THEME = ["Видео"]

    recommendatInfo = video.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'url': urlSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/videoOnlyNews.html", data)


def perso(request, page):
    page = int(page)

    newsId = person.objects.filter(id=page)
    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.name_position))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.information))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL 
    ABOUD = 'person/'
    THEME = ["ӘКІМШІЛІК"]

    recommendatInfo = person.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.name_position))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'text': textSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/onlyNews.html", data)


#header
def academ(request):

    if request.method == 'POST':
        fullname = request.POST.get('name')
        email = request.POST.get('email')
        type = request.POST.get('subject')
        text = request.POST.get('message')

        s = mainFeedback(fullName=fullname, email=email, type=type, text=text)
        s.save()

    data = {'url': URL}
    return render(request, "news/academy.html", data)


def talapke(request):
    data = {'url': URL}
    return render(request, "news/talapker.html", data)


def studen(request):
    return render(request, "news/student.html")


def book(request):
    return render(request, 'news/books.html')


def librar(request):
    infoBooks = books.objects.order_by('-field_name').all()
    dateBooks = []
    zhanrBooks = []
    nameBooks = []
    nameAutor = []
    shortText = []
    photoBooks = []
    fileBooks = []
    for item in infoBooks:
        dateBooks.append(str(item.field_name)[:10])
        zhanrBooks.append(item.zhanr)
        nameBooks.append(item.nameBook)
        nameAutor.append(item.nameAutor)
        shortText.append(item.shortText)
        photoBooks.append('media' + str(item.photoBook))
        fileBooks.append('media' + str(item.fileBook))
    data = {'data': infoBooks}
    return render(request, 'news/library.html', data)


def medi(request):
    return render(request, "news/media.html")


# КОЛЛЕДЖ
def aboutMedres(request):
    return render(request, 'news/aboutMedrese.html')


def histor(request):
    return render(request, 'news/history.html')


def contact(request):
	

    if request.method == 'POST':
        fullname = request.POST.get('name')
        email = request.POST.get('email')
        type = request.POST.get('subject')
        text = request.POST.get('message')

        s = bailanys(fullName=fullname, email=email, type=type, text=text)
        s.save()

	
    return render(request, 'news/contacts.html')


#ТАЛАПКЕР

def talapkerMessang(request):
    return render(request, 'news/talapkerMessange.html')


def scienc(request):
    return render(request, 'news/science.html')


def us(request):
    return render(request, 'news/usl.html')


def ku(request):
    return render(request, 'news/kuj.html')


#СТУДЕНТ
def studentLiv(request, page):
    page = int(page)

    newsId = studentLive.objects.filter(id=page)
    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.text))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL
    ABOUD = 'studentLive/'
    THEME = ["Студенттік өмір"]

    recommendatInfo = studentLive.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'text': textSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/onlyNews.html", data)


def studentHous(request, page):
    page = int(page)

    newsId = studentHouse.objects.filter(id=page)
    photoSaveList = []
    titleSaveList = []
    dateSaveList = []
    textSaveList = []
    for item in newsId:
        titleSaveList.append(str(item.title))
        dateSaveList.append(str(item.field_name)[:10])
        textSaveList.append(str(item.text))
        photoSaveList.append(str(item.photo))
    photo = '/media/' + photoSaveList[0]

    LINKSITE = URL
    ABOUD = 'studentHouse/'
    THEME = ["Студенттік жатахана"]

    recommendatInfo = studentHouse.objects.filter(~Q(id=page)).order_by('-field_name')[:3]
    photoRecommend = []
    titleRecommend = []
    idRecommend = []

    for item in recommendatInfo:
        photoRecommend.append('/media/' + str(item.photo))
        titleRecommend.append(str(item.title))
        idRecommend.append(LINKSITE + ABOUD + str(item.id))

    data = {'photo': photo, 'title': titleSaveList[0], 'date': dateSaveList[0], 'text': textSaveList[0],
            'photoRecommend': photoRecommend, 'titleRecommend': titleRecommend, 'idRecommend': idRecommend,
            'thema': THEME}
    return render(request, "news/onlyNews.html", data)


def studentBes(request):
    return render(request, 'news/base.html')