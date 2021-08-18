"use strict";
var createProjectTitle = function (e) {
    return $("<h3 />").text(e);
  },
  createProjectLinks = function (e) {
    var a = $('<ul class="project-links" />');
    return (
      e.map(function (e) {
        var t = $("<li />"),
          n = $("<a />");
        n.attr("href", e.link),
          n.attr("rel", "noopener"),
          n.attr("target", "_blank"),
          n.html('<i class="' + e.icon + '"></i>'),
          t.append(n),
          a.append(t);
      }),
      a
    );
  },
  createProjectLanguage = function (e) {
    var t = $('<span class="project-lang"/>');
    return (
      t.html(
        '<i class="' +
          {
            HTML: "fab fa-html5",
            CSS: "fab fa-css3-alt",
            JavaScript: "fab fa-js"
          }[e] +
          '" style="color: ' +
          { HTML: "#f0500c", CSS: "#16a2da", JavaScript: "#f5bd07" }[e] +
          '; font-size: 1.5rem"></i>'
      ),
      t
    );
  };
$(document).ready(function () {
  fetch("https://api.github.com/users/IdealisticINTJ/repos")
    .then(function (e) {
      return e.json();
    })
    .then(function (e) {
      return e.filter(function (e) {
        if (-1 !== e.name.indexOf("fcc") && e.language) {
          var t = $("<li />");
          t.addClass("project-tile");
          var n = createProjectTitle(e.name);
          t.append(n);
          var a = $('<span class="project-desc" />');
          a.text(e.description), t.append(a);
          var o = $('<div class="project-data"/>'),
            r = createProjectLinks([
              { link: e.homepage, icon: "fa fa-link" },
              { link: e.html_url, icon: "fab fa-github-alt" }
            ]);
          o.append(r);
          var c = createProjectLanguage(e.language);
          o.append(c), t.append(o), $("#projects-list").append(t);
        }
      });
    })
    .catch(function (e) {
      $("#portfolio-error").text(e);
    });
}),
  document.documentElement.scrollIntoView
    ? document.querySelectorAll('a[href^="#"]').forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault(),
            document
              .querySelector(this.getAttribute("href"))
              .scrollIntoView({ behavior: "smooth" });
        });
      })
    : $(document).on("click", 'a[href^="#"]', function (e) {
        e.preventDefault(),
          $("html, body").animate(
            { scrollTop: $($.attr(this, "href")).offset().top },
            500
          );
      }),
  (function (t) {
    t.fn.extend({
      teletype: function (e) {
        var a = t.extend({}, t.teletype.defaults, e);
        return t(this).each(function () {
          !(function e(t, n) {
            !(function e(t, n, a, o, r) {
              t.html(function (e, t) {
                return t + n[a];
              }),
                a < n.length - 1
                  ? setTimeout(function () {
                      e(t, n, a + 1, o, r);
                    }, o)
                  : r();
            })(t, a.text[n], 0, a.delay, function () {
              setTimeout(function () {
                !(function e(t, n, a) {
                  var o;
                  t.html(function (e, t) {
                    return (o = t.length), t.substr(0, o - 1);
                  }),
                    1 < o
                      ? setTimeout(function () {
                          e(t, n, a);
                        }, n)
                      : a();
                })(t, a.delay, function () {
                  e(t, (n + 1) % a.text.length);
                });
              }, a.pause);
            });
          })(t(this), 0);
        });
      }
    }),
      t.extend({
        teletype: { defaults: { delay: 100, pause: 2e3, text: [] } }
      });
  })(jQuery),
  $("#welcome-message").teletype({
    text: [
      "Hey there, I'm Salma!",
      "안녕하세요, 살마입니다.",
      "I am a computer science engineering freshman at VIT-AP.",
      "And, I'm working on Front-End Web Development with a UX / UI focus.",
      "Feel free to connect with me!"
      ,"안녕"
    ]
  }),
  $("#cursor").teletype({ text: ["_"], delay: 0, pause: 50 });

