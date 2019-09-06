---
layout: default
title: Tour
image: /assets/images/tour.jpg
---

## Tour
---

<table class="tour-table">
  <tbody>
    {% for item in site.data.tour %}
      <tr>
        <td>{{item.date}}</td>
        <td>
          <b>{{item.city}}</b>
          <br>
          <i>{{item.venue}}</i>
        </td>
        <td><a href="{{item.ticketlink}}">Tickets</a></td>
      </tr>
    {% endfor %}
  </tbody>
</table>