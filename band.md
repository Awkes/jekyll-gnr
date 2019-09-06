---
layout: default
title: Band
image: /assets/images/gnr-stage-01.jpg
js: /assets/js/band.js
---

## Band
---

{% for member in site.data.band %}
<div class="band-member" id="{{member.id}}">
  <div class="band-member-info">
    <h3>{{member.name}}</h3>
    <p>
      {{member.instruments}}
    </p>
  </div>
  <img class="band-member-img" src="{{member.image}}" alt="{{member.name}}">
</div>
{% endfor %}
