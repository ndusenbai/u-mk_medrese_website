from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from ckeditor.fields import RichTextField
import datetime

class Ip(models.Model):
    ip = models.CharField('Ip address', max_length=100)
    date = models.CharField('date', max_length=100)

    def __str__(self):
        return str(self.ip)

    class Meta:
        verbose_name = 'Ip'
        verbose_name_plural = 'Ips'


class dayIp(models.Model):
    count = models.CharField('count', max_length=100)
    date = models.CharField('date', max_length=100)

    def __str__(self):
        return str(self.date)

    class Meta:
        verbose_name = 'dayIp'
        verbose_name_plural = 'dayIps'



class news(models.Model):
    title = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='news', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class news_out(models.Model):
    title = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='news_out', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)
  

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Зарубежны Новость'
        verbose_name_plural = 'Зарубежные Новости'


class stati(models.Model):
    title = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='stati', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Статия'
        verbose_name_plural = 'Статьи'


class person(models.Model):
    name_position = models.CharField(max_length=100000)
    information = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='person', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name_position

    class Meta:
        verbose_name = 'Руководство'
        verbose_name_plural = 'Руководство'


class internationalCooperation(models.Model):
    title = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='internationalCooperation', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО'
        verbose_name_plural = 'МЕЖДУНАРОДНОЕ СОТРУДНИЧЕСТВО'


class youthWork(models.Model):
    title = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='youthWork', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Работа с молодёжью'
        verbose_name_plural = 'Работа с молодёжью'


class video(models.Model):
    title = models.CharField(max_length=100000)
    photo = models.ImageField(default=0, upload_to='video', null=True, blank=True)
    url = models.CharField(max_length=100000)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Видео'
        verbose_name_plural = 'Видео'


class books(models.Model):
    zhanr = models.CharField(max_length=100000)
    nameBook = models.CharField(max_length=100000)
    nameAutor = models.CharField(max_length=100000)
    shortText = RichTextField(blank=True, null=True)
    photoBook = models.ImageField(default=0, upload_to='books', null=True, blank=True)
    fileBook = models.FileField(default=0, upload_to='booksFile', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nameBook

    class Meta:
        verbose_name = 'Книга'
        verbose_name_plural = 'Книги'


class studentLive(models.Model):
    title = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='studentLive', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Студенттік өмір'
        verbose_name_plural = 'Студенттік өмір'


class studentHouse(models.Model):
    title = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)
    photo = models.ImageField(default=0, upload_to='studentHouse', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Студенттік жатахана'
        verbose_name_plural = 'Студенттік жатахана'


class studentBest(models.Model):
    type = models.CharField(max_length=100000)
    name = models.CharField(max_length=100000,default = "real")
    photo = models.ImageField(default=0, upload_to='studentBest_media', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)
    course = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(4)])

    def __str__(self):
        return self.type

    class Meta:
        verbose_name = 'Дарынды студенттер'
        verbose_name_plural = 'Дарынды студенттер'


class medreseTecher(models.Model):
    text = RichTextField(blank=True, null=True)
    fullName = models.CharField(max_length=100000)
    photo = models.ImageField(default=0, upload_to='medreseTecher_media', null=True, blank=True)
    field_name = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.fullName

    class Meta:
        verbose_name = 'Ұстаз'
        verbose_name_plural = 'Ұстаздар'


class feedback(models.Model):
    fullName = models.CharField(max_length=100000)
    email = models.CharField(max_length=100000)
    type = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)

    def __str__(self):
        return self.type 

    class Meta:
        verbose_name = 'Ұсыныс қалдыру'
        verbose_name_plural = 'Ұсыныс қалдыру'


class bailanys(models.Model):
    fullName = models.CharField(max_length=100000)
    email = models.CharField(max_length=100000)
    type = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)

    def __str__(self):
        return self.type 

    class Meta:
        verbose_name = 'Байланыс'
        verbose_name_plural = 'Байланыс'



class mainFeedback(models.Model):
    fullName = models.CharField(max_length=100000)
    email = models.CharField(max_length=100000)
    type = models.CharField(max_length=100000)
    text = RichTextField(blank=True, null=True)

    def __str__(self):
        return self.type 

    class Meta:
        verbose_name = 'Директорға сұрақ'
        verbose_name_plural = 'Директорға сұрақ'