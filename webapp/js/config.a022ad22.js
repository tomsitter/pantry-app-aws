(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["config"],
  {
    1071: function (n, t, r) {
      "use strict";
      r.r(t);
      var o = function () {
          var n = this,
            t = n.$createElement,
            r = n._self._c || t;
          return r(
            "div",
            { staticClass: "container-fluid mt-4" },
            [
              r(
                "b-form",
                [
                  r(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-1",
                        label: "Stores Endpoint:",
                        "label-for": "storesEndpoint",
                      },
                    },
                    [
                      r("b-form-input", {
                        attrs: {
                          id: "storesEndpoint",
                          placeholder: "Stores Endpoint",
                        },
                        model: {
                          value: n.storesEndpoint,
                          callback: function (t) {
                            n.storesEndpoint = t;
                          },
                          expression: "storesEndpoint",
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        a = [],
        e =
          (r("8a79"),
          {
            name: "Config",
            data: function () {
              return {
                storesEndpoint: localStorage.hasOwnProperty("storesEndpoint")
                  ? localStorage.getItem("storesEndpoint")
                  : "",
              };
            },
            watch: {
              storesEndpoint: function (n) {
                n.endsWith("/") || (n += "/"),
                  localStorage.setItem("storesEndpoint", n);
              },
            },
          }),
        i = e,
        c = r("2877"),
        d = Object(c["a"])(i, o, a, !1, null, null, null);
      t["default"] = d.exports;
    },
    "44e7": function (n, t, r) {
      var o = r("861d"),
        a = r("c6b6"),
        e = r("b622"),
        i = e("match");
      n.exports = function (n) {
        var t;
        return o(n) && (void 0 !== (t = n[i]) ? !!t : "RegExp" == a(n));
      };
    },
    "5a34": function (n, t, r) {
      var o = r("44e7");
      n.exports = function (n) {
        if (o(n))
          throw TypeError("The method doesn't accept regular expressions");
        return n;
      };
    },
    "8a79": function (n, t, r) {
      "use strict";
      var o = r("23e7"),
        a = r("06cf").f,
        e = r("50c4"),
        i = r("5a34"),
        c = r("1d80"),
        d = r("ab13"),
        s = r("c430"),
        u = "".endsWith,
        l = Math.min,
        p = d("endsWith"),
        g =
          !s &&
          !p &&
          !!(function () {
            var n = a(String.prototype, "endsWith");
            return n && !n.writable;
          })();
      o(
        { target: "String", proto: !0, forced: !g && !p },
        {
          endsWith: function (n) {
            var t = String(c(this));
            i(n);
            var r = arguments.length > 1 ? arguments[1] : void 0,
              o = e(t.length),
              a = void 0 === r ? o : l(e(r), o),
              d = String(n);
            return u ? u.call(t, d, a) : t.slice(a - d.length, a) === d;
          },
        }
      );
    },
    ab13: function (n, t, r) {
      var o = r("b622"),
        a = o("match");
      n.exports = function (n) {
        var t = /./;
        try {
          "/./"[n](t);
        } catch (r) {
          try {
            return (t[a] = !1), "/./"[n](t);
          } catch (o) {}
        }
        return !1;
      };
    },
  },
]);
