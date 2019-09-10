---
title: News
image: /assets/images/news-hero.jpg
js: /assets/js/news.js
---

## News

---

{% for post in site.posts %}

<div class="news-container" id="a{{post.date | date: '%Y-%m-%d' }}">

    <div class="flex-top"> 
      <h3>{{ post.title | upcase }}</h3>
      <h5>{{post.date | date_to_string: "ordinal", "US" }}</h5>
    </div>

    <div class="image-flex">
    <a href="{{post.url}}"><img src="{{post.postimage}}"></a>
    </div>
    <div class="flex-bottom">
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url }}" class="news-link">READ MORE</a>
    </div>
</div>
  {% endfor %}