---
title: News
image: /assets/images/news-hero.jpg
---

# News

---

{% for post in site.posts %}

<div class="news-container">

    <div class="flex-top"> 
      <h3>{{ post.title | upcase }}</h3>
      <h5>{{post.date | date_to_string: "ordinal", "US" }}</h5>
    </div>

    <div class="image-flex">
    <img src="{{post.image}}">
    </div>
    <div class="flex-bottom">
      <p>{{ post.excerpt }}</p>
      <a href="{{ post.url }}" class="news-link">READ MORE</a>
    </div>
</div>
  {% endfor %}