from functools import reduce
from django.db.models import Q
from django.shortcuts import render
from news.models import news, news_out, stati,person, internationalCooperation, youthWork, video, studentLive, studentHouse, studentBest

def news_main(request, page):
    href = []
    photo = []
    title = []
    page = int(page)

    tip = 'Жаңалықтар'
    cnt = int(news.objects.count())

    page_num = int(cnt/9)
    page_cnt_end = cnt % 9


    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = news.objects.get(pk = 1)

                href.append('/news/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[0]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = news.objects.all()[st:en]

                for item in inf:
                    href.append('/news/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[1]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[0]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[0]}" class="article-card__title">
                                                                {title[0]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = news.objects.all()[st:en]

                for item in inf:
                    href.append('/news/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[2]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[1]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[1]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[1]}" class="article-card__title">
                                                                {title[1]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                one_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[0]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[0]}" class="article-card__title">
                                                                {title[0]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <=6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = news.objects.all()[st:en]

                for item in inf:
                    href.append('/news/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[3]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[2]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[2]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="#" class="article-card__title">
                                                                {title[2]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                one_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[1]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[1]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="#" class="article-card__title">
                                                                {title[1]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                twe_row_one = f"""
                            <div class="col-lg-6 order-lg-1 mb-3">
                                                <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[0]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = news.objects.all()[st:en]

                for item in inf:
                    href.append('/news/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[4]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[3]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[3]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="#" class="article-card__title">
                                                                {title[3]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                one_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[2]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[2]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="#" class="article-card__title">
                                                                {title[2]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                twe_row_one = f"""
                            <div class="col-lg-6 order-lg-1 mb-3">
                                                <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[1]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="" class="article-card__title">
                                                            {title[0]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = news.objects.all()[st:en]

                for item in inf:
                    href.append('/news/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[5]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[4]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[4]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="#" class="article-card__title">
                                                                {title[4]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                one_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[3]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[3]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[3]}" class="article-card__title">
                                                                {title[3]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                twe_row_one = f"""
                            <div class="col-lg-6 order-lg-1 mb-3">
                                                <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[2]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="" class="article-card__title">
                                                            {title[1]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''
                twe_row_three = f"""
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                    data-aos-offset="150">

                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="" class="article-card__title">
                                                            {title[0]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = news.objects.all()[st:en]

                for item in inf:
                    href.append('/news/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[6]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[5]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[5]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[5]}" class="article-card__title">
                                                                {title[5]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                one_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[4]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[4]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[4]}" class="article-card__title">
                                                                {title[4]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                twe_row_one = f"""
                            <div class="col-lg-6 order-lg-1 mb-3">
                                                <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[3]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="" class="article-card__title">
                                                            {title[2]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''
                twe_row_three = f"""
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                    data-aos-offset="150">

                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[1]}" class="article-card__title">
                                                            {title[1]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>"""

                three_row_one = f"""
                            <div class="col-lg-6  mb-3">
                                                <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[0]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one,  'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = news.objects.all()[st:en]

                for item in inf:
                    href.append('/news/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[7]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[6]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[6]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[6]}" class="article-card__title">
                                                                {title[6]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                one_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[5]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[5]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[5]}" class="article-card__title">
                                                                {title[5]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                twe_row_one = f"""
                            <div class="col-lg-6 order-lg-1 mb-3">
                                                <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[4]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[3]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[3]}" class="article-card__title">
                                                            {title[3]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''
                twe_row_three = f"""
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                    data-aos-offset="150">

                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[2]}" class="article-card__title">
                                                            {title[2]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>"""

                three_row_one = f"""
                            <div class="col-lg-6  mb-3">
                                                <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[1]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
                three_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[0]}" class="article-card__title">
                                                            {title[0]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = news.objects.all()[st:en]

        for item in inf:
            href.append('/news/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                    <a href="{ href[8] }" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                        <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                        </div>

                                        <div class="article-imaged__content p-4">
                                            <div class="article-imaged__category mb-1">
                                                {tip}
                                            </div>
                                            <div class="article-imaged__title">
                                                {title[8]}
                                            </div>
                                        </div>
                                    </a>
                                </div>"""  # href , photo , title , text
        one_row_twe = f'''
                <div class="col-lg-3 mb-3">
                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                        data-aos-offset="150">

                                        <a href="{href[7]}" class="article-card__img-wrap">
                                            <div class="article-card__img" style="background-image: url({photo[7]})">
                                            </div>
                                        </a>


                                        <div class="p-4">
                                            <div class="article-card__category mb-1">
                                                {tip}
                                            </div>
                                            <a href="{href[7]}" class="article-card__title">
                                                {title[7]}
                                            </a>

                                        </div>
                                    </div>
                                </div>'''
        one_row_three = f"""
                <div class="col-lg-3 mb-3">
                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                        data-aos-offset="150">

                                        <a href="{href[6]}" class="article-card__img-wrap">
                                            <div class="article-card__img" style="background-image: url({photo[6]})">
                                            </div>
                                        </a>


                                        <div class="p-4">
                                            <div class="article-card__category mb-1">
                                                {tip}
                                            </div>
                                            <a href="{href[6]}" class="article-card__title">
                                                {title[6]}
                                            </a>

                                        </div>
                                    </div>
                                </div>"""

        twe_row_one = f"""
            <div class="col-lg-6 order-lg-1 mb-3">
                                <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                    <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                    </div>

                                    <div class="article-imaged__content p-4">
                                        <div class="article-imaged__category mb-1">
                                            {tip}
                                        </div>
                                        <div class="article-imaged__title">
                                            {title[5]}
                                        </div>
                                    </div>
                                </a>
                            </div>"""  # href , photo , title , text
        twe_row_twe = f'''
            <div class="col-lg-3 mb-3">
                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                    data-aos-offset="150">

                                    <a href="{href[4]}" class="article-card__img-wrap">
                                        <div class="article-card__img" style="background-image: url({photo[4]})">
                                        </div>
                                    </a>


                                    <div class="p-4">
                                        <div class="article-card__category mb-1">
                                            {tip}
                                        </div>
                                        <a href="{href[4]}" class="article-card__title">
                                            {title[4]}
                                        </a>

                                    </div>
                                </div>
                            </div>'''
        twe_row_three = f"""
            <div class="col-lg-3 mb-3">
                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                    data-aos-offset="150">

                                    <a href="{href[3]}" class="article-card__img-wrap">
                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                        </div>
                                    </a>


                                    <div class="p-4">
                                        <div class="article-card__category mb-1">
                                            {tip}
                                        </div>
                                        <a href="{href[3]}" class="article-card__title">
                                            {title[3]}
                                        </a>

                                    </div>
                                </div>
                            </div>"""

        three_row_one = f"""
            <div class="col-lg-6  mb-3">
                                <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                    <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                    </div>

                                    <div class="article-imaged__content p-4">
                                        <div class="article-imaged__category mb-1">
                                            {tip}
                                        </div>
                                        <div class="article-imaged__title">
                                            {title[2]}
                                        </div>
                                    </div>
                                </a>
                            </div>"""  # href , photo , title , text
        three_row_twe = f'''
            <div class="col-lg-3 mb-3">
                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                    data-aos-offset="150">

                                    <a href="{href[1]}" class="article-card__img-wrap">
                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                        </div>
                                    </a>


                                    <div class="p-4">
                                        <div class="article-card__category mb-1">
                                            {tip}
                                        </div>
                                        <a href="{href[1]}" class="article-card__title">
                                            {title[1]}
                                        </a>

                                    </div>
                                </div>
                            </div>'''
        three_row_three = f"""
            <div class="col-lg-3 mb-3">
                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                    data-aos-offset="150">

                                    <a href="{href[0]}" class="article-card__img-wrap">
                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                        </div>
                                    </a>


                                    <div class="p-4">
                                        <div class="article-card__category mb-1">
                                            {tip}
                                        </div>
                                        <a href="{href[0]}" class="article-card__title">
                                            {title[0]}
                                        </a>

                                    </div>
                                </div>
                            </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt/9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/news/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/news/{item}'>{item}</a></li>".format(item, item)

        data = {'type':tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three, 'twe_row_one':twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three':twe_row_three, 'three_row_one':three_row_one, 'three_row_twe':three_row_twe, 'three_row_three':three_row_three, 'list' : k}
        return render(request, 'news/news.html', data)

    else:
        return render(request, 'news/news.html')


def news_ou(request, page):
    tip = 'Шетел жаңалықтары'
    href = []
    photo = []
    title = []
    page = int(page)

    cnt = int(news_out.objects.count())

    page_num = int(cnt / 9)
    page_cnt_end = cnt % 9

    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = news_out.objects.get(pk=1)

                href.append('/news_out/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                        <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                            <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                            </div>

                                                                            <div class="article-imaged__content p-4">
                                                                                <div class="article-imaged__category mb-1">
                                                                                    {tip}
                                                                                </div>
                                                                                <div class="article-imaged__title">
                                                                                    {title[0]}
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = news_out.objects.all()[st:en]

                for item in inf:
                    href.append('/news_out/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                        <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[1]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[0]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[0]}" class="article-card__title">
                                                                    {title[0]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = news_out.objects.all()[st:en]

                for item in inf:
                    href.append('/news_out/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                        <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[2]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[1]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[1]}" class="article-card__title">
                                                                    {title[1]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                one_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[0]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[0]}" class="article-card__title">
                                                                    {title[0]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <= 6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = news_out.objects.all()[st:en]

                for item in inf:
                    href.append('/news_out/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                        <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[3]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[2]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="#" class="article-card__title">
                                                                    {title[2]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                one_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[1]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="#" class="article-card__title">
                                                                    {title[1]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                twe_row_one = f"""
                                <div class="col-lg-6 order-lg-1 mb-3">
                                                    <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[0]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = news_out.objects.all()[st:en]

                for item in inf:
                    href.append('/news_out/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                        <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[4]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[3]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="#" class="article-card__title">
                                                                    {title[3]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                one_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[2]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="#" class="article-card__title">
                                                                    {title[2]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                twe_row_one = f"""
                                <div class="col-lg-6 order-lg-1 mb-3">
                                                    <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[1]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[0]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="" class="article-card__title">
                                                                {title[0]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = news_out.objects.all()[st:en]

                for item in inf:
                    href.append('/news_out/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                        <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[5]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[4]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="#" class="article-card__title">
                                                                    {title[4]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                one_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[3]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[3]}" class="article-card__title">
                                                                    {title[3]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                twe_row_one = f"""
                                <div class="col-lg-6 order-lg-1 mb-3">
                                                    <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[2]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[1]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[1]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="" class="article-card__title">
                                                                {title[1]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                twe_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[0]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="" class="article-card__title">
                                                                {title[0]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = news_out.objects.all()[st:en]

                for item in inf:
                    href.append('/news_out/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                        <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[6]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[5]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[5]}" class="article-card__title">
                                                                    {title[5]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                one_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[4]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[4]}" class="article-card__title">
                                                                    {title[4]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                twe_row_one = f"""
                                <div class="col-lg-6 order-lg-1 mb-3">
                                                    <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[3]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[2]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[2]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="" class="article-card__title">
                                                                {title[2]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                twe_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[1]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[1]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[1]}" class="article-card__title">
                                                                {title[1]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                three_row_one = f"""
                                <div class="col-lg-6  mb-3">
                                                    <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[0]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = news_out.objects.all()[st:en]

                for item in inf:
                    href.append('/news_out/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                        <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[7]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[6]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[6]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[6]}" class="article-card__title">
                                                                    {title[6]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                one_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[5]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[5]}" class="article-card__title">
                                                                    {title[5]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                twe_row_one = f"""
                                <div class="col-lg-6 order-lg-1 mb-3">
                                                    <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[4]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[3]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[3]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[3]}" class="article-card__title">
                                                                {title[3]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
                twe_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[2]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[2]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[2]}" class="article-card__title">
                                                                {title[2]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

                three_row_one = f"""
                                <div class="col-lg-6  mb-3">
                                                    <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[1]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
                three_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[0]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[0]}" class="article-card__title">
                                                                {title[0]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                             item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = news_out.objects.all()[st:en]

        for item in inf:
            href.append('/news_out/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                        <a href="{href[8]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                            <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                            </div>

                                            <div class="article-imaged__content p-4">
                                                <div class="article-imaged__category mb-1">
                                                    {tip}
                                                </div>
                                                <div class="article-imaged__title">
                                                    {title[8]}
                                                </div>
                                            </div>
                                        </a>
                                    </div>"""  # href , photo , title , text
        one_row_twe = f'''
                    <div class="col-lg-3 mb-3">
                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                            data-aos-offset="150">

                                            <a href="{href[7]}" class="article-card__img-wrap">
                                                <div class="article-card__img" style="background-image: url({photo[7]})">
                                                </div>
                                            </a>


                                            <div class="p-4">
                                                <div class="article-card__category mb-1">
                                                    {tip}
                                                </div>
                                                <a href="{href[7]}" class="article-card__title">
                                                    {title[7]}
                                                </a>

                                            </div>
                                        </div>
                                    </div>'''
        one_row_three = f"""
                    <div class="col-lg-3 mb-3">
                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                            data-aos-offset="150">

                                            <a href="{href[6]}" class="article-card__img-wrap">
                                                <div class="article-card__img" style="background-image: url({photo[6]})">
                                                </div>
                                            </a>


                                            <div class="p-4">
                                                <div class="article-card__category mb-1">
                                                    {tip}
                                                </div>
                                                <a href="{href[6]}" class="article-card__title">
                                                    {title[6]}
                                                </a>

                                            </div>
                                        </div>
                                    </div>"""

        twe_row_one = f"""
                <div class="col-lg-6 order-lg-1 mb-3">
                                    <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                        <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                        </div>

                                        <div class="article-imaged__content p-4">
                                            <div class="article-imaged__category mb-1">
                                                {tip}
                                            </div>
                                            <div class="article-imaged__title">
                                                {title[5]}
                                            </div>
                                        </div>
                                    </a>
                                </div>"""  # href , photo , title , text
        twe_row_twe = f'''
                <div class="col-lg-3 mb-3">
                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                        data-aos-offset="150">

                                        <a href="{href[4]}" class="article-card__img-wrap">
                                            <div class="article-card__img" style="background-image: url({photo[4]})">
                                            </div>
                                        </a>


                                        <div class="p-4">
                                            <div class="article-card__category mb-1">
                                                {tip}
                                            </div>
                                            <a href="{href[4]}" class="article-card__title">
                                                {title[4]}
                                            </a>

                                        </div>
                                    </div>
                                </div>'''
        twe_row_three = f"""
                <div class="col-lg-3 mb-3">
                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                        data-aos-offset="150">

                                        <a href="{href[3]}" class="article-card__img-wrap">
                                            <div class="article-card__img" style="background-image: url({photo[3]})">
                                            </div>
                                        </a>


                                        <div class="p-4">
                                            <div class="article-card__category mb-1">
                                                {tip}
                                            </div>
                                            <a href="{href[3]}" class="article-card__title">
                                                {title[3]}
                                            </a>

                                        </div>
                                    </div>
                                </div>"""

        three_row_one = f"""
                <div class="col-lg-6  mb-3">
                                    <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                        <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                        </div>

                                        <div class="article-imaged__content p-4">
                                            <div class="article-imaged__category mb-1">
                                                {tip}
                                            </div>
                                            <div class="article-imaged__title">
                                                {title[2]}
                                            </div>
                                        </div>
                                    </a>
                                </div>"""  # href , photo , title , text
        three_row_twe = f'''
                <div class="col-lg-3 mb-3">
                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                        data-aos-offset="150">

                                        <a href="{href[1]}" class="article-card__img-wrap">
                                            <div class="article-card__img" style="background-image: url({photo[1]})">
                                            </div>
                                        </a>


                                        <div class="p-4">
                                            <div class="article-card__category mb-1">
                                                {tip}
                                            </div>
                                            <a href="{href[1]}" class="article-card__title">
                                                {title[1]}
                                            </a>

                                        </div>
                                    </div>
                                </div>'''
        three_row_three = f"""
                <div class="col-lg-3 mb-3">
                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                        data-aos-offset="150">

                                        <a href="{href[0]}" class="article-card__img-wrap">
                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                            </div>
                                        </a>


                                        <div class="p-4">
                                            <div class="article-card__category mb-1">
                                                {tip}
                                            </div>
                                            <a href="{href[0]}" class="article-card__title">
                                                {title[0]}
                                            </a>

                                        </div>
                                    </div>
                                </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt / 9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/news_out/{item}'>{item}</a></li>".format(item, item)

        data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three,
                'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three': twe_row_three,
                'three_row_one': three_row_one, 'three_row_twe': three_row_twe, 'three_row_three': three_row_three,
                'list': k}
        return render(request, 'news/main.news', data)

    else:
        return render(request, 'news/news.html')


def stat(request, page):
    tip = 'Мақалалар'
    href = []
    photo = []
    title = []
    page = int(page)

    cnt = int(stati.objects.count())

    page_num = int(cnt / 9)
    page_cnt_end = cnt % 9

    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = stati.objects.get(pk=1)

                href.append('/stati/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                            <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                                <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                                </div>

                                                                                <div class="article-imaged__content p-4">
                                                                                    <div class="article-imaged__category mb-1">
                                                                                        {tip}
                                                                                    </div>
                                                                                    <div class="article-imaged__title">
                                                                                        {title[0]}
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = stati.objects.all()[st:en]

                for item in inf:
                    href.append('/stati/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                            <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[1]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[0]}" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = stati.objects.all()[st:en]

                for item in inf:
                    href.append('/stati/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                            <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[2]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[1]}" class="article-card__title">
                                                                        {title[1]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                one_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[0]}" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <= 6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = stati.objects.all()[st:en]

                for item in inf:
                    href.append('/stati/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                            <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[3]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[2]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="#" class="article-card__title">
                                                                        {title[2]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                one_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="#" class="article-card__title">
                                                                        {title[1]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                twe_row_one = f"""
                                    <div class="col-lg-6 order-lg-1 mb-3">
                                                        <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[0]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = stati.objects.all()[st:en]

                for item in inf:
                    href.append('/stati/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                            <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[4]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[3]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="#" class="article-card__title">
                                                                        {title[3]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                one_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[2]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="#" class="article-card__title">
                                                                        {title[2]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                twe_row_one = f"""
                                    <div class="col-lg-6 order-lg-1 mb-3">
                                                        <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[1]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[0]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="" class="article-card__title">
                                                                    {title[0]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = stati.objects.all()[st:en]

                for item in inf:
                    href.append('/stati/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                            <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[5]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[4]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="#" class="article-card__title">
                                                                        {title[4]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                one_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[3]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[3]}" class="article-card__title">
                                                                        {title[3]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                twe_row_one = f"""
                                    <div class="col-lg-6 order-lg-1 mb-3">
                                                        <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[2]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[1]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="" class="article-card__title">
                                                                    {title[1]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                twe_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[0]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="" class="article-card__title">
                                                                    {title[0]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = stati.objects.all()[st:en]

                for item in inf:
                    href.append('/stati/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                            <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[6]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[5]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[5]}" class="article-card__title">
                                                                        {title[5]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                one_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[4]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[4]}" class="article-card__title">
                                                                        {title[4]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                twe_row_one = f"""
                                    <div class="col-lg-6 order-lg-1 mb-3">
                                                        <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[3]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[2]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="" class="article-card__title">
                                                                    {title[2]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                twe_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[1]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[1]}" class="article-card__title">
                                                                    {title[1]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                three_row_one = f"""
                                    <div class="col-lg-6  mb-3">
                                                        <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[0]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = stati.objects.all()[st:en]

                for item in inf:
                    href.append('/stati/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                            <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[7]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[6]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[6]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[6]}" class="article-card__title">
                                                                        {title[6]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                one_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[5]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[5]}" class="article-card__title">
                                                                        {title[5]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                twe_row_one = f"""
                                    <div class="col-lg-6 order-lg-1 mb-3">
                                                        <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[4]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[3]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[3]}" class="article-card__title">
                                                                    {title[3]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''
                twe_row_three = f"""
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                            data-aos-offset="150">

                                                            <a href="{href[2]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[2]}" class="article-card__title">
                                                                    {title[2]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>"""

                three_row_one = f"""
                                    <div class="col-lg-6  mb-3">
                                                        <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                            <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                            </div>

                                                            <div class="article-imaged__content p-4">
                                                                <div class="article-imaged__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <div class="article-imaged__title">
                                                                    {title[1]}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>"""  # href , photo , title , text
                three_row_twe = f'''
                                    <div class="col-lg-3 mb-3">
                                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                            data-aos-offset="150">

                                                            <a href="{href[0]}" class="article-card__img-wrap">
                                                                <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                </div>
                                                            </a>


                                                            <div class="p-4">
                                                                <div class="article-card__category mb-1">
                                                                    {tip}
                                                                </div>
                                                                <a href="{href[0]}" class="article-card__title">
                                                                    {title[0]}
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item,
                                                                                                                 c,
                                                                                                                 item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = stati.objects.all()[st:en]

        for item in inf:
            href.append('/stati/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                            <a href="{href[8]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                                </div>

                                                <div class="article-imaged__content p-4">
                                                    <div class="article-imaged__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <div class="article-imaged__title">
                                                        {title[8]}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>"""  # href , photo , title , text
        one_row_twe = f'''
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                data-aos-offset="150">

                                                <a href="{href[7]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[7]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[7]}" class="article-card__title">
                                                        {title[7]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>'''
        one_row_three = f"""
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                data-aos-offset="150">

                                                <a href="{href[6]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[6]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[6]}" class="article-card__title">
                                                        {title[6]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>"""

        twe_row_one = f"""
                    <div class="col-lg-6 order-lg-1 mb-3">
                                        <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                            <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                            </div>

                                            <div class="article-imaged__content p-4">
                                                <div class="article-imaged__category mb-1">
                                                    {tip}
                                                </div>
                                                <div class="article-imaged__title">
                                                    {title[5]}
                                                </div>
                                            </div>
                                        </a>
                                    </div>"""  # href , photo , title , text
        twe_row_twe = f'''
                    <div class="col-lg-3 mb-3">
                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                            data-aos-offset="150">

                                            <a href="{href[4]}" class="article-card__img-wrap">
                                                <div class="article-card__img" style="background-image: url({photo[4]})">
                                                </div>
                                            </a>


                                            <div class="p-4">
                                                <div class="article-card__category mb-1">
                                                    {tip}
                                                </div>
                                                <a href="{href[4]}" class="article-card__title">
                                                    {title[4]}
                                                </a>

                                            </div>
                                        </div>
                                    </div>'''
        twe_row_three = f"""
                    <div class="col-lg-3 mb-3">
                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                            data-aos-offset="150">

                                            <a href="{href[3]}" class="article-card__img-wrap">
                                                <div class="article-card__img" style="background-image: url({photo[3]})">
                                                </div>
                                            </a>


                                            <div class="p-4">
                                                <div class="article-card__category mb-1">
                                                    {tip}
                                                </div>
                                                <a href="{href[3]}" class="article-card__title">
                                                    {title[3]}
                                                </a>

                                            </div>
                                        </div>
                                    </div>"""

        three_row_one = f"""
                    <div class="col-lg-6  mb-3">
                                        <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                            <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                            </div>

                                            <div class="article-imaged__content p-4">
                                                <div class="article-imaged__category mb-1">
                                                    {tip}
                                                </div>
                                                <div class="article-imaged__title">
                                                    {title[2]}
                                                </div>
                                            </div>
                                        </a>
                                    </div>"""  # href , photo , title , text
        three_row_twe = f'''
                    <div class="col-lg-3 mb-3">
                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                            data-aos-offset="150">

                                            <a href="{href[1]}" class="article-card__img-wrap">
                                                <div class="article-card__img" style="background-image: url({photo[1]})">
                                                </div>
                                            </a>


                                            <div class="p-4">
                                                <div class="article-card__category mb-1">
                                                    {tip}
                                                </div>
                                                <a href="{href[1]}" class="article-card__title">
                                                    {title[1]}
                                                </a>

                                            </div>
                                        </div>
                                    </div>'''
        three_row_three = f"""
                    <div class="col-lg-3 mb-3">
                                        <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                            data-aos-offset="150">

                                            <a href="{href[0]}" class="article-card__img-wrap">
                                                <div class="article-card__img" style="background-image: url({photo[0]})">
                                                </div>
                                            </a>


                                            <div class="p-4">
                                                <div class="article-card__category mb-1">
                                                    {tip}
                                                </div>
                                                <a href="{href[0]}" class="article-card__title">
                                                    {title[0]}
                                                </a>

                                            </div>
                                        </div>
                                    </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt / 9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/stati/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/stati/{item}'>{item}</a></li>".format(item, item)

        data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three,
                'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three': twe_row_three,
                'three_row_one': three_row_one, 'three_row_twe': three_row_twe, 'three_row_three': three_row_three,
                'list': k}
        return render(request, 'news/news.html', data)

    else:
        return render(request, 'news/news.html')


def internationalNews(request, page):
    tip = 'Халықаралық және республикалық әріптестік'
    href = []
    photo = []
    title = []
    page = int(page)

    cnt = int(internationalCooperation.objects.count())

    page_num = int(cnt / 9)
    page_cnt_end = cnt % 9

    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = internationalCooperation.objects.get(pk=1)

                href.append('/internationalCooperation/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                                <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                                    <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                                    </div>

                                                                                    <div class="article-imaged__content p-4">
                                                                                        <div class="article-imaged__category mb-1">
                                                                                            {tip}
                                                                                        </div>
                                                                                        <div class="article-imaged__title">
                                                                                            {title[0]}
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = internationalCooperation.objects.all()[st:en]

                for item in inf:
                    href.append('/internationalCooperation/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[1]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[0]}" class="article-card__title">
                                                                            {title[0]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = internationalCooperation.objects.all()[st:en]

                for item in inf:
                    href.append('/internationalCooperation/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[2]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[1]}" class="article-card__title">
                                                                            {title[1]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[0]}" class="article-card__title">
                                                                            {title[0]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <= 6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = internationalCooperation.objects.all()[st:en]

                for item in inf:
                    href.append('/internationalCooperation/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[3]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[2]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[1]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[0]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = internationalCooperation.objects.all()[st:en]

                for item in inf:
                    href.append('/internationalCooperation/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[4]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[3]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[3]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[2]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[1]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = internationalCooperation.objects.all()[st:en]

                for item in inf:
                    href.append('/internationalCooperation/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[5]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[4]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[4]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[3]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[3]}" class="article-card__title">
                                                                            {title[3]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[2]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[1]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                twe_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = internationalCooperation.objects.all()[st:en]

                for item in inf:
                    href.append('/internationalCooperation/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[6]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[5]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[5]}" class="article-card__title">
                                                                            {title[5]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[4]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[4]}" class="article-card__title">
                                                                            {title[4]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[3]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[2]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[2]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                twe_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[1]}" class="article-card__title">
                                                                        {title[1]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                three_row_one = f"""
                                        <div class="col-lg-6  mb-3">
                                                            <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[0]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = internationalCooperation.objects.all()[st:en]

                for item in inf:
                    href.append('/internationalCooperation/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[7]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[6]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[6]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[6]}" class="article-card__title">
                                                                            {title[6]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[5]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[5]}" class="article-card__title">
                                                                            {title[5]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[4]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[3]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[3]}" class="article-card__title">
                                                                        {title[3]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                twe_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[2]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[2]}" class="article-card__title">
                                                                        {title[2]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                three_row_one = f"""
                                        <div class="col-lg-6  mb-3">
                                                            <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[1]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                three_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[0]}" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = internationalCooperation.objects.all()[st:en]

        for item in inf:
            href.append('/internationalCooperation/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                                <a href="{href[8]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[8]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
        one_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[7]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[7]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[7]}" class="article-card__title">
                                                            {title[7]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''
        one_row_three = f"""
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                    data-aos-offset="150">

                                                    <a href="{href[6]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[6]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[6]}" class="article-card__title">
                                                            {title[6]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>"""

        twe_row_one = f"""
                        <div class="col-lg-6 order-lg-1 mb-3">
                                            <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                </div>

                                                <div class="article-imaged__content p-4">
                                                    <div class="article-imaged__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <div class="article-imaged__title">
                                                        {title[5]}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>"""  # href , photo , title , text
        twe_row_twe = f'''
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                data-aos-offset="150">

                                                <a href="{href[4]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[4]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[4]}" class="article-card__title">
                                                        {title[4]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>'''
        twe_row_three = f"""
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                data-aos-offset="150">

                                                <a href="{href[3]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[3]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[3]}" class="article-card__title">
                                                        {title[3]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>"""

        three_row_one = f"""
                        <div class="col-lg-6  mb-3">
                                            <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                </div>

                                                <div class="article-imaged__content p-4">
                                                    <div class="article-imaged__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <div class="article-imaged__title">
                                                        {title[2]}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>"""  # href , photo , title , text
        three_row_twe = f'''
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                data-aos-offset="150">

                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[1]}" class="article-card__title">
                                                        {title[1]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>'''
        three_row_three = f"""
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                data-aos-offset="150">

                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[0]}" class="article-card__title">
                                                        {title[0]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt / 9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/internationalCooperation/{item}'>{item}</a></li>".format(item, item)

        data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three,
                'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three': twe_row_three,
                'three_row_one': three_row_one, 'three_row_twe': three_row_twe, 'three_row_three': three_row_three,
                'list': k}
        return render(request, 'news/news.html', data)

    else:
        return render(request, 'news/news.html')


def youthWor(request, page):
    tip = 'Жастармен жұмыс'
    href = []
    photo = []
    title = []
    page = int(page)

    cnt = int(youthWork.objects.count())

    page_num = int(cnt / 9)
    page_cnt_end = cnt % 9

    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = youthWork.objects.get(pk=1)

                href.append('/youthWork/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                                   <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                                       <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                                       </div>

                                                                                       <div class="article-imaged__content p-4">
                                                                                           <div class="article-imaged__category mb-1">
                                                                                               {tip}
                                                                                           </div>
                                                                                           <div class="article-imaged__title">
                                                                                               {title[0]}
                                                                                           </div>
                                                                                       </div>
                                                                                   </a>
                                                                               </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = youthWork.objects.all()[st:en]

                for item in inf:
                    href.append('/youthWork/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                   <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[1]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[0]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[0]}" class="article-card__title">
                                                                               {title[0]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = youthWork.objects.all()[st:en]

                for item in inf:
                    href.append('/youthWork/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                   <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[2]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[1]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[1]}" class="article-card__title">
                                                                               {title[1]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                one_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[0]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[0]}" class="article-card__title">
                                                                               {title[0]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <= 6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = youthWork.objects.all()[st:en]

                for item in inf:
                    href.append('/youthWork/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                   <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[3]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[2]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="#" class="article-card__title">
                                                                               {title[2]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                one_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[1]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="#" class="article-card__title">
                                                                               {title[1]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                twe_row_one = f"""
                                           <div class="col-lg-6 order-lg-1 mb-3">
                                                               <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                   <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                   </div>

                                                                   <div class="article-imaged__content p-4">
                                                                       <div class="article-imaged__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <div class="article-imaged__title">
                                                                           {title[0]}
                                                                       </div>
                                                                   </div>
                                                               </a>
                                                           </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = youthWork.objects.all()[st:en]

                for item in inf:
                    href.append('/youthWork/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                   <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[4]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[3]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="#" class="article-card__title">
                                                                               {title[3]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                one_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[2]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="#" class="article-card__title">
                                                                               {title[2]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                twe_row_one = f"""
                                           <div class="col-lg-6 order-lg-1 mb-3">
                                                               <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                   <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                   </div>

                                                                   <div class="article-imaged__content p-4">
                                                                       <div class="article-imaged__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <div class="article-imaged__title">
                                                                           {title[1]}
                                                                       </div>
                                                                   </div>
                                                               </a>
                                                           </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[0]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="" class="article-card__title">
                                                                           {title[0]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = youthWork.objects.all()[st:en]

                for item in inf:
                    href.append('/youthWork/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                   <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[5]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[4]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="#" class="article-card__title">
                                                                               {title[4]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                one_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[3]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[3]}" class="article-card__title">
                                                                               {title[3]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                twe_row_one = f"""
                                           <div class="col-lg-6 order-lg-1 mb-3">
                                                               <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                   <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                   </div>

                                                                   <div class="article-imaged__content p-4">
                                                                       <div class="article-imaged__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <div class="article-imaged__title">
                                                                           {title[2]}
                                                                       </div>
                                                                   </div>
                                                               </a>
                                                           </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[1]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="" class="article-card__title">
                                                                           {title[1]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>'''
                twe_row_three = f"""
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[0]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="" class="article-card__title">
                                                                           {title[0]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = youthWork.objects.all()[st:en]

                for item in inf:
                    href.append('/youthWork/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                   <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[6]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[5]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[5]}" class="article-card__title">
                                                                               {title[5]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                one_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[4]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[4]}" class="article-card__title">
                                                                               {title[4]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                twe_row_one = f"""
                                           <div class="col-lg-6 order-lg-1 mb-3">
                                                               <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                   <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                   </div>

                                                                   <div class="article-imaged__content p-4">
                                                                       <div class="article-imaged__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <div class="article-imaged__title">
                                                                           {title[3]}
                                                                       </div>
                                                                   </div>
                                                               </a>
                                                           </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[2]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="" class="article-card__title">
                                                                           {title[2]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>'''
                twe_row_three = f"""
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[1]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="{href[1]}" class="article-card__title">
                                                                           {title[1]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>"""

                three_row_one = f"""
                                           <div class="col-lg-6  mb-3">
                                                               <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                   <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                   </div>

                                                                   <div class="article-imaged__content p-4">
                                                                       <div class="article-imaged__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <div class="article-imaged__title">
                                                                           {title[0]}
                                                                       </div>
                                                                   </div>
                                                               </a>
                                                           </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = youthWork.objects.all()[st:en]

                for item in inf:
                    href.append('/youthWork/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                   <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[7]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[6]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[6]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[6]}" class="article-card__title">
                                                                               {title[6]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                one_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[5]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[5]}" class="article-card__title">
                                                                               {title[5]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                twe_row_one = f"""
                                           <div class="col-lg-6 order-lg-1 mb-3">
                                                               <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                   <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                   </div>

                                                                   <div class="article-imaged__content p-4">
                                                                       <div class="article-imaged__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <div class="article-imaged__title">
                                                                           {title[4]}
                                                                       </div>
                                                                   </div>
                                                               </a>
                                                           </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[3]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="{href[3]}" class="article-card__title">
                                                                           {title[3]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>'''
                twe_row_three = f"""
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[2]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="{href[2]}" class="article-card__title">
                                                                           {title[2]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>"""

                three_row_one = f"""
                                           <div class="col-lg-6  mb-3">
                                                               <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                   <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                   </div>

                                                                   <div class="article-imaged__content p-4">
                                                                       <div class="article-imaged__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <div class="article-imaged__title">
                                                                           {title[1]}
                                                                       </div>
                                                                   </div>
                                                               </a>
                                                           </div>"""  # href , photo , title , text
                three_row_twe = f'''
                                           <div class="col-lg-3 mb-3">
                                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                   data-aos-offset="150">

                                                                   <a href="{href[0]}" class="article-card__img-wrap">
                                                                       <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                       </div>
                                                                   </a>


                                                                   <div class="p-4">
                                                                       <div class="article-card__category mb-1">
                                                                           {tip}
                                                                       </div>
                                                                       <a href="{href[0]}" class="article-card__title">
                                                                           {title[0]}
                                                                       </a>

                                                                   </div>
                                                               </div>
                                                           </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = youthWork.objects.all()[st:en]

        for item in inf:
            href.append('/youthWork/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                                   <a href="{href[8]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                       <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                                       </div>

                                                       <div class="article-imaged__content p-4">
                                                           <div class="article-imaged__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <div class="article-imaged__title">
                                                               {title[8]}
                                                           </div>
                                                       </div>
                                                   </a>
                                               </div>"""  # href , photo , title , text
        one_row_twe = f'''
                               <div class="col-lg-3 mb-3">
                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                       data-aos-offset="150">

                                                       <a href="{href[7]}" class="article-card__img-wrap">
                                                           <div class="article-card__img" style="background-image: url({photo[7]})">
                                                           </div>
                                                       </a>


                                                       <div class="p-4">
                                                           <div class="article-card__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <a href="{href[7]}" class="article-card__title">
                                                               {title[7]}
                                                           </a>

                                                       </div>
                                                   </div>
                                               </div>'''
        one_row_three = f"""
                               <div class="col-lg-3 mb-3">
                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                       data-aos-offset="150">

                                                       <a href="{href[6]}" class="article-card__img-wrap">
                                                           <div class="article-card__img" style="background-image: url({photo[6]})">
                                                           </div>
                                                       </a>


                                                       <div class="p-4">
                                                           <div class="article-card__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <a href="{href[6]}" class="article-card__title">
                                                               {title[6]}
                                                           </a>

                                                       </div>
                                                   </div>
                                               </div>"""

        twe_row_one = f"""
                           <div class="col-lg-6 order-lg-1 mb-3">
                                               <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                   <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                   </div>

                                                   <div class="article-imaged__content p-4">
                                                       <div class="article-imaged__category mb-1">
                                                           {tip}
                                                       </div>
                                                       <div class="article-imaged__title">
                                                           {title[5]}
                                                       </div>
                                                   </div>
                                               </a>
                                           </div>"""  # href , photo , title , text
        twe_row_twe = f'''
                           <div class="col-lg-3 mb-3">
                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                   data-aos-offset="150">

                                                   <a href="{href[4]}" class="article-card__img-wrap">
                                                       <div class="article-card__img" style="background-image: url({photo[4]})">
                                                       </div>
                                                   </a>


                                                   <div class="p-4">
                                                       <div class="article-card__category mb-1">
                                                           {tip}
                                                       </div>
                                                       <a href="{href[4]}" class="article-card__title">
                                                           {title[4]}
                                                       </a>

                                                   </div>
                                               </div>
                                           </div>'''
        twe_row_three = f"""
                           <div class="col-lg-3 mb-3">
                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                   data-aos-offset="150">

                                                   <a href="{href[3]}" class="article-card__img-wrap">
                                                       <div class="article-card__img" style="background-image: url({photo[3]})">
                                                       </div>
                                                   </a>


                                                   <div class="p-4">
                                                       <div class="article-card__category mb-1">
                                                           {tip}
                                                       </div>
                                                       <a href="{href[3]}" class="article-card__title">
                                                           {title[3]}
                                                       </a>

                                                   </div>
                                               </div>
                                           </div>"""

        three_row_one = f"""
                           <div class="col-lg-6  mb-3">
                                               <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                   <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                   </div>

                                                   <div class="article-imaged__content p-4">
                                                       <div class="article-imaged__category mb-1">
                                                           {tip}
                                                       </div>
                                                       <div class="article-imaged__title">
                                                           {title[2]}
                                                       </div>
                                                   </div>
                                               </a>
                                           </div>"""  # href , photo , title , text
        three_row_twe = f'''
                           <div class="col-lg-3 mb-3">
                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                   data-aos-offset="150">

                                                   <a href="{href[1]}" class="article-card__img-wrap">
                                                       <div class="article-card__img" style="background-image: url({photo[1]})">
                                                       </div>
                                                   </a>


                                                   <div class="p-4">
                                                       <div class="article-card__category mb-1">
                                                           {tip}
                                                       </div>
                                                       <a href="{href[1]}" class="article-card__title">
                                                           {title[1]}
                                                       </a>

                                                   </div>
                                               </div>
                                           </div>'''
        three_row_three = f"""
                           <div class="col-lg-3 mb-3">
                                               <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                   data-aos-offset="150">

                                                   <a href="{href[0]}" class="article-card__img-wrap">
                                                       <div class="article-card__img" style="background-image: url({photo[0]})">
                                                       </div>
                                                   </a>


                                                   <div class="p-4">
                                                       <div class="article-card__category mb-1">
                                                           {tip}
                                                       </div>
                                                       <a href="{href[0]}" class="article-card__title">
                                                           {title[0]}
                                                       </a>

                                                   </div>
                                               </div>
                                           </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt / 9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                        item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                        item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}' {c}>{item}</a></li>".format(
                        item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/youthWork/{item}'>{item}</a></li>".format(
                        item, item)

        data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three,
                'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three': twe_row_three,
                'three_row_one': three_row_one, 'three_row_twe': three_row_twe, 'three_row_three': three_row_three,
                'list': k}
        return render(request, 'news/news.html', data)

    else:
        return render(request, 'news/news.html')


def vide(request, page):
    tip = 'Видеолар'
    href = []
    photo = []
    title = []
    page = int(page)

    cnt = int(video.objects.count())

    page_num = int(cnt / 9)
    page_cnt_end = cnt % 9

    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = video.objects.get(pk=1)

                href.append('/video/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                                       <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                                           <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                                           </div>

                                                                                           <div class="article-imaged__content p-4">
                                                                                               <div class="article-imaged__category mb-1">
                                                                                                   {tip}
                                                                                               </div>
                                                                                               <div class="article-imaged__title">
                                                                                                   {title[0]}
                                                                                               </div>
                                                                                           </div>
                                                                                       </a>
                                                                                   </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = video.objects.all()[st:en]

                for item in inf:
                    href.append('/video/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                       <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                           <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                           </div>

                                                                           <div class="article-imaged__content p-4">
                                                                               <div class="article-imaged__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <div class="article-imaged__title">
                                                                                   {title[1]}
                                                                               </div>
                                                                           </div>
                                                                       </a>
                                                                   </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[0]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[0]}" class="article-card__title">
                                                                                   {title[0]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = video.objects.all()[st:en]

                for item in inf:
                    href.append('/video/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                       <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                           <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                           </div>

                                                                           <div class="article-imaged__content p-4">
                                                                               <div class="article-imaged__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <div class="article-imaged__title">
                                                                                   {title[2]}
                                                                               </div>
                                                                           </div>
                                                                       </a>
                                                                   </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[1]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[1]}" class="article-card__title">
                                                                                   {title[1]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>'''
                one_row_three = f"""
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[0]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[0]}" class="article-card__title">
                                                                                   {title[0]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <= 6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = video.objects.all()[st:en]

                for item in inf:
                    href.append('/video/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                       <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                           <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                           </div>

                                                                           <div class="article-imaged__content p-4">
                                                                               <div class="article-imaged__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <div class="article-imaged__title">
                                                                                   {title[3]}
                                                                               </div>
                                                                           </div>
                                                                       </a>
                                                                   </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[2]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="#" class="article-card__title">
                                                                                   {title[2]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>'''
                one_row_three = f"""
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[1]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="#" class="article-card__title">
                                                                                   {title[1]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>"""

                twe_row_one = f"""
                                               <div class="col-lg-6 order-lg-1 mb-3">
                                                                   <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[0]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = video.objects.all()[st:en]

                for item in inf:
                    href.append('/video/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                       <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                           <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                           </div>

                                                                           <div class="article-imaged__content p-4">
                                                                               <div class="article-imaged__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <div class="article-imaged__title">
                                                                                   {title[4]}
                                                                               </div>
                                                                           </div>
                                                                       </a>
                                                                   </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[3]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="#" class="article-card__title">
                                                                                   {title[3]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>'''
                one_row_three = f"""
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[2]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="#" class="article-card__title">
                                                                                   {title[2]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>"""

                twe_row_one = f"""
                                               <div class="col-lg-6 order-lg-1 mb-3">
                                                                   <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[1]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[0]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="" class="article-card__title">
                                                                               {title[0]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = video.objects.all()[st:en]

                for item in inf:
                    href.append('/video/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                       <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                           <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                                           </div>

                                                                           <div class="article-imaged__content p-4">
                                                                               <div class="article-imaged__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <div class="article-imaged__title">
                                                                                   {title[5]}
                                                                               </div>
                                                                           </div>
                                                                       </a>
                                                                   </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[4]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="#" class="article-card__title">
                                                                                   {title[4]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>'''
                one_row_three = f"""
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[3]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[3]}" class="article-card__title">
                                                                                   {title[3]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>"""

                twe_row_one = f"""
                                               <div class="col-lg-6 order-lg-1 mb-3">
                                                                   <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[2]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[1]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="" class="article-card__title">
                                                                               {title[1]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                twe_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[0]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="" class="article-card__title">
                                                                               {title[0]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = video.objects.all()[st:en]

                for item in inf:
                    href.append('/video/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                       <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                           <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                                           </div>

                                                                           <div class="article-imaged__content p-4">
                                                                               <div class="article-imaged__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <div class="article-imaged__title">
                                                                                   {title[6]}
                                                                               </div>
                                                                           </div>
                                                                       </a>
                                                                   </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[5]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[5]}" class="article-card__title">
                                                                                   {title[5]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>'''
                one_row_three = f"""
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[4]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[4]}" class="article-card__title">
                                                                                   {title[4]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>"""

                twe_row_one = f"""
                                               <div class="col-lg-6 order-lg-1 mb-3">
                                                                   <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[3]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[2]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="" class="article-card__title">
                                                                               {title[2]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                twe_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[1]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[1]}" class="article-card__title">
                                                                               {title[1]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                three_row_one = f"""
                                               <div class="col-lg-6  mb-3">
                                                                   <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[0]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = video.objects.all()[st:en]

                for item in inf:
                    href.append('/video/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                       <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                           <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                                           </div>

                                                                           <div class="article-imaged__content p-4">
                                                                               <div class="article-imaged__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <div class="article-imaged__title">
                                                                                   {title[7]}
                                                                               </div>
                                                                           </div>
                                                                       </a>
                                                                   </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[6]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[6]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[6]}" class="article-card__title">
                                                                                   {title[6]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>'''
                one_row_three = f"""
                                                   <div class="col-lg-3 mb-3">
                                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                           data-aos-offset="150">

                                                                           <a href="{href[5]}" class="article-card__img-wrap">
                                                                               <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                               </div>
                                                                           </a>


                                                                           <div class="p-4">
                                                                               <div class="article-card__category mb-1">
                                                                                   {tip}
                                                                               </div>
                                                                               <a href="{href[5]}" class="article-card__title">
                                                                                   {title[5]}
                                                                               </a>

                                                                           </div>
                                                                       </div>
                                                                   </div>"""

                twe_row_one = f"""
                                               <div class="col-lg-6 order-lg-1 mb-3">
                                                                   <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[4]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[3]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[3]}" class="article-card__title">
                                                                               {title[3]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''
                twe_row_three = f"""
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[2]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[2]}" class="article-card__title">
                                                                               {title[2]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>"""

                three_row_one = f"""
                                               <div class="col-lg-6  mb-3">
                                                                   <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                       <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                       </div>

                                                                       <div class="article-imaged__content p-4">
                                                                           <div class="article-imaged__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <div class="article-imaged__title">
                                                                               {title[1]}
                                                                           </div>
                                                                       </div>
                                                                   </a>
                                                               </div>"""  # href , photo , title , text
                three_row_twe = f'''
                                               <div class="col-lg-3 mb-3">
                                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                       data-aos-offset="150">

                                                                       <a href="{href[0]}" class="article-card__img-wrap">
                                                                           <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                           </div>
                                                                       </a>


                                                                       <div class="p-4">
                                                                           <div class="article-card__category mb-1">
                                                                               {tip}
                                                                           </div>
                                                                           <a href="{href[0]}" class="article-card__title">
                                                                               {title[0]}
                                                                           </a>

                                                                       </div>
                                                                   </div>
                                                               </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                                item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = video.objects.all()[st:en]

        for item in inf:
            href.append('/video/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                                       <a href="{href[8]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                           <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                                           </div>

                                                           <div class="article-imaged__content p-4">
                                                               <div class="article-imaged__category mb-1">
                                                                   {tip}
                                                               </div>
                                                               <div class="article-imaged__title">
                                                                   {title[8]}
                                                               </div>
                                                           </div>
                                                       </a>
                                                   </div>"""  # href , photo , title , text
        one_row_twe = f'''
                                   <div class="col-lg-3 mb-3">
                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                           data-aos-offset="150">

                                                           <a href="{href[7]}" class="article-card__img-wrap">
                                                               <div class="article-card__img" style="background-image: url({photo[7]})">
                                                               </div>
                                                           </a>


                                                           <div class="p-4">
                                                               <div class="article-card__category mb-1">
                                                                   {tip}
                                                               </div>
                                                               <a href="{href[7]}" class="article-card__title">
                                                                   {title[7]}
                                                               </a>

                                                           </div>
                                                       </div>
                                                   </div>'''
        one_row_three = f"""
                                   <div class="col-lg-3 mb-3">
                                                       <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                           data-aos-offset="150">

                                                           <a href="{href[6]}" class="article-card__img-wrap">
                                                               <div class="article-card__img" style="background-image: url({photo[6]})">
                                                               </div>
                                                           </a>


                                                           <div class="p-4">
                                                               <div class="article-card__category mb-1">
                                                                   {tip}
                                                               </div>
                                                               <a href="{href[6]}" class="article-card__title">
                                                                   {title[6]}
                                                               </a>

                                                           </div>
                                                       </div>
                                                   </div>"""

        twe_row_one = f"""
                               <div class="col-lg-6 order-lg-1 mb-3">
                                                   <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                       <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                       </div>

                                                       <div class="article-imaged__content p-4">
                                                           <div class="article-imaged__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <div class="article-imaged__title">
                                                               {title[5]}
                                                           </div>
                                                       </div>
                                                   </a>
                                               </div>"""  # href , photo , title , text
        twe_row_twe = f'''
                               <div class="col-lg-3 mb-3">
                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                       data-aos-offset="150">

                                                       <a href="{href[4]}" class="article-card__img-wrap">
                                                           <div class="article-card__img" style="background-image: url({photo[4]})">
                                                           </div>
                                                       </a>


                                                       <div class="p-4">
                                                           <div class="article-card__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <a href="{href[4]}" class="article-card__title">
                                                               {title[4]}
                                                           </a>

                                                       </div>
                                                   </div>
                                               </div>'''
        twe_row_three = f"""
                               <div class="col-lg-3 mb-3">
                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                       data-aos-offset="150">

                                                       <a href="{href[3]}" class="article-card__img-wrap">
                                                           <div class="article-card__img" style="background-image: url({photo[3]})">
                                                           </div>
                                                       </a>


                                                       <div class="p-4">
                                                           <div class="article-card__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <a href="{href[3]}" class="article-card__title">
                                                               {title[3]}
                                                           </a>

                                                       </div>
                                                   </div>
                                               </div>"""

        three_row_one = f"""
                               <div class="col-lg-6  mb-3">
                                                   <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                       <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                       </div>

                                                       <div class="article-imaged__content p-4">
                                                           <div class="article-imaged__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <div class="article-imaged__title">
                                                               {title[2]}
                                                           </div>
                                                       </div>
                                                   </a>
                                               </div>"""  # href , photo , title , text
        three_row_twe = f'''
                               <div class="col-lg-3 mb-3">
                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                       data-aos-offset="150">

                                                       <a href="{href[1]}" class="article-card__img-wrap">
                                                           <div class="article-card__img" style="background-image: url({photo[1]})">
                                                           </div>
                                                       </a>


                                                       <div class="p-4">
                                                           <div class="article-card__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <a href="{href[1]}" class="article-card__title">
                                                               {title[1]}
                                                           </a>

                                                       </div>
                                                   </div>
                                               </div>'''
        three_row_three = f"""
                               <div class="col-lg-3 mb-3">
                                                   <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                       data-aos-offset="150">

                                                       <a href="{href[0]}" class="article-card__img-wrap">
                                                           <div class="article-card__img" style="background-image: url({photo[0]})">
                                                           </div>
                                                       </a>


                                                       <div class="p-4">
                                                           <div class="article-card__category mb-1">
                                                               {tip}
                                                           </div>
                                                           <a href="{href[0]}" class="article-card__title">
                                                               {title[0]}
                                                           </a>

                                                       </div>
                                                   </div>
                                               </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt / 9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                        item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                        item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/video/{item}' {c}>{item}</a></li>".format(
                        item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/video/{item}'>{item}</a></li>".format(
                        item, item)

        data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three,
                'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three': twe_row_three,
                'three_row_one': three_row_one, 'three_row_twe': three_row_twe, 'three_row_three': three_row_three,
                'list': k}
        return render(request, 'news/news.html', data)

    else:
        return render(request, 'news/news.html')


def perso(request):
    idDirector = []
    photoDirector = []
    number = []
    a = 0
    directorInfo = person.objects.order_by('field_name')[:1]
    for item in directorInfo:
        idDirector.append(str(item.id))
        photoDirector.append(str(item.photo))
        number.append('a')
        a += 150


    infoPersonal = person.objects.order_by('field_name')[1:]
    data = {'personal':infoPersonal, 'idDirector':idDirector, 'photoDirector':photoDirector}
    return render(request, 'news/personal.html', data)


def studentLiv(request, page):
    tip = 'Студенттік өмір'
    href = []
    photo = []
    title = []
    page = int(page)

    cnt = int(studentLive.objects.count())

    page_num = int(cnt / 9)
    page_cnt_end = cnt % 9

    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = studentLive.objects.get(pk=1)

                href.append('/studentLive/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                                <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                                    <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                                    </div>

                                                                                    <div class="article-imaged__content p-4">
                                                                                        <div class="article-imaged__category mb-1">
                                                                                            {tip}
                                                                                        </div>
                                                                                        <div class="article-imaged__title">
                                                                                            {title[0]}
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = studentLive.objects.all()[st:en]

                for item in inf:
                    href.append('/studentLive/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[1]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[0]}" class="article-card__title">
                                                                            {title[0]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = studentLive.objects.all()[st:en]

                for item in inf:
                    href.append('/studentLive/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[2]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[1]}" class="article-card__title">
                                                                            {title[1]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[0]}" class="article-card__title">
                                                                            {title[0]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <= 6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = studentLive.objects.all()[st:en]

                for item in inf:
                    href.append('/studentLive/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[3]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[2]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[1]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[0]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = studentLive.objects.all()[st:en]

                for item in inf:
                    href.append('/studentLive/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[4]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[3]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[3]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[2]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[1]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = studentLive.objects.all()[st:en]

                for item in inf:
                    href.append('/studentLive/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[5]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[4]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="#" class="article-card__title">
                                                                            {title[4]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[3]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[3]}" class="article-card__title">
                                                                            {title[3]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[2]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[1]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                twe_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = studentLive.objects.all()[st:en]

                for item in inf:
                    href.append('/studentLive/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[6]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[5]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[5]}" class="article-card__title">
                                                                            {title[5]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[4]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[4]}" class="article-card__title">
                                                                            {title[4]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[3]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[2]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="" class="article-card__title">
                                                                        {title[2]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                twe_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[1]}" class="article-card__title">
                                                                        {title[1]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                three_row_one = f"""
                                        <div class="col-lg-6  mb-3">
                                                            <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[0]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = studentLive.objects.all()[st:en]

                for item in inf:
                    href.append('/studentLive/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[7]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[6]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[6]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[6]}" class="article-card__title">
                                                                            {title[6]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                one_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[5]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[5]}" class="article-card__title">
                                                                            {title[5]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                twe_row_one = f"""
                                        <div class="col-lg-6 order-lg-1 mb-3">
                                                            <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[4]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[3]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[3]}" class="article-card__title">
                                                                        {title[3]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''
                twe_row_three = f"""
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                data-aos-offset="150">

                                                                <a href="{href[2]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[2]}" class="article-card__title">
                                                                        {title[2]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>"""

                three_row_one = f"""
                                        <div class="col-lg-6  mb-3">
                                                            <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                </div>

                                                                <div class="article-imaged__content p-4">
                                                                    <div class="article-imaged__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <div class="article-imaged__title">
                                                                        {title[1]}
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>"""  # href , photo , title , text
                three_row_twe = f'''
                                        <div class="col-lg-3 mb-3">
                                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                data-aos-offset="150">

                                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                    </div>
                                                                </a>


                                                                <div class="p-4">
                                                                    <div class="article-card__category mb-1">
                                                                        {tip}
                                                                    </div>
                                                                    <a href="{href[0]}" class="article-card__title">
                                                                        {title[0]}
                                                                    </a>

                                                                </div>
                                                            </div>
                                                        </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = studentLive.objects.all()[st:en]

        for item in inf:
            href.append('/studentLive/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                                <a href="{href[8]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[8]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
        one_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[7]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[7]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[7]}" class="article-card__title">
                                                            {title[7]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''
        one_row_three = f"""
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                    data-aos-offset="150">

                                                    <a href="{href[6]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[6]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[6]}" class="article-card__title">
                                                            {title[6]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>"""

        twe_row_one = f"""
                        <div class="col-lg-6 order-lg-1 mb-3">
                                            <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                </div>

                                                <div class="article-imaged__content p-4">
                                                    <div class="article-imaged__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <div class="article-imaged__title">
                                                        {title[5]}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>"""  # href , photo , title , text
        twe_row_twe = f'''
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                data-aos-offset="150">

                                                <a href="{href[4]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[4]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[4]}" class="article-card__title">
                                                        {title[4]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>'''
        twe_row_three = f"""
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                data-aos-offset="150">

                                                <a href="{href[3]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[3]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[3]}" class="article-card__title">
                                                        {title[3]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>"""

        three_row_one = f"""
                        <div class="col-lg-6  mb-3">
                                            <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                </div>

                                                <div class="article-imaged__content p-4">
                                                    <div class="article-imaged__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <div class="article-imaged__title">
                                                        {title[2]}
                                                    </div>
                                                </div>
                                            </a>
                                        </div>"""  # href , photo , title , text
        three_row_twe = f'''
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                data-aos-offset="150">

                                                <a href="{href[1]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[1]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[1]}" class="article-card__title">
                                                        {title[1]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>'''
        three_row_three = f"""
                        <div class="col-lg-3 mb-3">
                                            <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                data-aos-offset="150">

                                                <a href="{href[0]}" class="article-card__img-wrap">
                                                    <div class="article-card__img" style="background-image: url({photo[0]})">
                                                    </div>
                                                </a>


                                                <div class="p-4">
                                                    <div class="article-card__category mb-1">
                                                        {tip}
                                                    </div>
                                                    <a href="{href[0]}" class="article-card__title">
                                                        {title[0]}
                                                    </a>

                                                </div>
                                            </div>
                                        </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt / 9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}' {c}>{item}</a></li>".format(item, c, item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/studentLive/{item}'>{item}</a></li>".format(item, item)

        data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three,
                'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three': twe_row_three,
                'three_row_one': three_row_one, 'three_row_twe': three_row_twe, 'three_row_three': three_row_three,
                'list': k}
        return render(request, 'news/news.html', data)

    else:
        return render(request, 'news/news.html')


def studentHous(request, page):
    tip = 'Студенттік жатахана'
    href = []
    photo = []
    title = []
    page = int(page)

    cnt = int(studentHouse.objects.count())

    page_num = int(cnt / 9)
    page_cnt_end = cnt % 9

    if page == page_num + 1:
        if page_cnt_end <= 3:
            if page_cnt_end == 1:
                inf = studentHouse.objects.get(pk=1)

                href.append('/studentHouse/' + str(inf.id))
                photo.append("/media/" + str(inf.photo))
                title.append(inf.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                                    <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                                        <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                                        </div>

                                                                                        <div class="article-imaged__content p-4">
                                                                                            <div class="article-imaged__category mb-1">
                                                                                                {tip}
                                                                                            </div>
                                                                                            <div class="article-imaged__title">
                                                                                                {title[0]}
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item, item)

                data = {'type': tip, 'one_row_one': one_row_one, 'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 2:
                st = 0
                en = 2
                inf = studentHouse.objects.all()[st:en]

                for item in inf:
                    href.append('/studentHouse/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[1]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[0]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[0]}" class="article-card__title">
                                                                                {title[0]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

            if page_cnt_end == 3:
                st = 0
                en = 3
                inf = studentHouse.objects.all()[st:en]

                for item in inf:
                    href.append('/studentHouse/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[2]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[1]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[1]}" class="article-card__title">
                                                                                {title[1]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>'''
                one_row_three = f"""
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[0]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[0]}" class="article-card__title">
                                                                                {title[0]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(item,
                                                                                                              c,
                                                                                                              item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'list': k}
                return render(request, 'news/news.html', data)

        elif page_cnt_end >= 4 and page_cnt_end <= 6:
            if page_cnt_end == 4:
                st = 0
                en = 4
                inf = studentHouse.objects.all()[st:en]

                for item in inf:
                    href.append('/studentHouse/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[3]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[3]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[2]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="#" class="article-card__title">
                                                                                {title[2]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>'''
                one_row_three = f"""
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[1]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="#" class="article-card__title">
                                                                                {title[1]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>"""

                twe_row_one = f"""
                                            <div class="col-lg-6 order-lg-1 mb-3">
                                                                <a href="{href[0]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[0]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one,
                        'list': k}
                return render(request, 'news/news.html', data)
            elif page_cnt_end == 5:
                st = 0
                en = 5
                inf = studentHouse.objects.all()[st:en]

                for item in inf:
                    href.append('/studentHouse/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[4]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[4]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[3]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="#" class="article-card__title">
                                                                                {title[3]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>'''
                one_row_three = f"""
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[2]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="#" class="article-card__title">
                                                                                {title[2]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>"""

                twe_row_one = f"""
                                            <div class="col-lg-6 order-lg-1 mb-3">
                                                                <a href="{href[1]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[1]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="" class="article-card__title">
                                                                            {title[0]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 6
                inf = studentHouse.objects.all()[st:en]

                for item in inf:
                    href.append('/studentHouse/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[5]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[5]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[4]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="#" class="article-card__title">
                                                                                {title[4]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>'''
                one_row_three = f"""
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[3]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[3]}" class="article-card__title">
                                                                                {title[3]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>"""

                twe_row_one = f"""
                                            <div class="col-lg-6 order-lg-1 mb-3">
                                                                <a href="{href[2]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[2]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="" class="article-card__title">
                                                                            {title[1]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                twe_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="" class="article-card__title">
                                                                            {title[0]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'list': k}
                return render(request, 'news/news.html', data)


        else:
            if page_cnt_end == 7:
                st = 0
                en = 7
                inf = studentHouse.objects.all()[st:en]

                for item in inf:
                    href.append('/studentHouse/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[6]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[6]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[6]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[5]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[5]}" class="article-card__title">
                                                                                {title[5]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>'''
                one_row_three = f"""
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[4]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[4]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[4]}" class="article-card__title">
                                                                                {title[4]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>"""

                twe_row_one = f"""
                                            <div class="col-lg-6 order-lg-1 mb-3">
                                                                <a href="{href[3]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[3]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[3]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="" class="article-card__title">
                                                                            {title[2]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                twe_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[1]}" class="article-card__title">
                                                                            {title[1]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                three_row_one = f"""
                                            <div class="col-lg-6  mb-3">
                                                                <a href="{href[0]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[0]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[0]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'list': k}
                return render(request, 'news/news.html', data)
            else:
                st = 0
                en = 8
                inf = studentHouse.objects.all()[st:en]

                for item in inf:
                    href.append('/studentHouse/' + str(item.id))
                    photo.append("/media/" + str(item.photo))
                    title.append(item.title)

                one_row_one = f"""<div class="col-lg-6  mb-3">
                                                                    <a href="{href[7]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                        <div class="article-imaged__img" style="background-image: url({photo[7]})">
                                                                        </div>

                                                                        <div class="article-imaged__content p-4">
                                                                            <div class="article-imaged__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <div class="article-imaged__title">
                                                                                {title[7]}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>"""  # href , photo , title , text
                one_row_twe = f'''
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[6]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[6]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[6]}" class="article-card__title">
                                                                                {title[6]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>'''
                one_row_three = f"""
                                                <div class="col-lg-3 mb-3">
                                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                        data-aos-offset="150">

                                                                        <a href="{href[5]}" class="article-card__img-wrap">
                                                                            <div class="article-card__img" style="background-image: url({photo[5]})">
                                                                            </div>
                                                                        </a>


                                                                        <div class="p-4">
                                                                            <div class="article-card__category mb-1">
                                                                                {tip}
                                                                            </div>
                                                                            <a href="{href[5]}" class="article-card__title">
                                                                                {title[5]}
                                                                            </a>

                                                                        </div>
                                                                    </div>
                                                                </div>"""

                twe_row_one = f"""
                                            <div class="col-lg-6 order-lg-1 mb-3">
                                                                <a href="{href[4]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[4]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[4]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                twe_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[3]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[3]}" class="article-card__title">
                                                                            {title[3]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''
                twe_row_three = f"""
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[2]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[2]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[2]}" class="article-card__title">
                                                                            {title[2]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>"""

                three_row_one = f"""
                                            <div class="col-lg-6  mb-3">
                                                                <a href="{href[1]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                                    <div class="article-imaged__img" style="background-image: url({photo[1]})">
                                                                    </div>

                                                                    <div class="article-imaged__content p-4">
                                                                        <div class="article-imaged__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <div class="article-imaged__title">
                                                                            {title[1]}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>"""  # href , photo , title , text
                three_row_twe = f'''
                                            <div class="col-lg-3 mb-3">
                                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                                    data-aos-offset="150">

                                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                                        </div>
                                                                    </a>


                                                                    <div class="p-4">
                                                                        <div class="article-card__category mb-1">
                                                                            {tip}
                                                                        </div>
                                                                        <a href="{href[0]}" class="article-card__title">
                                                                            {title[0]}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>'''

                k = ''
                if cnt % 9 == 0:
                    nu = int(cnt / 9)
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)
                else:
                    nu = int(cnt / 9) + 1
                    c = 'class="active"'
                    for item in range(1, nu + 1):
                        if item == page:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(
                                item,
                                c,
                                item)
                        else:
                            k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item,
                                                                                                                item)

                data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe,
                        'one_row_three': one_row_three, 'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe,
                        'twe_row_three': twe_row_three, 'three_row_one': three_row_one, 'three_row_twe': three_row_twe,
                        'list': k}
                return render(request, 'news/news.html', data)

    elif page <= page_num:
        st = cnt - (page * 9)
        en = st + 9
        inf = studentHouse.objects.all()[st:en]

        for item in inf:
            href.append('/studentHouse/' + str(item.id))
            photo.append("/media/" + str(item.photo))
            title.append(item.title)

        one_row_one = f"""<div class="col-lg-6  mb-3">
                                                    <a href="{href[8]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                        <div class="article-imaged__img" style="background-image: url({photo[8]})">
                                                        </div>

                                                        <div class="article-imaged__content p-4">
                                                            <div class="article-imaged__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <div class="article-imaged__title">
                                                                {title[8]}
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>"""  # href , photo , title , text
        one_row_twe = f'''
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                        data-aos-offset="150">

                                                        <a href="{href[7]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[7]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[7]}" class="article-card__title">
                                                                {title[7]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>'''
        one_row_three = f"""
                                <div class="col-lg-3 mb-3">
                                                    <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                        data-aos-offset="150">

                                                        <a href="{href[6]}" class="article-card__img-wrap">
                                                            <div class="article-card__img" style="background-image: url({photo[6]})">
                                                            </div>
                                                        </a>


                                                        <div class="p-4">
                                                            <div class="article-card__category mb-1">
                                                                {tip}
                                                            </div>
                                                            <a href="{href[6]}" class="article-card__title">
                                                                {title[6]}
                                                            </a>

                                                        </div>
                                                    </div>
                                                </div>"""

        twe_row_one = f"""
                            <div class="col-lg-6 order-lg-1 mb-3">
                                                <a href="{href[5]}" data-aos="fade-left" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[5]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[5]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
        twe_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[4]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[4]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[4]}" class="article-card__title">
                                                            {title[4]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''
        twe_row_three = f"""
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                    data-aos-offset="150">

                                                    <a href="{href[3]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[3]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[3]}" class="article-card__title">
                                                            {title[3]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>"""

        three_row_one = f"""
                            <div class="col-lg-6  mb-3">
                                                <a href="{href[2]}" data-aos="fade-right" class="article-imaged aos-init aos-animate">
                                                    <div class="article-imaged__img" style="background-image: url({photo[2]})">
                                                    </div>

                                                    <div class="article-imaged__content p-4">
                                                        <div class="article-imaged__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <div class="article-imaged__title">
                                                            {title[2]}
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>"""  # href , photo , title , text
        three_row_twe = f'''
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                                                    data-aos-offset="150">

                                                    <a href="{href[1]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[1]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[1]}" class="article-card__title">
                                                            {title[1]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>'''
        three_row_three = f"""
                            <div class="col-lg-3 mb-3">
                                                <div class="article-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="150"
                                                    data-aos-offset="150">

                                                    <a href="{href[0]}" class="article-card__img-wrap">
                                                        <div class="article-card__img" style="background-image: url({photo[0]})">
                                                        </div>
                                                    </a>


                                                    <div class="p-4">
                                                        <div class="article-card__category mb-1">
                                                            {tip}
                                                        </div>
                                                        <a href="{href[0]}" class="article-card__title">
                                                            {title[0]}
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>"""

        k = ''
        if cnt % 9 == 0:
            nu = int(cnt / 9)
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                            item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item, item)
        else:
            nu = int(cnt / 9) + 1
            c = 'class="active"'
            for item in range(1, nu + 1):
                if item == page:
                    k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}' {c}>{item}</a></li>".format(item, c,
                                                                                                            item)
                else:
                    k = k + '\n' + f"<li> <a href='/catalog/studentHouse/{item}'>{item}</a></li>".format(item, item)

        data = {'type': tip, 'one_row_one': one_row_one, 'one_row_twe': one_row_twe, 'one_row_three': one_row_three,
                'twe_row_one': twe_row_one, 'twe_row_twe': twe_row_twe, 'twe_row_three': twe_row_three,
                'three_row_one': three_row_one, 'three_row_twe': three_row_twe, 'three_row_three': three_row_three,
                'list': k}
        return render(request, 'news/news.html', data)

    else:
        return render(request, 'news/news.html')


def studentBes(request):
    first_list = studentBest.objects.filter(course = 1).order_by('-field_name')[:4]
    secont_list = studentBest.objects.filter(course=2).order_by('-field_name')[:4]
    thirds_list = studentBest.objects.filter(course=3).order_by('-field_name')[:4]
    fourths_list = studentBest.objects.filter(course=4).order_by('-field_name')[:4]
    data = {'one': first_list, 'twe': secont_list, 'three': thirds_list, 'four': fourths_list}
    return render(request, 'news/jastar.html', data)