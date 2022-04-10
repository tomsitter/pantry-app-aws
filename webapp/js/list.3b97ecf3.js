(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["list"],
  {
    "1a33": function (t, n, a) {
      "use strict";
      a.r(n);
      var o = function () {
          var t = this,
            n = t.$createElement,
            a = t._self._c || n;
          return a(
            "div",
            { staticClass: "container-fluid mt-4" },
            [
              a("h2", [t._v("List Stores")]),
              a("p", [
                a("small", [
                  a("code", [t._v("GET " + t._s(t.storesGetEndpoint))]),
                ]),
              ]),
              a("hr"),
              a(
                "b-form",
                [
                  a(
                    "b-form-group",
                    {
                      attrs: { label: "Name:", "label-for": "queryStoreName" },
                    },
                    [
                      a("b-form-input", {
                        attrs: { id: "queryStoreName" },
                        model: {
                          value: t.queryStoreName,
                          callback: function (n) {
                            t.queryStoreName = n;
                          },
                          expression: "queryStoreName",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    { attrs: { label: "Store Type:", "label-for": "queryStoreType" } },
                    [
                      a("b-form-input", {
                        attrs: { id: "queryStoreType" },
                        model: {
                          value: t.queryStoreType,
                          callback: function (n) {
                            t.queryStoreType = n;
                          },
                          expression: "queryStoreType",
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    "b-form-group",
                    [
                      a(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: {
                            click: function (n) {
                              return n.preventDefault(), t.getStores();
                            },
                          },
                        },
                        [t._v("GET /stores")]
                      ),
                      t._v(" "),
                      a("b-spinner", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading",
                          },
                        ],
                        attrs: { small: "", label: "Loading.." },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              a("table", { staticClass: "table table-striped" }, [
                a(
                  "tbody",
                  [
                    t.stores.length
                      ? a("tr", [
                          a("th", [t._v("Name")]),
                          a("th", [t._v("Type")]),
                          a("th", [t._v("Location")]),
                          a("th", [t._v("Description")]),
                        ])
                      : t._e(),
                    t._l(t.stores, function (n) {
                      return a("tr", [
                        a("td", [t._v(t._s(n.store_name_str))]),
                        a("td", [t._v(t._s(n.store_type_str))]),
                        a("td", [
                          t._v(
                            t._s(n.location_city_str) +
                              " " +
                              t._s(n.location_neighborhood_str) +
                              " " +
                              t._s(n.location_state_str) +
                              " " +
                              t._s(n.location_country_str)
                          ),
                        ]),
                        a("td", [
                          a(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function (a) {
                                  return a.preventDefault(), t.showDetails(n);
                                },
                              },
                            },
                            [t._v("details")]
                          ),
                        ]),
                      ]);
                    }),
                  ],
                  2
                ),
              ]),
              a("b-modal", { attrs: { id: "modal-1", "ok-only": "" } }, [
                a("p", [t._v(t._s(t.modalDescription))]),
              ]),
            ],
            1
          );
        },
        r = [],
        e = (a("a15b"), a("bc3a")),
        i = a.n(e),
        s = {
          name: "List",
          data: function () {
            return {
              queryStoreName: "",
              queryStoreType: "",
              loading: !1,
              storesEndpoint: localStorage.hasOwnProperty("storesEndpoint")
                ? localStorage.getItem("storesEndpoint")
                : "",
              stores: [],
              modalDescription: "",
            };
          },
          computed: {
            storesGetEndpoint: function () {
              var t = [];
              return (
                "" != this.queryStoreName &&
                  t.push(
                    "store_id=" + encodeURIComponent(this.queryStoreName)
                  ),
                "" != this.queryStoreType &&
                  t.push("store_type=" + encodeURIComponent(this.queryStoreType)),
                this.storesEndpoint +
                  "stores" +
                  (t.length ? "?" + t.join("&") : "")
              );
            },
          },
          methods: {
            getStores: function () {
              var t = this;
              (this.loading = !0),
                i.a.get(this.storesGetEndpoint).then(
                  function (n) {
                    (t.stores = n.data), (t.loading = !1);
                  },
                  function (n) {
                    alert(n), (t.loading = !1);
                  }
                );
            },
            showDetails: function (t) {
              (this.modalDescription = t.description_str),
                this.$bvModal.show("modal-1");
            },
          },
        },
        l = s,
        u = a("2877"),
        d = Object(u["a"])(l, o, r, !1, null, null, null);
      n["default"] = d.exports;
    },
    a15b: function (t, n, a) {
      "use strict";
      var o = a("23e7"),
        r = a("44ad"),
        e = a("fc6a"),
        i = a("a640"),
        s = [].join,
        l = r != Object,
        u = i("join", ",");
      o(
        { target: "Array", proto: !0, forced: l || !u },
        {
          join: function (t) {
            return s.call(e(this), void 0 === t ? "," : t);
          },
        }
      );
    },
    a640: function (t, n, a) {
      "use strict";
      var o = a("d039");
      t.exports = function (t, n) {
        var a = [][t];
        return (
          !!a &&
          o(function () {
            a.call(
              null,
              n ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    },
  },
]);
